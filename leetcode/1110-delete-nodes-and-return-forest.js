/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} toDelete
 * @return {TreeNode[]}
 */
var delNodes = function (root, toDelete) {
  const res = [];
  const deletion = new Set(toDelete);
  function dfs(root) {
    if (!root) return root;
    root.left = dfs(root.left);
    root.right = dfs(root.right);
    if (deletion.has(root.val)) {
      if (root.left) res.push(root.left);
      if (root.right) res.push(root.right);
      root = null;
    }
    return root;
  }
  const last = dfs(root);
  if (last) res.push(last);
  return res;
};
