import { describe, it, expect } from 'vitest';
import { technologiesQuery } from '@/lib/technologies';

describe('technologiesQuery', () => {
  it('is a valid GROQ query string', () => {
    expect(typeof technologiesQuery).toBe('string');
    expect(technologiesQuery.length).toBeGreaterThan(0);
  });

  it('queries technology documents', () => {
    expect(technologiesQuery).toContain('_type == "technology"');
  });

  it('resolves category reference', () => {
    expect(technologiesQuery).toContain('category->title');
  });
});
