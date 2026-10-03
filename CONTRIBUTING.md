# Contributing

Thanks for wanting to help improve the symbol library!

## Adding a New Symbol

1. Pick the right category file under `src/data/symbols/` (e.g. `motors.js`).
2. Add a new object to the array with the following shape:

   ```js
   {
     id: 'my-symbol',                 // unique, kebab-case
     name: 'My Symbol',               // display name
     category: 'Motors',              // must match the file's category
     description: 'Short explanation',
     viewBox: '0 0 200 200',          // SVG viewBox
     svgBody: `
       <line ... />
       <circle ... />
     `,                                // drawing only — NO terminal circles
     terminals: [
       { id: 'in', label: 'IN', type: 'input',  x: 20,  y: 100 },
       { id: 'out', label: 'OUT', type: 'output', x: 180, y: 100 },
     ],
   }
   ```

3. **Do not include terminal circles** (`r="8"` with `class="terminal-*"`) inside
   `svgBody` — the renderer generates them from the `terminals` array.

4. Run `npm test` to make sure your symbol passes validation.

## Coding Standards

- Run `npm run lint` and `npm run format` before committing.
- Prefer plain ES modules over frameworks.
- Keep `svgBody` free of logic — it is just markup.

## Pull Requests

1. Fork the repo.
2. Branch: `feature/my-new-symbol`.
3. Commit and push.
4. Open a PR with a screenshot of your new symbol rendered in the preview.

