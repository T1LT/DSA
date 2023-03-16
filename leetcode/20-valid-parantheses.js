// leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
  // const pairs = { ")": "(", "]": "[", "}": "{" };
  const map = new Map();
  map.set(")", "(");
  map.set("]", "[");
  map.set("}", "{");
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] === map.get(str[i])) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
  }
  return stack.length === 0;
};
