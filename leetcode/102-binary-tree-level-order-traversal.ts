// https://leetcode.com/problems/binary-tree-level-order-traversal/

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
type QueueEl = {
  node: TreeNode;
  level: number;
}

class MyQueue extends Map {
  insertionIdx: number;
  removalIdx: number;
  length: number;
  
  constructor() {
    super();
    this.insertionIdx = 0;
    this.removalIdx = 0;
    this.length = 0;
  }

  enqueue(el: QueueEl) {
    this.set(this.insertionIdx, el);
    this.insertionIdx++;
    this.length++;
  }

  dequeue() {
    const el: QueueEl = this.get(this.removalIdx);
    if (typeof el !== "undefined") {
      this.delete(this.removalIdx);
      this.removalIdx++;
      this.length--;
    }
    return el;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let queue: MyQueue = new MyQueue();
  let res: number[][] = [];
  queue.enqueue({ node: root, level: 0 });
  while (queue.length) {
    const { node, level } = queue.dequeue();
    if (res[level]) res[level].push(node.val);
    else res[level] = [node.val];
    if (node.left) queue.enqueue({ node: node.left, level: level + 1 });
    if (node.right) queue.enqueue({ node: node.right, level: level + 1 });
  }
  return res;
};