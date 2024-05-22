// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = ((nums, sum = 0) => nums.map(x => sum = sum + x))