/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };
  for (const el of tokens) {
    if (operations[el]) {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(operations[el](a, b));
    } else {
      stack.push(+el);
    }
  }
  return stack[0];
};