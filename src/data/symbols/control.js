export default [
  {
    id: 'push-button-start',
    name: 'Push button (start)',
    category: 'Control Elements',
    description: 'Normally Open Contact | Closes when pressed',
    viewBox: '0 0 200 200',
    svgBody: `
<text x="100" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="black">I</text>
<line x1="80" y1="70" x2="80" y2="85" stroke="black" stroke-width="3"/>
<line x1="80" y1="70" x2="120" y2="70" stroke="black" stroke-width="3"/>
<line x1="120" y1="70" x2="120" y2="85" stroke="black" stroke-width="3"/>
<line x1="100" y1="70" x2="100" y2="110" stroke="black" stroke-width="3"/>
<line x1="70" y1="110" x2="130" y2="110" stroke="black" stroke-width="3"/>
<line x1="20" y1="140" x2="80" y2="140" stroke="black" stroke-width="3"/>
<circle cx="80" cy="140" r="6" fill="black"/>
<circle cx="120" cy="140" r="6" fill="black"/>
<line x1="120" y1="140" x2="180" y2="140" stroke="black" stroke-width="3"/>`,
    terminals: [
      { id: 'in', label: 'IN', type: 'input', x: 20, y: 140, labelX: 5, labelY: 135 },
      { id: 'out', label: 'OUT', type: 'output', x: 180, y: 140, labelX: 185, labelY: 135 },
    ],
  },
  {
    id: 'push-button-stop',
    name: 'Push button (stop)',
    category: 'Control Elements',
    description: 'Normally Closed Contact | Opens when pressed',
    viewBox: '0 0 200 200',
    svgBody: `
<text x="100" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="black">O</text>
<line x1="80" y1="69" x2="80" y2="85" stroke="black" stroke-width="3"/>
<line x1="80" y1="70" x2="120" y2="70" stroke="black" stroke-width="3"/>
<line x1="120" y1="69" x2="120" y2="85" stroke="black" stroke-width="3"/>
<line x1="100" y1="70" x2="100" y2="130" stroke="black" stroke-width="3"/>
<line x1="70" y1="130" x2="130" y2="130" stroke="black" stroke-width="3"/>
<line x1="20" y1="125" x2="80" y2="125" stroke="black" stroke-width="3"/>
<circle cx="80" cy="125" r="6" fill="black"/>
<circle cx="120" cy="125" r="6" fill="black"/>
<line x1="120" y1="125" x2="180" y2="125" stroke="black" stroke-width="3"/>`,
    terminals: [
      { id: 'in', label: 'IN', type: 'input', x: 20, y: 125, labelX: 5, labelY: 120 },
      { id: 'out', label: 'OUT', type: 'output', x: 180, y: 125, labelX: 185, labelY: 120 },
    ],
  },
  {
    id: 'switch-sp',
    name: 'Switch (single pole)',
    category: 'Control Elements',
    description: 'Manual switch | Controls circuit continuity',
    viewBox: '0 0 200 200',
    svgBody: `
<line x1="100" y1="30" x2="100" y2="80" stroke="#000" stroke-width="3"/>
<circle cx="100" cy="80" r="6" fill="#000"/>
<line x1="125" y1="75" x2="100" y2="160" stroke="#000" stroke-width="3"/>
<circle cx="100" cy="160" r="6" fill="#000"/>
<line x1="100" y1="160" x2="100" y2="220" stroke="#000" stroke-width="3"/>`,
    terminals: [
      { id: 'in', label: 'IN', type: 'input', x: 100, y: 30, labelX: 115, labelY: 35 },
      { id: 'out', label: 'OUT', type: 'output', x: 100, y: 220, labelX: 115, labelY: 225 },
    ],
  },
  {
    id: 'switch-two-way',
    name: 'Switch (two-way)',
    category: 'Control Elements',
    description: 'Two-way switch | Route power from one input to either of two outputs',
    viewBox: '0 0 200 200',
    svgBody: `
<line x1="20" y1="100" x2="80" y2="100" stroke="black" stroke-width="3"/>
<circle cx="80" cy="100" r="6" fill="black"/>
<line x1="80" y1="100" x2="160" y2="60" stroke="black" stroke-width="3"/>
<circle cx="160" cy="60" r="6" fill="black"/>
<line x1="160" y1="60" x2="220" y2="60" stroke="black" stroke-width="3"/>
<circle cx="160" cy="140" r="6" fill="black"/>
<line x1="160" y1="140" x2="220" y2="140" stroke="black" stroke-width="3"/>
<line x1="80" y1="100" x2="160" y2="140" stroke="black" stroke-width="2" stroke-dasharray="4,4" opacity="0.6"/>`,
    terminals: [
      { id: 'in', type: 'input', x: 20, y: 100 },
      { id: 'out-a', type: 'output', x: 220, y: 60 },
      { id: 'out-b', type: 'output', x: 220, y: 140 },
    ],
  },
];