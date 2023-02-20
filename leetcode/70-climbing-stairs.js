// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 1;
  if (n < 0) return 0;
  const res = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return (memo[n] = res);
};
