/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const result = new ListNode();
  let current = result
  let n1 = l1
  let n2 = l2
  let remainder = 0
  while (n1 !== null || n2 !== null) {
    let sum = remainder
    if (n1 !== null) {
      sum += n1.val
      n1 = n1.next
    }
    if (n2 !== null) {
      sum += n2.val
      n2 = n2.next
    }
    current.next = new ListNode(sum % 10)
    current = current.next
    remainder = sum >= 10 ? 1 : 0
  }
  if (remainder === 1) {
    current.next = new ListNode(1)
  }
  return result.next
}
