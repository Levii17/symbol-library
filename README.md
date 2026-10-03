# Electrical Symbols Library

A web-based library showcasing **electrical schematic symbols** that comply with South
African standards (SANS) and common international conventions.

This project provides a visual reference for engineers, electricians, students and hobbyists
working with electrical diagrams, and doubles as a **reusable symbol data source** for tools
such as [`muriel-schematics`](https://github.com/Levii17/muriel-schematics).

## Live Demo

[Electrical Symbols Preview](https://levii17.github.io/symbol-library/)

## Overview

- Quick visual reference for common electrical symbols.
- Consistent, SANS-compliant schematic building blocks.
- **Data-driven** - every symbol is a plain JS object, so it can be consumed by any
  renderer, not just this one.

## Symbol Previews

### Circuit Breakers
![Circuit Breakers Preview](docs/previews/circuit-breakers.png)

### Control Elements
![Control Elements Preview](docs/previews/control-elements.png)

### Motors
![Motors Preview](docs/previews/motors.png)

### Lamps & Indicators
![Lamps Preview](docs/previews/lamps.png)

## Features

- **Categorised symbol library** - Circuit Breakers, Isolators, Control, Coils &
  Contactors, Contacts, Relays, Motors, Measurements, Lamps, Passive, Safety and Power
  Distribution.
- **Live search** across names, categories and descriptions.
- **Dark / light theme** with system preference detection and persistence.
- **Structured terminal data** - every connection point has an `id`, `type`
  (`input` / `output` / `io`) and coordinates, ready for wiring logic.
- **Reusable renderer** - `renderSymbol()` returns a plain SVG string with no framework
  dependency.
- **Tested** with Vitest.

## Tech Stack

- **HTML5:** structure and semantics.
- **CSS3:** theming via CSS custom properties.
- **Vanilla ES modules:** no runtime dependencies.
- **Vite:** dev server & bundler.
- **Vitest:** unit tests.
- **ESLint + Prettier:** lint and formatting.

## Getting Started

### Prerequisites

- Node.js 18+ (only for the dev server / tests - the library itself runs in any browser).

### Install & run

```bash
git clone https://github.com/levii17/symbol-library.git
cd symbol-library
npm install
npm run dev
Open [http://localhost:5173](http://localhost:5173)].
```
### Other scripts

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build
npm test           # run the test suite
npm run lint       # eslint
npm run format     # prettier
```

## Project Structure

```
symbol-library/
├── index.html              # Minimal shell, populated by JS
├── styles.css              # Global styles & theming
├── src/
│   ├── js/
│   │   ├── app.js          # Application bootstrap
│   │   ├── symbolRenderer.js  # Data → SVG renderer (reusable)
│   │   └── dataService.js  # Search & grouping helpers
│   └── data/
│       ├── index.js        # Aggregates all symbol categories
│       └── symbols/        # One file per category
├── tests/                  # Vitest unit tests
└── docs/                   # Previews
```

## Consuming the Library

The symbol catalogue and renderer are both published as ES modules, so
`muriel-schematics` (or anything else) can consume them directly.

```js
import { symbols, symbolCategories } from 'symbol-library';
import { renderSymbol } from 'symbol-library/renderer';

// Find a symbol by id
const cb = symbols.find((s) => s.id === 'circuit-breaker-sp');

// Render it anywhere
document.querySelector('#canvas').innerHTML = renderSymbol(cb);
```

### Symbol Schema

```js
{
  id: 'circuit-breaker-sp',
  name: 'Circuit Breaker (single pole)',
  category: 'Circuit Breakers',
  description: 'Input: Top terminal | Output: Bottom terminal',
  viewBox: '0 0 200 300',
  svgBody: '<line .../><rect .../>',           // raw SVG, no outer <svg>, no terminals
  terminals: [
    { id: 'in',  label: 'IN',  type: 'input',  x: 100, y: 20  },
    { id: 'out', label: 'OUT', type: 'output', x: 100, y: 280 },
  ],
}
```

### Wiring into `muriel-schematics`

The library now exports a clean API. Inside `muriel-schematics` you can:

```bash
npm install ../symbol-library        # or publish to npm and install by name
```

```js
import { symbols, symbolCategories } from 'symbol-library';
import { renderSymbol, renderSymbolCard } from 'symbol-library/renderer';
```

## Roadmap

- [x] Data-driven symbol catalogue
- [x] Search
- [x] Dark theme
- [x] Reusable renderer module
- [ ] Hover tooltips with pin descriptions
- [ ] SVG / PNG export per symbol
- [ ] Interactive terminal hit-testing for wiring UI
- [ ] Expand library with additional SANS-compliant symbols

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT — see [LICENSE](./LICENSE).