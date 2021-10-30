import { longestPalindrome } from './solution';

describe('5. Longest Palindromic Substring', () => {
  test('should return the character if input has only one character', () => {
    expect(longestPalindrome('a')).toEqual('a');
  });

  test('should return the first character if input has two different characters', () => {
    expect(longestPalindrome('ac')).toEqual('a');
  });
});
