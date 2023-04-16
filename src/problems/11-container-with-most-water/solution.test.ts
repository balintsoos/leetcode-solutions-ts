import { getArea, maxArea } from './solution';

describe('11. Container With Most Water', () => {
  describe.only('getArea', () => {
    test('should return area', () => {
      expect(getArea(0, 2, [1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(2);
    });
  });

  describe('maxArea', () => {
    test('should return max', () => {
      expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
    });
  });
});
