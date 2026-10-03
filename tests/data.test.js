import { describe, it, expect } from 'vitest';
import { symbols } from '../src/data/index.js';

describe('symbol data', () => {
  it('loads at least 20 symbols', () => {
    expect(symbols.length).toBeGreaterThanOrEqual(20);
  });

  it('every symbol has the required fields', () => {
    for (const s of symbols) {
      expect(s.id, `symbol missing id: ${JSON.stringify(s)}`).toBeTruthy();
      expect(s.name).toBeTruthy();
      expect(s.category).toBeTruthy();
      expect(s.description).toBeTruthy();
      expect(s.viewBox).toMatch(/^[\d\s.-]+$/);
      expect(typeof s.svgBody).toBe('string');
      expect(Array.isArray(s.terminals)).toBe(true);
    }
  });

  it('every terminal has a valid type', () => {
    const valid = new Set(['input', 'output', 'io']);
    for (const s of symbols) {
      for (const t of s.terminals) {
        expect(valid.has(t.type), `bad type in ${s.id}/${t.id}`).toBe(true);
        expect(typeof t.x).toBe('number');
        expect(typeof t.y).toBe('number');
      }
    }
  });

  it('symbol ids are unique', () => {
    const ids = symbols.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});