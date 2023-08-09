/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const count = {};
  let res = 0,
    l = 0,
    maxCount = 0;
  for (let r = 0; r < s.length; r++) {
    count[s[r]] = (count[s[r]] || 0) + 1;
    maxCount = Math.max(maxCount, count[s[r]]);
    while (r - l + 1 - maxCount > k) {
      count[s[l]]--;
      l++;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};
