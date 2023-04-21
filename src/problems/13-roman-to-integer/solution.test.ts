import { romanToInt } from './solution';

describe('13. Roman to Integer', () => {
  test('should return integer', () => {
    expect(romanToInt('I')).toEqual(1);
    expect(romanToInt('III')).toEqual(3);
    expect(romanToInt('VI')).toEqual(6);
    expect(romanToInt('IV')).toEqual(4);
    expect(romanToInt('XIV')).toEqual(14);
    expect(romanToInt('MCMXCIV')).toEqual(1994);
  });
});
