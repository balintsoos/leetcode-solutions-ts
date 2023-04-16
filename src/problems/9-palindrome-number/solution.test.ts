import { isPalindrome } from './solution';

describe('9. Palindrome Number', () => {
  test('should return true if palindrome', () => {
    expect(isPalindrome(121)).toEqual(true);
  });

  test('should return false if not palindrome', () => {
    expect(isPalindrome(123)).toEqual(false);
  });

  test('should return false if negative', () => {
    expect(isPalindrome(-121)).toEqual(false);
  });
});
