export default [
  {
    id: 'overload-relay-sp',
    name: 'Overload relay (single pole)',
    category: 'Relays',
    description: 'Power: L1 → T1',
    viewBox: '0 0 250 200',
    svgBody: `
<rect x="60" y="50" width="90" height="100" fill="none" stroke="black" stroke-width="2"/>
<text x="30" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="black">O/L</text>
<line x1="100" y1="33" x2="100" y2="50" stroke="black" stroke-width="2"/>
<line x1="100" y1="150" x2="100" y2="167" stroke="black" stroke-width="2"/>
<line x1="100" y1="50" x2="100" y2="80" stroke="black" stroke-width="2"/>
<line x1="100" y1="80" x2="120" y2="80" stroke="black" stroke-width="2"/>
<line x1="120" y1="80" x2="120" y2="120" stroke="black" stroke-width="2"/>
<line x1="100" y1="120" x2="120" y2="120" stroke="black" stroke-width="2"/>
<line x1="100" y1="120" x2="100" y2="150" stroke="black" stroke-width="2"/>`,
    terminals: [
      { id: 'L1', label: 'L1', type: 'input', x: 100, y: 25, labelX: 112, labelY: 18, labelColor: '#000' },
      { id: 'T1', label: 'T1', type: 'output', x: 100, y: 175, labelX: 112, labelY: 190, labelColor: '#000' },
    ],
  },
  {
    id: 'overload-relay-tp',
    name: 'Overload relay (triple pole)',
    category: 'Relays',
    description: 'Power: L1, L2, L3 → T1, T2, T3',
    viewBox: '0 0 250 200',
    svgBody: `
<rect x="60" y="50" width="150" height="100" fill="none" stroke="black" stroke-width="2"/>
<text x="30" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="black">O/L</text>
<line x1="80" y1="33" x2="80" y2="50" stroke="red" stroke-width="2"/>
<line x1="125" y1="33" x2="125" y2="50" stroke="orange" stroke-width="2"/>
<line x1="170" y1="33" x2="170" y2="50" stroke="blue" stroke-width="2"/>
<line x1="80" y1="150" x2="80" y2="167" stroke="red" stroke-width="2"/>
<line x1="125" y1="150" x2="125" y2="167" stroke="orange" stroke-width="2"/>
<line x1="170" y1="150" x2="170" y2="167" stroke="blue" stroke-width="2"/>
<line x1="80" y1="50" x2="80" y2="80" stroke="red" stroke-width="2"/>
<line x1="80" y1="80" x2="100" y2="80" stroke="red" stroke-width="2"/>
<line x1="100" y1="80" x2="100" y2="120" stroke="red" stroke-width="2"/>
<line x1="80" y1="120" x2="100" y2="120" stroke="red" stroke-width="2"/>
<line x1="80" y1="120" x2="80" y2="150" stroke="red" stroke-width="2"/>
<line x1="125" y1="50" x2="125" y2="80" stroke="orange" stroke-width="2"/>
<line x1="125" y1="80" x2="145" y2="80" stroke="orange" stroke-width="2"/>
<line x1="145" y1="80" x2="145" y2="120" stroke="orange" stroke-width="2"/>
<line x1="125" y1="120" x2="145" y2="120" stroke="orange" stroke-width="2"/>
<line x1="125" y1="120" x2="125" y2="150" stroke="orange" stroke-width="2"/>
<line x1="170" y1="50" x2="170" y2="80" stroke="blue" stroke-width="2"/>
<line x1="170" y1="80" x2="185" y2="80" stroke="blue" stroke-width="2"/>
<line x1="185" y1="80" x2="185" y2="120" stroke="blue" stroke-width="2"/>
<line x1="170" y1="120" x2="185" y2="120" stroke="blue" stroke-width="2"/>
<line x1="170" y1="120" x2="170" y2="150" stroke="blue" stroke-width="2"/>`,
    terminals: [
      { id: 'L1', label: 'L1', type: 'input', x: 80, y: 25, labelX: 65, labelY: 18 },
      { id: 'L2', label: 'L2', type: 'input', x: 125, y: 25, labelX: 112, labelY: 18 },
      { id: 'L3', label: 'L3', type: 'input', x: 170, y: 25, labelX: 157, labelY: 18 },
      { id: 'T1', label: 'T1', type: 'output', x: 80, y: 175, labelX: 65, labelY: 190 },
      { id: 'T2', label: 'T2', type: 'output', x: 125, y: 175, labelX: 112, labelY: 190 },
      { id: 'T3', label: 'T3', type: 'output', x: 170, y: 175, labelX: 157, labelY: 190 },
    ],
  },
];