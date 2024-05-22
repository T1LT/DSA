/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  let stack = [];
  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") stack.push(char);
    else {
      if (stack.pop() !== pairs[char]) return false;
    }
  }
  return !stack.length;
};
