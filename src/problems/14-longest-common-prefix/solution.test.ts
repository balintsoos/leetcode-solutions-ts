import { longestCommonPrefix } from './solution';

describe('14. Longest Common Prefix', () => {
  test('should return prefix', () => {
    expect(longestCommonPrefix(['ab'])).toEqual('ab');
    expect(longestCommonPrefix(['ab', 'ab'])).toEqual('ab');
    expect(longestCommonPrefix(['ab', 'ac'])).toEqual('a');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
  });
});
