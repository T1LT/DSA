/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let l = 0, res = Infinity, temp = 0;
  for (let r = 0; r <= nums.length; r++) {
    temp += nums[r];
    while (temp >= target) {
      res = Math.min(res, r - l + 1);
      temp -= nums[l++];
    }
  }
  return res === Infinity ? 0 : res;
};