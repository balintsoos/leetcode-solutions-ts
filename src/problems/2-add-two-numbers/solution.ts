import { ListNode } from './list-node';

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let current = head;
  let n1 = l1;
  let n2 = l2;
  let carry = 0;
  while (n1 !== null || n2 !== null) {
    let sum = carry;
    if (n1 !== null) {
      sum += n1.val;
      n1 = n1.next;
    }
    if (n2 !== null) {
      sum += n2.val;
      n2 = n2.next;
    }
    current.next = new ListNode(sum % 10);
    current = current.next;
    carry = sum >= 10 ? 1 : 0;
  }
  if (carry === 1) {
    current.next = new ListNode(1);
  }
  return head.next;
}
