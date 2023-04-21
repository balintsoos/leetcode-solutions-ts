export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) {
    return strs[0];
  }

  for (let charIndex = 0; charIndex < strs[0].length; charIndex++) {
    for (let strIndex = 1; strIndex < strs.length; strIndex++) {
      if (strs[strIndex][charIndex] !== strs[0][charIndex]) {
        return strs[0].substring(0, charIndex);
      }
    }
  }

  return strs[0];
}
