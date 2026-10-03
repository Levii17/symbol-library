import { renderCategory } from './symbolRenderer.js';
import { groupByCategory, searchSymbols } from './dataService.js';

const container = document.getElementById('symbols-container');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('symbol-search');

/* ------------------------------------------------------------- rendering */

function renderLibrary(query = '') {
  const filtered = searchSymbols(query);
  const grouped = groupByCategory(filtered);

  const html = Object.entries(grouped)
    .map(([category, symbols]) => renderCategory(category, symbols))
    .join('\n');

  container.innerHTML = html;
  emptyState.hidden = filtered.length > 0;
}

/* --------------------------------------------------------------- search */

let searchTimeout;
searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  const value = e.target.value;
  searchTimeout = setTimeout(() => renderLibrary(value), 120);
});

/* ---------------------------------------------------------------- boot */

document.addEventListener('DOMContentLoaded', () => {
  renderLibrary();
});