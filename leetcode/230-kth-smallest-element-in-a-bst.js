// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const values = [];
  (function inOrder(root) {
    if (values.length !== k) {
      if (!root) return;
      inOrder(root.left, values);
      values.push(root.val);
      inOrder(root.right, values);
    }
  })(root);
  return values[k - 1];
};