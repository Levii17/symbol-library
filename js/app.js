import { renderCategory } from './symbolRenderer.js';
import { groupByCategory, searchSymbols } from './dataService.js';

const container = document.getElementById('symbols-container');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('symbol-search');
const themeToggle = document.getElementById('theme-toggle');

/* ------------------------------------------------------------------ theme */

const THEME_KEY = 'symbol-library-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));
}

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

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
  initTheme();
  renderLibrary();
});