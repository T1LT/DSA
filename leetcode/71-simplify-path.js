// https://leetcode.com/problems/simplify-path

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];
  const split = path.split("/");
  for (const dir of split) {
    if (dir === "." || !dir) continue;
    else if (dir === "..") stack.pop();
    else stack.push(dir);
  }
  return "/" + stack.join("/");
};