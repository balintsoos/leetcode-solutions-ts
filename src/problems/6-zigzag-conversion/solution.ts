/*
Example:

s: PAYPALISHIRING

numRows: 3
P   A   H   N
A P L S I I G
Y   I   R

numRows: 4
P     I    N
A   L S  I G
Y A   H R
P     I
*/

export function convert(s: string, numRows: number): string {
  const length = Math.min(s.length, numRows);
  if (length === 1) {
    return s;
  }
  let result = '';
  const nextOfRow = getNextOfRow(numRows);
  for (let rowIndex = 0; rowIndex < length; rowIndex++) {
    const next = nextOfRow(rowIndex);
    let i = rowIndex;
    while (i < s.length) {
      result = result.concat(s[i]);
      i = next(i);
    }
  }
  return result;
}

function getNextOfRow(numRows: number): (rowIndex: number) => (current: number) => number {
  const a = 2 * numRows - 2;
  return (rowIndex) => {
    if (rowIndex === 0) {
      return (current) => current + a;
    }
    const b = rowIndex * 2;
    if (a - b === 0) {
      return (current) => current + b;
    }
    let tick = false;
    return (current) => {
      tick = !tick;
      if (tick) {
        return current + a - b;
      }
      return current + b;
    };
  };
}

/*
Explanation:

numRows: 1

0 1 2 3 4 5 6 7 8 9 10 11 12 13 => [0, x+1]

numRows: 2

0 2 4 6 8 10 12  => [0, x+2]
1 3 5 7 9 11 13  => [1, x+2]

numRows: 3

0   4    8    12 => [0, x+4]
1 3 5 7  9 11 13 => [1, x+2]
2   6   10       => [2, x+4]

numRows: 4

0     6       12 => [0, x+6]
1   5 7    11 13 => [1, x+4 | x+2]
2 4   8 10       => [2, x+2 | x+4]
3     9          => [3, x+6]

numRows: 5

0        8          16 => [0, x+8]
1     7  9       15 17 => [1, x+6 | x+2]
2   6   10    14    18 => [2, x+4]
3 5     11 13       19 => [3, x+2 | x+6]
4       12          20 => [4, x+8]

numRows: 6

0         10             20 => [0, x+10]
1       9 11          19 21 => [1, x+8 | x+2]
2     8   12       18    22 => [2, x+6 | x+4]
3   7     13    17       23 => [3, x+4 | x+6]
4 6       14 16          24 => [4, x+2 | x+8]
5         15             25 => [5, x+10]

numRows: n

numRows  => (2 * numRows - 2)
rowIndex => rowIndex * 2

0 => [ 0, x + (2 * numRows - 2) - (0 * 2) | x + (0 * 2) ]
1 => [ 1, x + (2 * numRows - 2) - (1 * 2) | x + (1 * 2) ]
2 => [ 2, x + (2 * numRows - 2) - (2 * 2) | x + (2 * 2) ]
n => [ n, x + (2 * numRows - 2) - (n * 2) | x + (n * 2) ]
*/
