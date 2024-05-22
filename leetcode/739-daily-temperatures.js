/**
 * @param {number[]} temperatures
 * @return {number[]}
 * Monotonic Stack
 */
var dailyTemperatures = function(temps) {
  const res = Array(temps.length).fill(0);
  const stack = [];
  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[i] > stack.at(-1)[0]) {
      const [_, idx] = stack.pop();
      res[idx] = i - idx;
    }
    stack.push([temps[i], i]);
  }
  return res;
};