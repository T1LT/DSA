// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const res = new Array(nums.length);
  let l = 0,
    r = nums.length - 1;
  let end = nums.length - 1;
  while (l <= r) {
    const l_sq = nums[l] ** 2;
    const r_sq = nums[r] ** 2;
    if (l_sq < r_sq) {
      res[end--] = r_sq;
      r--;
    } else {
      res[end--] = l_sq;
      l++;
    }
  }
  return res;
};
