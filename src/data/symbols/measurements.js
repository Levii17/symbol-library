export default [
  {
    id: 'energy-meter',
    name: 'Energy meter (kilo Watt hour meter)',
    category: 'Measurements',
    description: 'Measures energy consumption | In series with load',
    viewBox: '0 0 300 200',
    svgBody: `
<line x1="20" y1="60" x2="40" y2="60" stroke="red" stroke-width="2"/>
<line x1="20" y1="100" x2="40" y2="100" stroke="black" stroke-width="2"/>
<line x1="260" y1="60" x2="280" y2="60" stroke="red" stroke-width="2"/>
<line x1="260" y1="100" x2="280" y2="100" stroke="black" stroke-width="2"/>
<rect x="40" y="40" width="220" height="120" fill="none" stroke="#000" stroke-width="2"/>
<line x1="40" y1="80" x2="260" y2="80" stroke="#000" stroke-width="2"/>
<text x="150" y="135" font-family="Arial, sans-serif" font-size="24" font-weight="normal" text-anchor="middle" fill="#000">kWh</text>`,
    terminals: [
      { id: 'L-in', label: 'L', type: 'input', x: 20, y: 60, labelX: 5, labelY: 55 },
      { id: 'N-in', label: 'N', type: 'input', x: 20, y: 100, labelX: 5, labelY: 95 },
      { id: 'L-out', label: 'L', type: 'output', x: 280, y: 60, labelX: 285, labelY: 55 },
      { id: 'N-out', label: 'N', type: 'output', x: 280, y: 100, labelX: 285, labelY: 95 },
    ],
  },
  {
    id: 'ammeter',
    name: 'Ammeter',
    category: 'Measurements',
    description: 'Measures current | Connect in series with load',
    viewBox: '0 0 200 100',
    svgBody: `
<line x1="20" y1="50" x2="65" y2="50" stroke="#000" stroke-width="2"/>
<circle cx="100" cy="50" r="35" fill="none" stroke="#000" stroke-width="2"/>
<line x1="135" y1="50" x2="180" y2="50" stroke="#000" stroke-width="2"/>
<text x="100" y="58" font-family="Arial, sans-serif" font-size="24" font-weight="normal" text-anchor="middle" fill="#000">A</text>`,
    terminals: [
      { id: 'in', label: 'IN', type: 'input', x: 20, y: 50, labelX: 5, labelY: 45 },
      { id: 'out', label: 'OUT', type: 'output', x: 180, y: 50, labelX: 185, labelY: 45 },
    ],
  },
  {
    id: 'voltmeter',
    name: 'Voltmeter',
    category: 'Measurements',
    description: 'Measures voltage | Connect in parallel',
    viewBox: '0 0 200 100',
    svgBody: `
<line x1="20" y1="50" x2="65" y2="50" stroke="#000" stroke-width="2"/>
<circle cx="100" cy="50" r="35" fill="none" stroke="#000" stroke-width="2"/>
<line x1="135" y1="50" x2="180" y2="50" stroke="#000" stroke-width="2"/>
<text x="100" y="58" font-family="Arial, sans-serif" font-size="24" font-weight="normal" text-anchor="middle" fill="#000">V</text>`,
    terminals: [
      { id: 'plus', label: '+', type: 'io', x: 20, y: 50, labelX: 5, labelY: 45 },
      { id: 'minus', label: '-', type: 'io', x: 180, y: 50, labelX: 185, labelY: 45 },
    ],
  },
  {
    id: 'earth-connection',
    name: 'Earth connection',
    category: 'Measurements',
    description: 'Protective earth connection',
    viewBox: '0 0 200 150',
    svgBody: `
<line x1="100" y1="30" x2="100" y2="90" stroke="#006600" stroke-width="3"/>
<line x1="70" y1="90" x2="130" y2="90" stroke="#006600" stroke-width="3"/>
<line x1="80" y1="105" x2="120" y2="105" stroke="#006600" stroke-width="3"/>
<line x1="90" y1="120" x2="110" y2="120" stroke="#006600" stroke-width="3"/>`,
    terminals: [{ id: 'pe', type: 'io', x: 100, y: 30 }],
  },
];