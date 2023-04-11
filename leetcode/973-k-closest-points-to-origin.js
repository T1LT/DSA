// https://leetcode.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  return points.sort((a, b) => dist(a) - dist(b)).slice(0, k);
};

const dist = ([x, y]) => x ** 2 + y ** 2;

// TC: O(nlogn)
// SC: O(n)