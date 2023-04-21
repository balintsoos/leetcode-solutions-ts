const toNumber: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function romanToInt(s: string): number {
  let number = 0;
  for (let i = 0; i < s.length; i++) {
    const nextChar = s[i + 1];
    const currentNumber = toNumber[s[i]];
    if (!nextChar) {
      return number + currentNumber;
    }
    if (currentNumber < toNumber[nextChar]) {
      number -= currentNumber;
      continue;
    }
    number += currentNumber;
  }
  return number;
}
