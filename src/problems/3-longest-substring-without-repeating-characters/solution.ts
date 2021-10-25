export function lengthOfLongestSubstring(s: string): number {
  const length = s.length;
  const map = new Map<string, number>();
  let max = 0;
  let start = 0;
  let end = 0;
  while (end < length) {
    if (map.has(s[end])) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      start = Math.max(start, map.get(s[end])! + 1);
    }
    map.set(s[end], end);
    max = Math.max(max, end - start + 1);
    end += 1;
  }
  return max;
}
