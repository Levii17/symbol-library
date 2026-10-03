import circuitBreakers from './symbols/circuit-breakers.js';
import isolators from './symbols/isolators.js';
import control from './symbols/control.js';
import coilsContactors from './symbols/coils-contactors.js';
import contacts from './symbols/contacts.js';
import relays from './symbols/relays.js';
import motors from './symbols/motors.js';
import measurements from './symbols/measurements.js';
import lamps from './symbols/lamps.js';
import passive from './symbols/passive.js';
import safety from './symbols/safety.js';
import powerDistribution from './symbols/power-distribution.js';

/**
 * All symbol definitions, grouped by source category file.
 * Order here is the order that appears in the exported `symbols` array.
 */
export const symbolCategories = {
  'Circuit Breakers': circuitBreakers,
  Isolators: isolators,
  'Control Elements': control,
  'Coils and Contactors': coilsContactors,
  Contacts: contacts,
  Relays: relays,
  Motors: motors,
  Measurements: measurements,
  Lamps: lamps,
  'Passive Components': passive,
  'Safety Components': safety,
  'Power Distribution': powerDistribution,
};

/**
 * Flat list of every symbol in the library.
 * @type {import('../js/symbolRenderer.js').SymbolDef[]}
 */
export const symbols = Object.values(symbolCategories).flat();

export default symbols;