// https://leetcode.com/problems/maximum-product-subarray/

function maxProduct(nums: number[]): number {
  let res: number, max: number, min: number;
  res = max = min = nums[0];
  for (let i: number = 1; i < nums.length; i++) {
    const currMax: number = Math.max(nums[i] * max, nums[i], nums[i] * min);
    const currMin: number = Math.min(nums[i] * max, nums[i], nums[i] * min);
    max = currMax
    min = currMin
    res = Math.max(res, max);
  }
  return res;
};