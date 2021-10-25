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
  if (isEven(n1.length + n2.length)) {
    const middle = (n1.length + n2.length) / 2;
    const l1 = n1.length;
    const l2 = n2.length;
    let i = 0;
    let i1 = 0;
    let i2 = 0;
    let median = 0;
    while (i < middle - 1) {
      if (i > l1) {
        median = n2[i2];
        i2 += 1;
        i += 1;
        continue;
      }
      if (i > l2) {
        median = n1[i1];
        i1 += 1;
        i += 1;
        continue;
      }
      if (n1[i1] < n2[i2]) {
        median = n1[i1];
        i1 += 1;
      } else {
        median = n2[i2];
        i2 += 1;
      }
      i += 1;
    }
    return median;
  }
  const middle = Math.trunc((n1.length + n2.length) / 2);
  const l1 = n1.length;
  const l2 = n2.length;
  let i = 0;
  let i1 = 0;
  let i2 = 0;
  let median = 0;
  while (i <= middle) {
    if (i > l1) {
      median = n2[i2];
      i2 += 1;
      i += 1;
      continue;
    }
    if (i > l2) {
      median = n1[i1];
      i1 += 1;
      i += 1;
      continue;
    }
    if (n1[i1] < n2[i2]) {
      median = n1[i1];
      i1 += 1;
    } else {
      median = n2[i2];
      i2 += 1;
    }
    i += 1;
  }
  return median;
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}
