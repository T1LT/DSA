// SET/HASHSET
const set = new Set();
set.add(1); // insertion -> O(1)
set.has(3); // retrieval -> O(1)
set.delete(2); // deletion -> O(1)

// MAP/HASHMAP
const map = new Map();
const map2 = {};

map.set("a", 1); // insertion -> O(1)
map.get("a");    // retrieval -> O(1)
map.delete("a"); // deletion -> O(1)

// LINKED LISTS
class LLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

const la = new LLNode(1);
const lb = new LLNode(2);
const lc = new LLNode(3);
const ld = new LLNode(4);
const le = new LLNode(5);

la.next = lb;
lb.next = lc;
lc.next = ld;
ld.next = le;

// traversal
const LLTraverse = (head) => {
  if (!head) return;

  let curr = head; 

  while (curr) {
    // processing step
    console.log(curr.val);

    curr = curr.next;
  }
};

// tortoise & hare / fast & slow pointers
const fastAndSlow = (head) => {
  if (!head) return;

  let slow = fast = head;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
};

// TREES
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };
};

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);
const f = new TreeNode(6);

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

// traversal/DFS
const preorder = (root) => {
  if (!root) return;

  // processing step
  console.log(root.val);

  if (root.left) preorder(root.left);
  if (root.right) preorder(root.right);
};
// TC: O(n)
// SC: O(1)

// GRAPHS
const graph = { 1: [2, 3], 2: [1, 4, 5], 3: [1, 4], 4: [2, 3, 5], 5: [2, 4] };

const dfs = (graph, vertex, visited = new Set()) => {
  if (visited.has(vertex)) return;

  visited.add(vertex);

  // processing step
  console.log(vertex);

  for (const neighbor of graph[vertex]) {
    if (!visited.has(neighbor)) dfs(graph, neighbor, visited);
  }
};
// TC: O(v + e) -> !revisit
// SC: O(v)

const bfs = (graph, vertex) => {
  const visited = new Set();
  const queue = [];

  queue.push(vertex);
  visited.add(vertex);

  while (queue.length) {
    const node = queue.shift();

    // processing step
    console.log(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
};
// TC: O(v + e) -> !revisit
// SC: O(v)

// OPTIMIZED QUEUE (JS)
class Deque {
  constructor() {
    this.queue = new Map();
    this.insertionIdx = 0;
    this.removalIdx = 0;
  }

  enqueue(el) {
    this.queue.set(this.insertionIdx, el);
    this.insertionIdx++;
  }

  dequeue() {
    const el = this.queue.delete(this.removalIdx);
    if (typeof el !== "undefined") {
      this.removalIdx++;
      return el;
    }
  }
}

// BINARY SEARCH
const A = [1,2,3,4,5,6,7];

const binarySearch = (arr, target, l = 0, r = arr.length - 1) => {
  if (l > r) return -1;

  const mid = Math.floor((l + r) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, target, l, mid - 1);
  else return binarySearch(arr, target, mid + 1, r);
};
// TC: O(log n)
// SC: O(1)

// BUBBLE SORT
const arr = [4,1,7,5,2,3,6];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
};
// TC: O(n ^ 2)
// SC: O(1)

// MERGE SORT
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  if (i >= left.length) {
    for (let k = j; k < right.length; k++) {
      result.push(right[k]);
    }
  }

  if (j >= right.length) {
    for (let k = i; k < left.length; k++) {
      result.push(left[k]);
    }
  }

  return result;
};
// TC: O(n log n)
// SC: O(n)
