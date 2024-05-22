// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const hash = {};
  for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;
  const dfs = (start, end) => {
    if (start > end) return null;
    const val = postorder.pop();
    const root = new TreeNode(val);
    root.right = dfs(hash[val] + 1, end);
    root.left = dfs(start, hash[val] - 1);
    return root;
  };
  return dfs(0, inorder.length - 1);
};