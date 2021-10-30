import { longestPalindrome } from './solution';

describe('5. Longest Palindromic Substring', () => {
  test('should return the character if input has only one character', () => {
    expect(longestPalindrome('a')).toEqual('a');
  });
});
