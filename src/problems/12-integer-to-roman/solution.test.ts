import { intToRoman } from './solution';

describe('12. Integer to Roman', () => {
  test('should return roman number', () => {
    expect(intToRoman(3)).toEqual('III');
    expect(intToRoman(58)).toEqual('LVIII');
    expect(intToRoman(1994)).toEqual('MCMXCIV');
  });
});
