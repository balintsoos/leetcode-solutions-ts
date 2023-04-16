export function isPalindrome(x: number): boolean {
  let reversed = 0;
  let num = x;

  while (num > 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reversed === x;
}
