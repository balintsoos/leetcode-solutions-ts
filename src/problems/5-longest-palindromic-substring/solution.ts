type Tabulation = boolean | undefined;

export function longestPalindrome(s: string): string {
  const length = s.length;
  if (length === 1) {
    return s;
  }
  let longest = s[0];
  const tabulationMatrix: Tabulation[][] = [];
  for (let i = 0; i < length; i++) {
    const column: Tabulation[] = [];
    column[i] = true;
    tabulationMatrix.push(column);
  }
  // eslint-disable-next-line for-direction
  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      if (equal(s[i], s[j]) && (adjacent(i, j) || tabulationMatrix[i + 1][j - 1] === true)) {
        tabulationMatrix[i][j] = true;
        const substring = s.substring(i, j + 1);
        if (substring.length >= longest.length) {
          longest = substring;
        }
      }
    }
  }
  return longest;
}

function equal(a: string, b: string): boolean {
  return a === b;
}

function adjacent(a: number, b: number): boolean {
  return b - a === 1;
}
