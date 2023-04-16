// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

/**
 * @param {number[]} nums
 * @return {number}
 */
const numOfDigits = function (num) {
    var digits = 0;
    while (num !== 0) {
        num = Math.trunc(num / 10);
        digits++;
    }
    return digits;
};

var findNumbers = function(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (numOfDigits(nums[i]) % 2 === 0) {
            count++;
        }
    }
    return count;
};