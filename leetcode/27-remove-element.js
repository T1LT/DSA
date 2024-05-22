/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  for (const x of nums) {
    if (x !== val) {
      nums[i++] = x;
    }
  }
  return i;
};