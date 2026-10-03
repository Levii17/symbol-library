export default [
  {
    id: 'supply-connections',
    name: 'Connections to supply',
    category: 'Power Distribution',
    description: 'Three-phase power distribution | L1, L2, L3, N',
    viewBox: '0 0 400 200',
    svgBody: `
<line x1="50" y1="30" x2="300" y2="30" stroke="#cc0000" stroke-width="3"/>
<line x1="50" y1="60" x2="300" y2="60" stroke="#ff8800" stroke-width="3"/>
<line x1="50" y1="90" x2="300" y2="90" stroke="#0066cc" stroke-width="3"/>
<line x1="50" y1="120" x2="300" y2="120" stroke="#000000" stroke-width="3"/>
<line x1="70" y1="35" x2="70" y2="190" stroke="#cc0000" stroke-width="2"/>
<line x1="110" y1="65" x2="110" y2="190" stroke="#ff8800" stroke-width="2"/>
<line x1="150" y1="95" x2="150" y2="190" stroke="#0066cc" stroke-width="2"/>
<line x1="220" y1="120" x2="220" y2="190" stroke="#000000" stroke-width="2"/>
<circle cx="70" cy="30" r="6" fill="#000"/>
<circle cx="110" cy="60" r="6" fill="#000"/>
<circle cx="150" cy="90" r="6" fill="#000"/>
<circle cx="220" cy="120" r="6" fill="#000"/>
<text x="320" y="35" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="black">L1</text>
<text x="320" y="65" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="black">L2</text>
<text x="320" y="95" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="black">L3</text>
<text x="320" y="125" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="black">N</text>`,
    terminals: [
      { id: 'supply-L1', type: 'input', x: 50, y: 30 },
      { id: 'supply-L2', type: 'input', x: 50, y: 60 },
      { id: 'supply-L3', type: 'input', x: 50, y: 90 },
      { id: 'supply-N', type: 'input', x: 50, y: 120 },
      { id: 'out-L1', label: 'L1', type: 'output', x: 70, y: 190, labelX: 55, labelY: 195 },
      { id: 'out-L2', label: 'L2', type: 'output', x: 110, y: 190, labelX: 95, labelY: 195 },
      { id: 'out-L3', label: 'L3', type: 'output', x: 150, y: 190, labelX: 135, labelY: 195 },
      { id: 'out-N', label: 'N', type: 'output', x: 220, y: 190, labelX: 210, labelY: 195 },
    ],
  },
];