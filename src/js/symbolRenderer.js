/**
 * Electrical symbol rendering engine.
 *
 * Turns a plain symbol data object into themed, accessible SVG markup.
 * The renderer is intentionally framework-free so it can be reused inside
 * the `muriel-schematics` editor without pulling in extra dependencies.
 */

const DEFAULT_LABEL_OFFSET = { x: 15, y: 5 };

/**
 * @typedef {Object} Terminal
 * @property {string} id           Unique terminal id (within the symbol).
 * @property {string} [label]      Optional label rendered next to the point.
 * @property {'input'|'output'|'io'} type  Terminal kind (drives colour).
 * @property {number} x
 * @property {number} y
 * @property {number} [labelX]     Absolute label X (overrides default offset).
 * @property {number} [labelY]     Absolute label Y (overrides default offset).
 * @property {string} [labelColor] Optional colour override for the label.
 */

/**
 * @typedef {Object} SymbolDef
 * @property {string} id
 * @property {string} name
 * @property {string} category
 * @property {string} description
 * @property {string} viewBox
 * @property {string} svgBody       Raw SVG markup (no outer <svg>, no terminals).
 * @property {Terminal[]} terminals
 */

/**
 * Build the `<circle>` + `<text>` markup for a single terminal.
 * @param {Terminal} terminal
 * @returns {string}
 */
function renderTerminal(terminal) {
  const { id, type, x, y, label, labelX, labelY, labelColor } = terminal;

  const circle = `<circle cx="${x}" cy="${y}" r="8" class="terminal-${type}" data-terminal-id="${id}" />`;

  if (!label) return circle;

  const lx = labelX ?? x + DEFAULT_LABEL_OFFSET.x;
  const ly = labelY ?? y + DEFAULT_LABEL_OFFSET.y;
  const labelClass = labelColor ? 'terminal-label' : `terminal-label terminal-label-${type}`;
  const styleAttr = labelColor ? ` style="fill:${labelColor}"` : '';

  const text = `<text x="${lx}" y="${ly}" class="${labelClass}"${styleAttr}>${label}</text>`;

  return circle + text;
}

/**
 * Render a full symbol as an SVG string.
 * @param {SymbolDef} symbol
 * @returns {string}
 */
export function renderSymbol(symbol) {
  if (!symbol || !symbol.viewBox) {
    throw new Error('renderSymbol: invalid symbol definition');
  }

  const terminals = (symbol.terminals || []).map(renderTerminal).join('');

  return `
<svg
  viewBox="${symbol.viewBox}"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="${escapeAttribute(symbol.name)}"
  preserveAspectRatio="xMidYMid meet"
>
  <g class="symbol-body">${symbol.svgBody}</g>
  <g class="symbol-terminals">${terminals}</g>
</svg>`.trim();
}

/**
 * Render a full symbol card (name, drawing, description) as an HTML string.
 * @param {SymbolDef} symbol
 * @returns {string}
 */
export function renderSymbolCard(symbol) {
  return `
<article class="symbol-card" id="card-${symbol.id}" data-symbol-id="${symbol.id}">
  <header class="symbol-name">${escapeHtml(symbol.name)}</header>
  <div class="symbol-svg">${renderSymbol(symbol)}</div>
  <p class="connection-info">${escapeHtml(symbol.description)}</p>
</article>`.trim();
}

/**
 * Render a category section containing many symbol cards.
 * @param {string} category
 * @param {SymbolDef[]} symbols
 * @returns {string}
 */
export function renderCategory(category, symbols) {
  const cards = symbols.map(renderSymbolCard).join('\n');
  return `
<section class="symbol-category" data-category="${escapeAttribute(category)}">
  <h2>${escapeHtml(category)}</h2>
  ${cards}
</section>`.trim();
}

/* ---------------------------------------------------------------- helpers */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttribute(str) {
  return escapeHtml(str);
}