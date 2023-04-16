export function maxArea(height: number[]): number {
  let max = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  while (leftIndex < rightIndex) {
    max = Math.max(max, getArea(leftIndex, rightIndex, height));
    leftIndex += 1;
    rightIndex -= 1;
  }
  return max;
}

export function getArea(leftIndex: number, rightIndex: number, height: number[]): number {
  const distance = rightIndex - leftIndex;
  const minHeight = Math.min(height[leftIndex], height[rightIndex]);
  return distance * minHeight;
}
