// https://leetcode.com/problems/validate-binary-search-tree/

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
 * @return {boolean}
 */
const isValidBST = (root) => {
  const values = [];
  inOrder(root, values);
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] >= values[i + 1]) return false;
  }
  return true;
};

const inOrder = (root, values) => {
  if (!root) return;
  inOrder(root.left, values);
  values.push(root.val);
  inOrder(root.right, values);
};