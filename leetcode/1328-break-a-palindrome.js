/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(pali) {
  if (pali.length === 1) return "";
  let res = pali.split("");
  for (let i = 0; i <= Math.floor(res.length / 2) - 1; i++) {
    if (res[i] !== 'a') {
      res[i] = 'a';
      return res.join("");
    }
  }
  res[res.length - 1] = 'b';
  return res.join("");
};