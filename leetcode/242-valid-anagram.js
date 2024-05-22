// leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
https: var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let buckets = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) buckets[s.charCodeAt(i) - 97]++;
  for (let i = 0; i < t.length; i++) buckets[t.charCodeAt(i) - 97]--;
  for (let i of buckets) {
    if (i !== 0) {
      return false;
    }
  }
  return true;
};
