// https://leetcode.com/problems/find-the-difference-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const res = [[], []];
  for (const el of set1) {
    if (!set2.has(el)) res[0].push(el);
  }
  for (const el of set2) {
    if (!set1.has(el)) res[1].push(el);
  }
  return res;
};
