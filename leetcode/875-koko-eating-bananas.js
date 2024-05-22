// https://leetcode.com/problems/koko-eating-bananas/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  const condition = (mid) => {
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / mid);
    }
    return hours <= h;
  }
  
  let left = 1;
  let right = Math.max(...piles);
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (condition(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};