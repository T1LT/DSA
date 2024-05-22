// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var x;
    var s = 0;
    var p = 1;
    while(n !== 0){
        x = n % 10;
        s += x;
        p *= x;
        n = Math.trunc(n / 10);
    }
    return p - s;
};