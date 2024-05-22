// https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const memo = new Map();
  const res = _min(amount, coins, memo);
  return res === Infinity ? -1 : res;
};

const _min = (amt, coins, memo) => {
  if (amt < 0) return Infinity;
  if (!amt) return 0;
  if (memo.has(amt)) return memo.get(amt);
  let min = Infinity;
  for (const coin of coins) {
    const res = 1 + _min(amt - coin, coins, memo);
    min = Math.min(min, res);
  }
  memo.set(amt, min);
  return min;
};