import { longestPalindrome } from './solution';

describe('5. Longest Palindromic Substring', () => {
  test('should return the character if input has only one character', () => {
    expect(longestPalindrome('a')).toEqual('a');
  });

  test('should return the first character if input has two different characters', () => {
    expect(longestPalindrome('ac')).toEqual('a');
  });

  test('should return the substring if input has the same character multiple times next to each other', () => {
    expect(longestPalindrome('cbbd')).toEqual('bb');
  });

  test('should return the longest palindrome', () => {
    expect(longestPalindrome('abba')).toEqual('abba');
    expect(longestPalindrome('babad')).toEqual('bab');
  });

  test('should handle long inputs', () => {
    expect(longestPalindrome('babaddtattarrattatddetartrateedredividerb')).toEqual('ddtattarrattatdd');
  });
});
