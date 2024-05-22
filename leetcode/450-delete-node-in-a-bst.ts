// https://leetcode.com/problems/delete-node-in-a-bst/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  const dfs = (node: TreeNode | null): TreeNode | null => {
    if (!node) return null;
    if (node.val === key) {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let curr: TreeNode | null = node.right;
      while (curr.left) curr = curr.left;
      curr.left = node.left;
      return node.right;
    }
    if (key > node.val) node.right = dfs(node.right);
    else node.left = dfs(node.left);
    return node;
  }
  return dfs(root);
};