import { lengthOfLongestSubstring } from './solution';

describe('3. Longest Substring Without Repeating Characters', () => {
  test('should return 0 on empty input', () => {
    expect(lengthOfLongestSubstring('')).toEqual(0);
  });

  test('should return 1 on input with only 1 character', () => {
    expect(lengthOfLongestSubstring('a')).toEqual(1);
  });

  test('should return 1 on input with multiple exact character', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  });

  test('should return the correct count', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });
});
