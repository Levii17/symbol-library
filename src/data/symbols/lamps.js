export default [
  {
    id: 'lamp-incandescent',
    name: 'Lamp (incandescent)',
    category: 'Lamps',
    description: 'Incandescent lamp | L-N connection',
    viewBox: '0 0 200 100',
    svgBody: `
<line x1="20" y1="50" x2="65" y2="50" stroke="#000" stroke-width="2"/>
<circle cx="100" cy="50" r="35" fill="none" stroke="#000" stroke-width="2"/>
<line x1="135" y1="50" x2="180" y2="50" stroke="#000" stroke-width="2"/>
<line x1="75" y1="25" x2="125" y2="75" stroke="#000" stroke-width="2"/>
<line x1="125" y1="25" x2="75" y2="75" stroke="#000" stroke-width="2"/>`,
    terminals: [
      { id: 'L', label: 'L', type: 'input', x: 20, y: 50, labelX: 5, labelY: 45 },
      { id: 'N', label: 'N', type: 'input', x: 180, y: 50, labelX: 185, labelY: 45 },
    ],
  },
  {
    id: 'lamp-indication',
    name: 'Lamp (indication)',
    category: 'Lamps',
    description: 'Pilot light | Status indication',
    viewBox: '0 0 200 120',
    svgBody: `
<text x="100" y="25" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="black">P</text>
<line x1="20" y1="65" x2="65" y2="65" stroke="#000" stroke-width="2"/>
<circle cx="100" cy="65" r="35" fill="none" stroke="#000" stroke-width="2"/>
<line x1="135" y1="65" x2="180" y2="65" stroke="#000" stroke-width="2"/>
<line x1="75" y1="40" x2="125" y2="90" stroke="#000" stroke-width="2"/>
<line x1="125" y1="40" x2="75" y2="90" stroke="#000" stroke-width="2"/>`,
    terminals: [
      { id: 'plus', label: '+', type: 'input', x: 20, y: 65, labelX: 5, labelY: 60 },
      { id: 'minus', label: '-', type: 'input', x: 180, y: 65, labelX: 185, labelY: 60 },
    ],
  },
];