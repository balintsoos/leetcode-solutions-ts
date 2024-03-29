export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (map.has(nums[i])) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return [map.get(nums[i])!, i];
    }
    map.set(target - nums[i], i);
  }
  return [];
}
