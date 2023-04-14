// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    var res = 0;
    var Rcount = 0;
    var Lcount = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            Rcount++;
        }
        if (s[i] === 'L') {
            Lcount++;
        }
        if (Rcount === Lcount) {
            res++;
        }
    }
    return res;
};