// https://leetcode.com/problems/range-sum-of-bst/

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const dfs = (root) => {
    if (!root) return null;
    if (root.val >= low && root.val <= high) sum += root.val;
    if (root.val > low) dfs(root.left);
    if (root.val < high) dfs(root.right);
    return sum;
  };
  return dfs(root);
};
