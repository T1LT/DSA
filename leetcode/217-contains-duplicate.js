// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        return true
      }
      map.set(nums[i], i)
    }
    return false

    // let set = new Set(nums);
    // return set.size !== nums.length
};