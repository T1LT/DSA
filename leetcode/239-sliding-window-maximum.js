/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let l = 0, r = 0;
  const res = [];
  const queue = [];
  while (r < nums.length) {
    while (queue.length && nums[queue.at(-1)] < nums[r])
      queue.pop();  
    queue.push(r);
    if (l > queue[0]) queue.shift();
    if (r - l + 1 >= k) {
      res.push(nums[queue[0]]);
      l++;
    }
    r++;
  }
  return res;
};