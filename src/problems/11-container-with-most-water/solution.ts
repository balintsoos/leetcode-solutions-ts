export function maxArea(height: number[]): number {
  let max = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
    const distance = rightIndex - leftIndex;
    const leftHeight = height[leftIndex];
    const rightHeight = height[rightIndex];

    if (leftHeight < rightHeight) {
      max = Math.max(max, leftHeight * distance);
      leftIndex += 1;
    } else {
      max = Math.max(max, rightHeight * distance);
      rightIndex -= 1;
    }
  }

  return max;
}
