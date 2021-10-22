export function lengthOfLongestSubstring(s: string): number {
  const length = s.length;
  let max = 0;
  let current = '';
  for (let i = 0; i < length; i++) {
    if (current.includes(s[i])) {
      current = current.split(s[i])[1];
    }
    current = current.concat(s[i]);
    max = Math.max(max, current.length);
  }
  return max;
}
