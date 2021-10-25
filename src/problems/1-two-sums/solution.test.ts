import { twoSum } from './solution';

describe('Two Sum', () => {
  test('should return empty array if input is empty', () => {
    expect(twoSum([], 0)).toEqual([]);
  });

  test('should return indexes when array has 2 items', () => {
    expect(twoSum([1, 2], 3)).toEqual([0, 1]);
  });

  test('should return correct indexes', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
