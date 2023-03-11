// https://leetcode.com/problems/binary-tree-right-side-view

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
class _Queue extends Map {
  constructor() {
    super();
    this.insertionIdx = 0;
    this.removalIdx = 0;
  }

  enqueue(el) {
    this.set(this.insertionIdx, el);
    this.insertionIdx++;
  }

  dequeue() {
    const el = this.get(this.removalIdx);
    if (typeof el !== "undefined") {
      this.delete(this.removalIdx);
      this.removalIdx++;
    }
    return el;
  }
}

var rightSideView = function (root) {
  if (!root) return [];
  const res = {};
  const queue = new _Queue();
  queue.enqueue([root, 0]);
  while (queue.size) {
    const [curr, level] = queue.dequeue();
    res[level] = curr.val;
    if (curr.left) queue.enqueue([curr.left, level + 1]);
    if (curr.right) queue.enqueue([curr.right, level + 1]);
  }
  return Object.values(res);
};

// TC: O(n) where n is the number of nodes in the tree
// SC: O(n) where n is the number of nodes in the tree
