// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    var count = 0;
    while (num !== 0) {    
        if (num % 2 === 0) {
            num /= 2;
            count++;
        }
        else {
            num -= 1;
            count++;
        }
    }
    return count;
};