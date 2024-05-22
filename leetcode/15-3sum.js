/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (i > 0 && num === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      let sum = num + nums[l] + nums[r];
      if (sum > 0) r--;
      else if (sum < 0) l++;
      else {
        res.push([num, nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }
  return res;
};