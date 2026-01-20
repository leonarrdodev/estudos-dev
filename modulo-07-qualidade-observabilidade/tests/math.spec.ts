import { sum } from '../src/math';

describe('Math Helper', () => {
  it('should sum two numbers correctly', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});