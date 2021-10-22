const twoSum = (nums: number[], target: number): number[] => {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    const hashKey = nums[i].toString();
    if (hashTable.hasOwnProperty(hashKey)) {
      return [hashTable[hashKey], i];
    }
    const newHashKey = (target - nums[i]).toString();
    hashTable[newHashKey] = i
  }
};

console.log(twoSum([2,7,11,15], 9))
