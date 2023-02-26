// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums: number[]): number[] {
  let res: number[] = [];
  let left: number = 1;
  let right: number = 1;
  for (let i: number = nums.length - 1; i >= 0; i--) {
    res[i] = right;
    right *= nums[i];
  }
  for (let j: number = 0; j < nums.length; j++) {
    res[j] *= left;
    left *= nums[j];
  }
  return res;
};