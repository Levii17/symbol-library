export default [
  {
    id: 'resistor',
    name: 'Resistor',
    category: 'Passive Components',
    description: 'Fixed resistor | Non-polarized',
    viewBox: '0 0 200 150',
    svgBody: `
<line x1="20" y1="75" x2="60" y2="75" stroke="#000" stroke-width="3"/>
<rect x="60" y="50" width="80" height="50" fill="none" stroke="#000" stroke-width="3"/>
<line x1="140" y1="75" x2="180" y2="75" stroke="#000" stroke-width="3"/>`,
    terminals: [
      { id: '1', label: '1', type: 'io', x: 20, y: 75, labelX: 5, labelY: 70 },
      { id: '2', label: '2', type: 'io', x: 180, y: 75, labelX: 185, labelY: 70 },
    ],
  },
  {
    id: 'variable-resistor',
    name: 'Variable Resistor',
    category: 'Passive Components',
    description: 'Variable resistor | Terminals: 1, 2',
    viewBox: '0 0 200 150',
    svgBody: `
<line x1="20" y1="75" x2="60" y2="75" stroke="#000" stroke-width="3"/>
<rect x="60" y="50" width="80" height="50" fill="none" stroke="#000" stroke-width="3"/>
<line x1="140" y1="75" x2="180" y2="75" stroke="#000" stroke-width="3"/>
<line x1="50" y1="125" x2="150" y2="27" stroke="#000" stroke-width="3"/>
<polygon points="155,19 136,28 150,40" fill="#000"/>`,
    terminals: [
      { id: '1', label: '1', type: 'io', x: 20, y: 75, labelX: 5, labelY: 70 },
      { id: '2', label: '2', type: 'io', x: 180, y: 75, labelX: 185, labelY: 70 },
    ],
  },
  {
    id: 'capacitor',
    name: 'Capacitor',
    category: 'Passive Components',
    description: 'Capacitor | Polarity marked if electrolytic',
    viewBox: '0 0 200 200',
    svgBody: `
<line x1="100" y1="30" x2="100" y2="80" stroke="#000" stroke-width="3"/>
<line x1="60" y1="80" x2="140" y2="80" stroke="#000" stroke-width="3"/>
<line x1="60" y1="100" x2="140" y2="100" stroke="#000" stroke-width="3"/>
<line x1="100" y1="100" x2="100" y2="150" stroke="#000" stroke-width="3"/>`,
    terminals: [
      { id: 'plus', label: '+', type: 'io', x: 100, y: 30, labelX: 85, labelY: 25 },
      { id: 'minus', label: '-', type: 'io', x: 100, y: 150, labelX: 85, labelY: 165 },
    ],
  },
];