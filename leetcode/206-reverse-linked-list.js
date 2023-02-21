// https://leetcode.com/problems/reverse-linked-list/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr;
  while (head) {
    curr = head;
    head = head.next;
    curr.next = prev;
    prev = curr;
  }
  return prev;
};

// let stack = [];
// let first = head;
// let second = head;
// while (first !== null) {
//   stack.push(first.val);
//   first = first.next;
// }
// while (stack.length) {
//   second.val = stack.pop();
//   second = second.next;
// }
// return head;
