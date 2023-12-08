// LLs => a contiguous sequence of data
// advantage over arrays -> deletion easy

class LLNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const node1 = new LLNode(1, null);
const node2 = new LLNode(2, null);
const node3 = new LLNode(3, null);

node1.next = node2;
node2.next = node3;

// [ val, next ] -> [ val, next ] -> [ val, null ] -> null

// traversing a LL
const traverseLL = (head) => {
  let curr = head;
  // let prev = null;

  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
};