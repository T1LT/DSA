// leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (left, right) {
  if (!left) return right;
  if (!right) return left;
  let tail = (res = new ListNode(null));
  if (!left && !right) return res;
  let curr1 = left;
  let curr2 = right;
  while (curr1 && curr2) {
    if (curr1.val >= curr2.val) {
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    tail = tail.next;
  }
  if (!curr1) tail.next = curr2;
  if (!curr2) tail.next = curr1;
  return res.next;
};
