// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(a, m, b, n) {
  let i = m - 1;
  let k = n - 1;
  let j = m + n - 1;
  while (k >= 0) {
    if (a[i] < b[k]) {
      a[j] = b[k];
    } else {
      while (a[i] > b[k]) {
        [a[i], a[j]] = [a[j], a[i]];
        i--; j--;
      }
    }
    a[j--] = b[k--];
  }
};