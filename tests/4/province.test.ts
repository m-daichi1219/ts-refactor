import { expect, it, describe, beforeEach } from 'vitest';
import { Province, sampleProvinceData } from '../../src/4/province';

describe('province', () => {
  let asia: Province;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });
  it('shortfall', () => {
    expect(asia.shortfall).toBe(5);
  });
  it('profit', () => {
    expect(asia.profit).toBe(230);
  });
});
