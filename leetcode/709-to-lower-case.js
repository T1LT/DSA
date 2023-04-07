// https://leetcode.com/problems/to-lower-case

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  var res = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 123) {
      if (str.charAt(i).toUpperCase() === str.charAt(i)) {
        res += String.fromCharCode(str.charCodeAt(i) + 32);
      } else {
        res += str[i];
      }
    } else {
      res += str[i];
    }
  }
  return res;
};
