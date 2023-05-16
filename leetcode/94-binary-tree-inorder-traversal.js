// https://leetcode.com/problems/binary-tree-inorder-traversal

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
 * @return {number[]}
 */

// ITERATIVE VERSION:
var inorderTraversal = function (root) {
  const res = [], stack = [];
  if (!root) return res;
  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    if (!stack.length) return res;
    const node = stack.pop();
    res.push(node.val);
    root = node.right;
  }
};

// RECURSIVE VERSION:
// var inorderTraversal = function (root) {
  // const res = [];
  // inOrder(root, res);
  // return res;
// }

// const inOrder = (root, res) => {
//   if (!root) return;
//   inOrder(root.left, res);
//   res.push(root.val);
//   inOrder(root.right, res);
// };
