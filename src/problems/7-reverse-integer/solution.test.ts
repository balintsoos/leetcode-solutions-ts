import { reverse } from './solution';

describe('7. Reverse Integer', () => {
  test('should return the input if -10 < input < 10', () => {
    expect(reverse(-9)).toEqual(-9);
    expect(reverse(0)).toEqual(0);
    expect(reverse(9)).toEqual(9);
  });

  test('should return the reversed input if input > 0', () => {
    expect(reverse(123)).toEqual(321);
  });

  test('should return the reversed input as a negative number if input < 0', () => {
    expect(reverse(-123)).toEqual(-321);
  });

  test('should return the reversed input without the zeros on the front', () => {
    expect(reverse(1200)).toEqual(21);
  });
});
