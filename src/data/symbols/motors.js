export default [
  {
    id: 'motor-ac',
    name: 'Motor (A.C.)',
    category: 'Motors',
    description: 'Single phase AC motor | L-N connection',
    viewBox: '0 0 200 100',
    svgBody: `
<line x1="20" y1="50" x2="60" y2="50" stroke="black" stroke-width="2"/>
<line x1="140" y1="50" x2="180" y2="50" stroke="black" stroke-width="2"/>
<circle cx="100" cy="50" r="40" fill="none" stroke="black" stroke-width="2"/>
<text x="100" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="black">M</text>
<text x="100" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="black">~</text>`,
    terminals: [
      { id: 'L', label: 'L', type: 'input', x: 20, y: 50, labelX: 5, labelY: 45 },
      { id: 'N', label: 'N', type: 'input', x: 180, y: 50, labelX: 185, labelY: 45 },
    ],
  },
  {
    id: 'motor-3ph-dol',
    name: 'Motor Three-phase induction (direct on line)',
    category: 'Motors',
    description: 'Three-phase motor | U, V, W terminals',
    viewBox: '0 0 200 250',
    svgBody: `
<line x1="60" y1="38" x2="60" y2="120" stroke="red" stroke-width="2"/>
<line x1="100" y1="38" x2="100" y2="120" stroke="orange" stroke-width="2"/>
<line x1="140" y1="38" x2="140" y2="120" stroke="blue" stroke-width="2"/>
<circle cx="100" cy="160" r="40" fill="none" stroke="black" stroke-width="2"/>
<line x1="60" y1="120" x2="75" y2="130" stroke="red" stroke-width="2"/>
<line x1="100" y1="120" x2="100" y2="120" stroke="orange" stroke-width="2"/>
<line x1="140" y1="120" x2="125" y2="130" stroke="blue" stroke-width="2"/>
<text x="100" y="150" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="black">M</text>
<text x="100" y="175" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="black">3~</text>`,
    terminals: [
      { id: 'U', label: 'U', type: 'input', x: 60, y: 34, labelX: 60, labelY: 22 },
      { id: 'V', label: 'V', type: 'input', x: 100, y: 34, labelX: 100, labelY: 22 },
      { id: 'W', label: 'W', type: 'input', x: 140, y: 34, labelX: 140, labelY: 22 },
    ],
  },
  {
    id: 'motor-3ph-star-delta',
    name: 'Motor Three-phase induction (star-delta)',
    category: 'Motors',
    description: 'Star-Delta starter motor | U1, V1, W1 and U2, V2, W2',
    viewBox: '0 0 250 300',
    svgBody: `
<circle cx="125" cy="150" r="45" fill="none" stroke="black" stroke-width="2"/>
<line x1="80" y1="48" x2="95" y2="115" stroke="red" stroke-width="2"/>
<line x1="125" y1="48" x2="125" y2="105" stroke="orange" stroke-width="2"/>
<line x1="170" y1="48" x2="155" y2="115" stroke="blue" stroke-width="2"/>
<line x1="95" y1="185" x2="80" y2="252" stroke="blue" stroke-width="2"/>
<line x1="125" y1="195" x2="125" y2="252" stroke="orange" stroke-width="2"/>
<line x1="155" y1="185" x2="170" y2="252" stroke="red" stroke-width="2"/>
<text x="125" y="142" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="black">M</text>
<text x="125" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="black">3~</text>`,
    terminals: [
      { id: 'U1', label: 'U1', type: 'input', x: 80, y: 43, labelX: 80, labelY: 30 },
      { id: 'V1', label: 'V1', type: 'input', x: 125, y: 43, labelX: 125, labelY: 30 },
      { id: 'W1', label: 'W1', type: 'input', x: 170, y: 43, labelX: 170, labelY: 30 },
      { id: 'U2', label: 'U2', type: 'output', x: 78, y: 256, labelX: 70, labelY: 280 },
      { id: 'V2', label: 'V2', type: 'output', x: 125, y: 257, labelX: 125, labelY: 280 },
      { id: 'W2', label: 'W2', type: 'output', x: 172, y: 256, labelX: 180, labelY: 280 },
    ],
  },
];