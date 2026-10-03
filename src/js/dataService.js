import { symbolCategories } from '../data/index.js';

/**
 * Flatten the category map into a single ordered array of symbols.
 * @returns {import('./symbolRenderer.js').SymbolDef[]}
 */
export function getAllSymbols() {
  return Object.values(symbolCategories).flat();
}

/**
 * Group symbols by their `category` field.
 * @param {import('./symbolRenderer.js').SymbolDef[]} [symbols]
 * @returns {Record<string, import('./symbolRenderer.js').SymbolDef[]>}
 */
export function groupByCategory(symbols = getAllSymbols()) {
  return symbols.reduce((acc, symbol) => {
    (acc[symbol.category] ||= []).push(symbol);
    return acc;
  }, {});
}

/**
 * Case-insensitive search across name, category and description.
 * @param {string} query
 * @param {import('./symbolRenderer.js').SymbolDef[]} [symbols]
 * @returns {import('./symbolRenderer.js').SymbolDef[]}
 */
export function searchSymbols(query, symbols = getAllSymbols()) {
  const q = query.trim().toLowerCase();
  if (!q) return symbols;

  return symbols.filter((s) =>
    [s.name, s.category, s.description].some((field) => field.toLowerCase().includes(q))
  );
}