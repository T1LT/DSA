// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = -Infinity;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];
    res = Math.max(temp, res);
    if (temp < 0) {
      temp = 0;
    }
  }
  return res;
};