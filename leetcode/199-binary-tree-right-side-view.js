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

var rightSideView = function(root) {
  const res = [];
  const queue = new _Queue();
  if (!root) return res;
  queue.enqueue(root);
  while (queue.size) {
    let size = queue.size;
    for (let i = 0; i < size; i++) {
      let n = queue.dequeue();
      if (i === size - 1) res.push(n.val);
      if (n.left) queue.enqueue(n.left);
      if (n.right) queue.enqueue(n.right);
    }
  }
  return res;
};
