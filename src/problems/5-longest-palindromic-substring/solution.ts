/*
Example:
Word: babad
Tabulation Matrix:
  0  1   2    3     4
0 b ba bab baba babad
1    a  ab  aba  abad
2        b   ba   bad
3             a    ad
4                   d
*/

export function longestPalindrome(s: string): string {
  let longest = s[0];
  const tabulationMatrix = getTabulationMatrix(s.length);
  for (let column = 1; column <= s.length - 1; column++) {
    for (let row = 0; row <= column - 1; row++) {
      if (equal(s[column], s[row]) && (adjacent(column, row) || tabulationMatrix[column - 1][row + 1])) {
        tabulationMatrix[column][row] = true;
        const substring = s.substring(row, column + 1);
        if (substring.length > longest.length) {
          longest = substring;
        }
      }
    }
  }
  return longest;
}

function getTabulationMatrix(n: number): boolean[][] {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const column = [];
    column[i] = true;
    matrix.push(column);
  }
  return matrix;
}

function equal(a: string, b: string): boolean {
  return a === b;
}

function adjacent(a: number, b: number): boolean {
  const diff = a - b;
  return diff === 1 || diff === -1;
}
