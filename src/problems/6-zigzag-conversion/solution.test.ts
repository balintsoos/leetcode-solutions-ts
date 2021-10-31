import { convert } from './solution';

describe('6. Zigzag Conversion', () => {
  test('should return character if input only has one character', () => {
    expect(convert('A', 1)).toEqual('A');
  });
});
