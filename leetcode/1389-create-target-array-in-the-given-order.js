// https://leetcode.com/problems/create-target-array-in-the-given-order/

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  var target = [];
  for (var i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};