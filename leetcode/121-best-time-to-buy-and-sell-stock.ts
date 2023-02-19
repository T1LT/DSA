// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices: number[]): number {
  let cheapest: number = Infinity;
  let max: number = 0;
  for (let i: number = 0; i < prices.length; i++) {
    if (prices[i] < cheapest) {
      cheapest = prices[i];
    } else {
      if (prices[i] - cheapest > max) {
        max = prices[i] - cheapest;
      }
    }
  }
  return max;
};