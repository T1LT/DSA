// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  var i, j;
  var count = 0;
  for (i = 0; i < S.length; i++) {
    for (j = 0; j < J.length; j++) {
      if (J.charAt(j) === S.charAt(i)) {
        count++;
      }
    }
  }
  return count;
};
