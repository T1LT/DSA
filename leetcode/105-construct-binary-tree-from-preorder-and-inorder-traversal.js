// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(
  preorder, 
  inorder, 
  ioStart = 0, 
  ioEnd = inorder.length - 1,
  poStart = 0,
  poEnd = preorder.length - 1) {
  if (ioEnd < ioStart) return null;
  const val = preorder[poStart];
  const root = new TreeNode(val);
  const mid = inorder.indexOf(val);
  const leftSize = mid - ioStart;
  root.left = buildTree(preorder, inorder, ioStart, mid - 1, poStart + 1, poStart + leftSize);
  root.right = buildTree(preorder, inorder, mid + 1, ioEnd, poStart + leftSize + 1, poEnd);
  return root;
};