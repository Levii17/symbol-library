export default [
  {
    id: 'fuse',
    name: 'Fuse',
    category: 'Safety Components',
    description: 'Protection device | Breaks on overcurrent',
    viewBox: '0 0 200 250',
    svgBody: `
<line x1="100" y1="30" x2="100" y2="80" stroke="#000" stroke-width="3"/>
<rect x="80" y="80" width="40" height="90" fill="none" stroke="#000" stroke-width="3"/>
<line x1="100" y1="80" x2="100" y2="170" stroke="#000" stroke-width="3"/>
<line x1="100" y1="170" x2="100" y2="220" stroke="#000" stroke-width="3"/>
<text x="130" y="130" font-family="Arial" font-size="12" fill="#000">F1</text>`,
    terminals: [
      { id: 'in', label: 'IN', type: 'input', x: 100, y: 30, labelX: 85, labelY: 25 },
      { id: 'out', label: 'OUT', type: 'output', x: 100, y: 220, labelX: 85, labelY: 235 },
    ],
  },
];