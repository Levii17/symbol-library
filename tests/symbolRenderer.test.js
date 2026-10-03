import { describe, it, expect } from 'vitest';
import { renderSymbol, renderSymbolCard, renderCategory } from '../src/js/symbolRenderer.js';

const sample = {
  id: 'sample',
  name: 'Sample Symbol',
  category: 'Test',
  description: 'A sample',
  viewBox: '0 0 100 100',
  svgBody: '<line x1="10" y1="10" x2="90" y2="90" stroke="black" />',
  terminals: [
    { id: 'a', label: 'A', type: 'input', x: 10, y: 10 },
    { id: 'b', label: 'B', type: 'output', x: 90, y: 90, labelX: 95, labelY: 95 },
  ],
};

describe('renderSymbol', () => {
  it('produces an <svg> with the correct viewBox', () => {
    const out = renderSymbol(sample);
    expect(out).toContain('viewBox="0 0 100 100"');
    expect(out.startsWith('<svg')).toBe(true);
  });

  it('renders one circle per terminal with the correct class', () => {
    const out = renderSymbol(sample);
    expect(out).toContain('class="terminal-input"');
    expect(out).toContain('class="terminal-output"');
    expect(out).toContain('data-terminal-id="a"');
    expect(out).toContain('data-terminal-id="b"');
  });

  it('renders terminal labels with the correct class', () => {
    const out = renderSymbol(sample);
    expect(out).toContain('terminal-label-input');
    expect(out).toContain('terminal-label-output');
    expect(out).toContain('>A<');
    expect(out).toContain('>B<');
  });

  it('throws on invalid input', () => {
    expect(() => renderSymbol(null)).toThrow();
    expect(() => renderSymbol({})).toThrow();
  });

  it('escapes user-facing content in cards', () => {
    const evil = { ...sample, name: '<script>alert(1)</script>' };
    const html = renderSymbolCard(evil);
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });
});

describe('renderCategory', () => {
  it('renders a section with the category name', () => {
    const out = renderCategory('Test', [sample]);
    expect(out).toContain('data-category="Test"');
    expect(out).toContain('<h2>Test</h2>');
    expect(out).toContain('id="card-sample"');
  });
});