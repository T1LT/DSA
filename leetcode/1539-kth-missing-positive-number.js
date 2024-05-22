// https://leetcode.com/problems/kth-missing-positive-number/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  const last = arr.at(-1);
  let j = 0;
  let search = [];
  for (let i = 1; i <= last + k; i++) {
    if (i === arr[j]) j++;
    else search.push(i);
  }
  return search[k - 1];
};