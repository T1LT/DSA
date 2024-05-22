// https://leetcode.com/problems/unique-paths

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n, x = 0, y = 0, memo = new Map()) {
  const key = x + "," + y;
  if (memo.has(key)) return memo.get(key);
  if (x >= m || y >= n) return 0;
  if (x === m - 1 && y === n - 1) return 1;
  let count = 0;
  const neighbors = [
    [x + 1, y],
    [x, y + 1],
  ];
  for (const neighbor of neighbors) {
    const [dx, dy] = neighbor;
    count += uniquePaths(m, n, dx, dy, memo);
  }
  memo.set(key, count);
  return count;
};
