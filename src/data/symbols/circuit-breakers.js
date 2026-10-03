export default [
  {
    id: 'circuit-breaker-sp',
    name: 'Circuit Breaker (single pole)',
    category: 'Circuit Breakers',
    description: 'Input: Top terminal | Output: Bottom terminal',
    viewBox: '0 0 200 300',
    svgBody: `
<line x1="100" y1="20" x2="100" y2="120" stroke="#000" stroke-width="2"/>
<rect x="60" y="80" width="80" height="140" fill="none" stroke="#000" stroke-width="2"/>
<circle cx="100" cy="120" r="6" fill="#000"/>
<circle cx="100" cy="180" r="6" fill="#000"/>
<line x1="125" y1="119" x2="100" y2="180" stroke="#000" stroke-width="2"/>
<line x1="100" y1="180" x2="100" y2="280" stroke="#000" stroke-width="2"/>`,
    terminals: [
      { id: 'in', label: 'IN', type: 'input', x: 100, y: 20, labelX: 115, labelY: 25 },
      { id: 'out', label: 'OUT', type: 'output', x: 100, y: 280, labelX: 115, labelY: 285 },
    ],
  },
  {
    id: 'circuit-breaker-dp',
    name: 'Circuit Breaker (double pole)',
    category: 'Circuit Breakers',
    description: 'Input: L1, L2 | Output: T1, T2',
    viewBox: '0 0 250 300',
    svgBody: `
<rect x="50" y="60" width="100" height="80" fill="none" stroke="black" stroke-width="2"/>
<line x1="75" y1="20" x2="75" y2="74" stroke="black" stroke-width="2"/>
<line x1="125" y1="20" x2="125" y2="74" stroke="black" stroke-width="2"/>
<line x1="75" y1="126" x2="75" y2="180" stroke="black" stroke-width="2"/>
<line x1="125" y1="126" x2="125" y2="180" stroke="black" stroke-width="2"/>
<circle cx="75" cy="80" r="6" fill="black"/>
<circle cx="125" cy="80" r="6" fill="black"/>
<circle cx="75" cy="120" r="6" fill="black"/>
<circle cx="125" cy="120" r="6" fill="black"/>
<line x1="75" y1="114" x2="95.6" y2="78" stroke="black" stroke-width="2"/>
<line x1="125" y1="114" x2="145.6" y2="78" stroke="black" stroke-width="2"/>
<line x1="85.3" y1="96" x2="135.3" y2="96" stroke="black" stroke-width="2" stroke-dasharray="3,3"/>`,
    terminals: [
      { id: 'L1', label: 'L1', type: 'input', x: 75, y: 20, labelX: 60, labelY: 15 },
      { id: 'L2', label: 'L2', type: 'input', x: 125, y: 20, labelX: 135, labelY: 15 },
      { id: 'T1', label: 'T1', type: 'output', x: 75, y: 180, labelX: 60, labelY: 195 },
      { id: 'T2', label: 'T2', type: 'output', x: 125, y: 180, labelX: 135, labelY: 195 },
    ],
  },
  {
    id: 'circuit-breaker-tp',
    name: 'Circuit Breaker (triple pole)',
    category: 'Circuit Breakers',
    description: 'Input: L1, L2, L3 | Output: T1, T2, T3',
    viewBox: '0 0 300 200',
    svgBody: `
<rect x="30" y="60" width="240" height="80" fill="none" stroke="black" stroke-width="2"/>
<line x1="75" y1="20" x2="75" y2="74" stroke="red" stroke-width="2"/>
<line x1="75" y1="126" x2="75" y2="180" stroke="red" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="74" stroke="orange" stroke-width="2"/>
<line x1="150" y1="126" x2="150" y2="180" stroke="orange" stroke-width="2"/>
<line x1="225" y1="20" x2="225" y2="74" stroke="blue" stroke-width="2"/>
<line x1="225" y1="126" x2="225" y2="180" stroke="blue" stroke-width="2"/>
<circle cx="75" cy="80" r="6" fill="black"/>
<circle cx="150" cy="80" r="6" fill="black"/>
<circle cx="225" cy="80" r="6" fill="black"/>
<circle cx="75" cy="120" r="6" fill="black"/>
<circle cx="150" cy="120" r="6" fill="black"/>
<circle cx="225" cy="120" r="6" fill="black"/>
<line x1="75" y1="114" x2="95.6" y2="78" stroke="black" stroke-width="2"/>
<line x1="150" y1="114" x2="170.6" y2="78" stroke="black" stroke-width="2"/>
<line x1="225" y1="114" x2="245.6" y2="78" stroke="black" stroke-width="2"/>
<line x1="85.3" y1="96" x2="160.3" y2="96" stroke="black" stroke-width="2" stroke-dasharray="3,3"/>
<line x1="160.3" y1="96" x2="235.3" y2="96" stroke="black" stroke-width="2" stroke-dasharray="3,3"/>`,
    terminals: [
      { id: 'L1', label: 'L1', type: 'input', x: 75, y: 20, labelX: 60, labelY: 15 },
      { id: 'L2', label: 'L2', type: 'input', x: 150, y: 20, labelX: 140, labelY: 15 },
      { id: 'L3', label: 'L3', type: 'input', x: 225, y: 20, labelX: 215, labelY: 15 },
      { id: 'T1', label: 'T1', type: 'output', x: 75, y: 180, labelX: 60, labelY: 195 },
      { id: 'T2', label: 'T2', type: 'output', x: 150, y: 180, labelX: 140, labelY: 195 },
      { id: 'T3', label: 'T3', type: 'output', x: 225, y: 180, labelX: 215, labelY: 195 },
    ],
  },
];