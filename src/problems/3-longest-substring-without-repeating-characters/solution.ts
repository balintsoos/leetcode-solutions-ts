export function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let current = '';
  for (let i = 0; i < s.length; i++) {
    if (current.includes(s[i])) {
      current = current.split(s[i])[1];
    }
    current = current.concat(s[i]);
    if (current.length > max) {
      max = current.length;
    }
  }
  return max;
}
