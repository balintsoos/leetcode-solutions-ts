import { findMedianSortedArrays } from './solution';

describe('4. Median of Two Sorted Arrays', () => {
  test('should return the item if the first array is empty and the second array has one item', () => {
    expect(findMedianSortedArrays([], [1])).toEqual(1);
  });

  test('should return the item if the second array is empty and the first array has one item', () => {
    expect(findMedianSortedArrays([2], [])).toEqual(2);
  });

  test('should return the median of the second array if the first array is empty', () => {
    expect(findMedianSortedArrays([], [1, 2, 3])).toEqual(2);
  });

  test('should return the median of the first array if the second array is empty', () => {
    expect(findMedianSortedArrays([4, 5, 6], [])).toEqual(5);
  });

  test('should handle recurring items', () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toEqual(0);
  });

  test('should return the correct median if the length of the combined array is odd', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
  });

  test('should return the correct median if the length of the combined array is even', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });
});
