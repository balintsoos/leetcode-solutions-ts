import { ListNode } from './list-node';

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let current = head;
  let sum = 0;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode(sum % 10);
    current = current.next;
    sum = sum >= 10 ? 1 : 0;
  }
  if (sum === 1) {
    current.next = new ListNode(1);
  }
  return head.next;
}
