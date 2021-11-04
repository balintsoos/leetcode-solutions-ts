import { convert } from './solution';

describe('6. Zigzag Conversion', () => {
  test('should return input if number of rows is 1', () => {
    expect(convert('ABC', 1)).toEqual('ABC');
  });

  test('should return input if only has one character', () => {
    expect(convert('A', 2)).toEqual('A');
  });

  test('should handle if number of rows are bigger than the length of the input', () => {
    expect(convert('AB', 3)).toEqual('AB');
  });

  test('should return the converted string', () => {
    expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
    expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
  });
});
