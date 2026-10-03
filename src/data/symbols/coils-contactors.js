export default [
  {
    id: 'coil-contactor',
    name: 'Coil (contactor)',
    category: 'Coils and Contactors',
    description: 'Coil terminals: A1, A2 (24V AC/DC typical)',
    viewBox: '0 0 300 300',
    svgBody: `
<line x1="100" y1="50" x2="100" y2="100" stroke="black" stroke-width="2"/>
<rect x="70" y="100" width="60" height="80" fill="none" stroke="black" stroke-width="2"/>
<line x1="71" y1="180" x2="130" y2="100" stroke="black" stroke-width="2"/>
<line x1="100" y1="180" x2="100" y2="220" stroke="black" stroke-width="2"/>
<text x="145" y="145" font-family="Arial" font-size="18" font-weight="bold" fill="black">C</text>`,
    terminals: [
      { id: 'A1', label: 'A1', type: 'input', x: 100, y: 50, labelX: 85, labelY: 15, labelColor: '#000' },
      { id: 'A2', label: 'A2', type: 'input', x: 100, y: 220, labelX: 85, labelY: 240, labelColor: '#000' },
    ],
  },
  {
    id: 'contactor-triple',
    name: 'Contactor (triple)',
    category: 'Coils and Contactors',
    description: 'Power: 1,3,5 → 2,4,6 | Control: A1, A2',
    viewBox: '0 0 500 500',
    svgBody: `
<line x1="50" y1="20" x2="50" y2="110" stroke="red" stroke-width="2"/>
<circle cx="50" cy="110" r="4" fill="black"/>
<line x1="70" y1="100" x2="70" y2="170" stroke="black" stroke-width="2"/>
<line x1="50" y1="160" x2="50" y2="240" stroke="red" stroke-width="2"/>
<circle cx="50" cy="160" r="4" fill="black"/>
<line x1="130" y1="20" x2="130" y2="110" stroke="orange" stroke-width="2"/>
<circle cx="130" cy="110" r="4" fill="black"/>
<line x1="150" y1="100" x2="150" y2="170" stroke="black" stroke-width="2"/>
<line x1="130" y1="160" x2="130" y2="240" stroke="orange" stroke-width="2"/>
<circle cx="130" cy="160" r="4" fill="black"/>
<line x1="210" y1="20" x2="210" y2="110" stroke="blue" stroke-width="2"/>
<circle cx="210" cy="110" r="4" fill="black"/>
<line x1="230" y1="100" x2="230" y2="170" stroke="black" stroke-width="2"/>
<line x1="210" y1="160" x2="210" y2="240" stroke="blue" stroke-width="2"/>
<circle cx="210" cy="160" r="4" fill="black"/>
<line x1="70" y1="130" x2="280" y2="130" stroke="black" stroke-width="2" stroke-dasharray="5,5"/>
<line x1="250" y1="130" x2="280" y2="130" stroke="black" stroke-width="2"/>
<rect x="280" y="100" width="60" height="60" fill="none" stroke="black" stroke-width="2"/>
<line x1="280" y1="160" x2="340" y2="100" stroke="black" stroke-width="2"/>
<line x1="310" y1="100" x2="310" y2="60" stroke="black" stroke-width="2"/>
<line x1="310" y1="160" x2="310" y2="200" stroke="black" stroke-width="2"/>`,
    terminals: [
      { id: '1', label: '1', type: 'input', x: 50, y: 20, labelX: 40, labelY: 15, labelColor: '#000' },
      { id: '3', label: '3', type: 'input', x: 130, y: 20, labelX: 120, labelY: 15, labelColor: '#000' },
      { id: '5', label: '5', type: 'input', x: 210, y: 20, labelX: 200, labelY: 15, labelColor: '#000' },
      { id: '2', label: '2', type: 'output', x: 50, y: 240, labelX: 40, labelY: 260, labelColor: '#000' },
      { id: '4', label: '4', type: 'output', x: 130, y: 240, labelX: 120, labelY: 260, labelColor: '#000' },
      { id: '6', label: '6', type: 'output', x: 210, y: 240, labelX: 200, labelY: 260, labelColor: '#000' },
      { id: 'A1', label: 'A1', type: 'io', x: 310, y: 60, labelX: 295, labelY: 50, labelColor: '#000' },
      { id: 'A2', label: 'A2', type: 'io', x: 310, y: 200, labelX: 295, labelY: 220, labelColor: '#000' },
    ],
  },
];