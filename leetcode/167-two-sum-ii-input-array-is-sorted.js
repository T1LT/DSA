/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] > target) j--;
    else if (nums[i] + nums[j] < target) i++;
    else return [i + 1, j + 1];
  }
};
