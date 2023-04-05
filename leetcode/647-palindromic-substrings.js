// https://leetcode.com/problems/palindromic-substrings/
/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function(s) {
  res = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      res.push(s.slice(i, j + 1));
    }
  }
  return res.filter(el => el === el.split("").reverse().join("")).length
};