/**
 * Electrical symbol rendering engine.
 *
 * Turns a plain symbol data object into themed, accessible SVG markup.
 * Framework-free so it can be reused inside the `muriel-schematics` editor.
 *
 * Scale handling:
 *   Each symbol originally shipped with its own arbitrary viewBox. This made
 *   identically-stroked symbols render at wildly different visual sizes. We now
 *   measure the actual content bounds (body + terminals + labels) once per
 *   symbol, and use those bounds + uniform padding as the viewBox. Result:
 *   every symbol occupies the same proportion of its card.
 */

const DEFAULT_PADDING = 20;

let measureSvg = null;
const fittedViewBoxCache = new Map();

/* ------------------------------------------------------------------ measure */

function getMeasureSvg() {
  if (measureSvg && document.body && document.body.contains(measureSvg)) {
    return measureSvg;
  }
  if (!document.body) return null;

  measureSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  measureSvg.setAttribute('width', '1');
  measureSvg.setAttribute('height', '1');
  measureSvg.style.position = 'absolute';
  measureSvg.style.left = '-9999px';
  measureSvg.style.top = '0';
  measureSvg.style.pointerEvents = 'none';
  measureSvg.setAttribute('aria-hidden', 'true');
  document.body.appendChild(measureSvg);
  return measureSvg;
}

function round(n) {
  return Math.round(n * 100) / 100;
}

/**
 * Compute (and cache) a tight viewBox for a symbol based on its actual content.
 * Falls back to the declared viewBox when DOM measurement isn't available
 * (e.g. jsdom in unit tests).
 */
function computeViewBox(symbol) {
  if (fittedViewBoxCache.has(symbol.id)) {
    return fittedViewBoxCache.get(symbol.id);
  }

  let viewBox = symbol.viewBox;

  if (typeof document !== 'undefined') {
    try {
      const meas = getMeasureSvg();
      if (meas) {
        meas.innerHTML = buildInnerMarkup(symbol);
        const bbox = meas.getBBox();
        if (
          bbox &&
          isFinite(bbox.x) &&
          isFinite(bbox.y) &&
          isFinite(bbox.width) &&
          isFinite(bbox.height) &&
          bbox.width > 0 &&
          bbox.height > 0
        ) {
          const p = DEFAULT_PADDING;
          viewBox = [
            round(bbox.x - p),
            round(bbox.y - p),
            round(bbox.width + p * 2),
            round(bbox.height + p * 2),
          ].join(' ');
        }
        meas.innerHTML = '';
      }
    } catch {
      /* jsdom / restricted environment — keep declared viewBox */
    }
  }

  fittedViewBoxCache.set(symbol.id, viewBox);
  return viewBox;
}

/* -------------------------------------------------------------------- render */

/**
 * @typedef {Object} Terminal
 * @property {string} id
 * @property {string} [label]
 * @property {'input'|'output'|'io'} type
 * @property {number} x
 * @property {number} y
 * @property {number} [labelX]
 * @property {number} [labelY]
 * @property {string} [labelColor]
 */

/**
 * @typedef {Object} SymbolDef
 * @property {string} id
 * @property {string} name
 * @property {string} category
 * @property {string} description
 * @property {string} viewBox
 * @property {string} svgBody
 * @property {Terminal[]} terminals
 */

const DEFAULT_LABEL_OFFSET = { x: 15, y: 5 };

function renderTerminal(terminal) {
  const { id, type, x, y, label, labelX, labelY, labelColor } = terminal;

  const circle = `<circle cx="${x}" cy="${y}" r="8" class="terminal-${type}" data-terminal-id="${id}" />`;

  if (!label) return circle;

  const lx = labelX ?? x + DEFAULT_LABEL_OFFSET.x;
  const ly = labelY ?? y + DEFAULT_LABEL_OFFSET.y;
  const labelClass = labelColor ? 'terminal-label' : `terminal-label terminal-label-${type}`;
  const styleAttr = labelColor ? ` style="fill:${labelColor}"` : '';

  return circle + `<text x="${lx}" y="${ly}" class="${labelClass}"${styleAttr}>${label}</text>`;
}

function buildInnerMarkup(symbol) {
  const terminals = (symbol.terminals || []).map(renderTerminal).join('');
  return `<g class="symbol-body">${symbol.svgBody}</g><g class="symbol-terminals">${terminals}</g>`;
}

/**
 * Render a full symbol as an SVG string with an auto-fitted viewBox.
 * @param {SymbolDef} symbol
 * @returns {string}
 */
export function renderSymbol(symbol) {
  if (!symbol || !symbol.id) {
    throw new Error('renderSymbol: invalid symbol definition');
  }

  const viewBox = computeViewBox(symbol);

  return `
<svg
  viewBox="${viewBox}"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="${escapeAttribute(symbol.name)}"
  preserveAspectRatio="xMidYMid meet"
>
  ${buildInnerMarkup(symbol)}
</svg>`.trim();
}

/**
 * Render a full symbol card as an HTML string.
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

/* ------------------------------------------------------------------ helpers */

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
