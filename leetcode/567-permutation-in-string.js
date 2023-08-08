/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

Array.prototype.equals = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (this[i] !== array[i]) return false;
  }
  return true;
};

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt(0) - 97]++;
    s2Count[s2[i].charCodeAt(0) - 97]++;
  }
  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    if (s2Count.equals(s1Count)) return true;
    s2Count[s2[l].charCodeAt(0) - 97]--;
    s2Count[s2[r].charCodeAt(0) - 97]++;
    l++;
  }
  return s2Count.equals(s1Count);
};
