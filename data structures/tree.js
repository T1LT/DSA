class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const node1 = new TreeNode(1, null, null);
const node2 = new TreeNode(2, null, null);
const node3 = new TreeNode(3, null, null);
const node4 = new TreeNode(4, null, null);
const node5 = new TreeNode(5, null, null);
const node6 = new TreeNode(6, null, null);
const node7 = new TreeNode(7, null, null);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

const dfsRecursive = (root) => {
  if (!root) return;

  // process root
  console.log(root.val);

  dfs(root.left);
  dfs(root.right);
};

const dfsIterative = (root) => {
  const stack = [root];

  while (stack.length) {
    const curr = stack.pop();

    // process root
    console.log(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
};

const bfs = (root) => {
  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();

    // process root
    console.log(curr.val);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
};

// const findElementInBinaryTree = (root, target) => {
//   if (!root) return false;

//   if (root.val === target) return true;

//   return dfs(root.left, target) || dfs(root.right, target);
// };

// console.log(dfs(node1, 8));
