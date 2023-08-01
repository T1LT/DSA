/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const count = {};
  const freq = new Array(nums.length + 1).fill(0);
  const res = [];
  for (const num of nums) {
    if (count[num] !== undefined) count[num]++;
    else count[num] = 1;
  }
  for (const [n, c] of Object.entries(count)) {
    if (freq[c] !== 0) freq[c].push(n);
    else freq[c] = [n];
  }
  for (let i = freq.length - 1; i >= 0; i--) {
    if (freq[i]) res.push(...freq[i]); 
    if (res.length === k) return res;
  }
};