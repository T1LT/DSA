// https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (!num) return 0;
  return !(num % 9) ? 9 : num % 9;
};