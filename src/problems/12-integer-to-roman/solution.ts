const map = [
  ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  ['', 'M', 'MM', 'MMM'],
];

export function intToRoman(num: number): string {
  let result = '';
  let n = num;

  result = map[0][n % 10] + result;
  n = Math.floor(n / 10);

  result = map[1][n % 10] + result;
  n = Math.floor(n / 10);

  result = map[2][n % 10] + result;
  n = Math.floor(n / 10);

  result = map[3][n] + result;
  return result;
}
