// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals = intervals.sort(([a, b], [x, y]) => a - x);
  const res = [intervals[0]];
  let last = 0;
  for (let i = 1; i < intervals.length; i++) {
    const [x, y] = intervals[i];
    const [a, b] = res[last];
    if (x <= b) {
      if (y > b) res[last] = [a, y];
    } else {
      res.push([x, y]);
      last++;
    }
  }
  return res;
};