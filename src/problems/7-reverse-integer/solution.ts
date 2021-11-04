export function reverse(x: number): number {
  const result = Number.parseInt(x.toString().split('').reverse().join(''));
  return x < 0 ? -result : result;
}
