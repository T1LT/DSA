// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  res = 0;
  for (let i = 0; i <= nums.length; i++) {
    res ^= i;
  }
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
};