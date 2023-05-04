// leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
const brackets = { ")": "(", "]": "[", "}": "{" };

var isValid = function(str) {
  const stack = [];
  for (const char of str) {
    if (char === "(" || char === "[" || char === "{") stack.push(char);
    else {
      if (brackets[char] !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};
