const baseContact = (id, name, description, svgBody) => ({
  id,
  name,
  category: 'Contacts',
  description,
  viewBox: '0 0 200 120',
  svgBody,
  terminals: [
    { id: 'in', label: 'IN', type: 'input', x: 20, y: 70, labelX: 5, labelY: 65 },
    { id: 'out', label: 'OUT', type: 'output', x: 185, y: 70, labelX: 190, labelY: 65 },
  ],
});

export default [
  baseContact(
    'contact-contactor-no',
    'Contact of contactor (n/o - normally open)',
    'Opens when contactor is energized',
    `
<line x1="20" y1="70" x2="70" y2="70" stroke="black" stroke-width="3"/>
<circle cx="70" cy="70" r="6" fill="black"/>
<line x1="130" y1="70" x2="185" y2="70" stroke="black" stroke-width="3"/>
<circle cx="130" cy="70" r="6" fill="black"/>
<line x1="65" y1="55" x2="135" y2="55" stroke="black" stroke-width="3"/>
<text x="100" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="black">C</text>`
  ),
  baseContact(
    'contact-contactor-nc',
    'Contact of contactor (n/c - normally closed)',
    'Closes when contactor is energized',
    `
<line x1="20" y1="70" x2="70" y2="70" stroke="black" stroke-width="3"/>
<circle cx="70" cy="70" r="6" fill="black"/>
<line x1="130" y1="70" x2="185" y2="70" stroke="black" stroke-width="3"/>
<circle cx="130" cy="70" r="6" fill="black"/>
<line x1="65" y1="63" x2="135" y2="63" stroke="black" stroke-width="3"/>
<text x="100" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="black">C</text>`
  ),
  baseContact(
    'contact-timer-no',
    'Contact of time relay (n/o - normally open)',
    'Time delayed closing contact',
    `
<line x1="20" y1="70" x2="70" y2="70" stroke="black" stroke-width="3"/>
<circle cx="70" cy="70" r="6" fill="black"/>
<line x1="130" y1="70" x2="185" y2="70" stroke="black" stroke-width="3"/>
<circle cx="130" cy="70" r="6" fill="black"/>
<line x1="65" y1="55" x2="135" y2="55" stroke="black" stroke-width="3"/>
<text x="100" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="black">T</text>`
  ),
  baseContact(
    'contact-timer-nc',
    'Contact of time relay (n/c - normally closed)',
    'Time delayed opening contact',
    `
<line x1="20" y1="70" x2="70" y2="70" stroke="black" stroke-width="3"/>
<circle cx="70" cy="70" r="6" fill="black"/>
<line x1="130" y1="70" x2="185" y2="70" stroke="black" stroke-width="3"/>
<circle cx="130" cy="70" r="6" fill="black"/>
<line x1="65" y1="63" x2="135" y2="63" stroke="black" stroke-width="3"/>
<text x="100" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="black">T</text>`
  ),
  {
    id: 'contact-overload-changeover',
    name: 'Contact of overload relay (change-over)',
    category: 'Contacts',
    description: 'Change-over contact of thermal overload relay',
    viewBox: '0 0 300 300',
    svgBody: `
<line x1="20" y1="200" x2="80" y2="200" stroke="black" stroke-width="3"/>
<circle cx="80" cy="200" r="6" fill="black"/>
<line x1="80" y1="200" x2="160" y2="160" stroke="black" stroke-width="3"/>
<circle cx="160" cy="160" r="6" fill="black"/>
<line x1="160" y1="160" x2="220" y2="160" stroke="black" stroke-width="3"/>
<circle cx="160" cy="240" r="6" fill="black"/>
<line x1="160" y1="240" x2="220" y2="240" stroke="black" stroke-width="3"/>
<line x1="80" y1="200" x2="160" y2="240" stroke="black" stroke-width="2" stroke-dasharray="4,4" opacity="0.6"/>
<line x1="124" y1="80" x2="135.5" y2="80" stroke="black" stroke-width="2"/>
<line x1="125" y1="90" x2="135" y2="80" stroke="black" stroke-width="2"/>
<line x1="125" y1="80" x2="125" y2="111" stroke="black" stroke-width="2"/>
<line x1="125" y1="110" x2="146" y2="110" stroke="black" stroke-width="2"/>
<line x1="145" y1="110" x2="145" y2="131" stroke="black" stroke-width="2"/>
<line x1="124" y1="130" x2="145" y2="130" stroke="black" stroke-width="2"/>
<line x1="125" y1="178" x2="125" y2="130" stroke="black" stroke-width="2"/>`,
    terminals: [
      { id: 'in', type: 'input', x: 20, y: 200 },
      { id: 'nc', type: 'output', x: 220, y: 160 },
      { id: 'no', type: 'output', x: 220, y: 240 },
    ],
  },
];