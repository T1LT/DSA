// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let n = cardPoints.length;
  let lsum = 0;
  for (let i = 0; i < k; i++) {
    lsum += cardPoints[i];
  }
  let max = lsum;
  let rsum = 0;
  for (let i = 0; i < k; i++) {
    lsum -= cardPoints[k - i - 1];
    rsum += cardPoints[n - i - 1];
    max = Math.max(max, lsum + rsum);
  }
  return max;
};
