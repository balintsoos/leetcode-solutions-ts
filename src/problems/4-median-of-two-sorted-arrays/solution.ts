export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length === 0) {
    return medianOfOneArray(nums2);
  }
  if (nums2.length === 0) {
    return medianOfOneArray(nums1);
  }
  return medianOfTwoArrays(nums1, nums2);
}

function medianOfOneArray(n: number[]): number {
  if (isEven(n.length)) {
    const middle = n.length / 2;
    return (n[middle - 1] + n[middle]) / 2;
  }
  return n[Math.trunc(n.length / 2)];
}

function medianOfTwoArrays(n1: number[], n2: number[]): number {
  const length = n1.length + n2.length;
  const n = [];
  let i = 0;
  let i1 = 0;
  let i2 = 0;
  while (i < length) {
    if (i1 >= n1.length) {
      n.push(n2[i2]);
      i2 += 1;
      i += 1;
      continue;
    }
    if (i2 >= n2.length) {
      n.push(n1[i1]);
      i1 += 1;
      i += 1;
      continue;
    }
    if (n1[i1] < n2[i2]) {
      n.push(n1[i1]);
      i1 += 1;
      i += 1;
      continue;
    }
    if (n1[i1] >= n2[i2]) {
      n.push(n2[i2]);
      i2 += 1;
      i += 1;
      continue;
    }
  }
  return medianOfOneArray(n);
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}
