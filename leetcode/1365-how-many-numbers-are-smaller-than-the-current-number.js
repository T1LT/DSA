/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  var count = 0;
  var arr = [];
  for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < nums.length; j++) {
          if (i !== j) {
              if (nums[i] > nums[j]) {
                  count++;
              }
          }
      }
      arr.push(count);
      count = 0;
  }
  return arr;
};