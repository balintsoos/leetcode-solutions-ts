export function isPalindrome(x: number): boolean {
  const str = x.toString();
  return str.split('').reverse().join('') === str;
}
