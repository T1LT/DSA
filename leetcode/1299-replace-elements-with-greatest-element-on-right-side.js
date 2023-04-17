// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var rep = arrgreat(arr, i);
        arr[i] = rep;
        if (i === arr.length - 1) {
            arr[i] = -1;
        }
    }
    return arr;
};

function arrgreat (arr, left) {
    var big = 0;
    for (var i = left + 1; i < arr.length; i++) {
        if (arr[i] > big) {
            big = arr[i];
        }
    }
    return big;
};