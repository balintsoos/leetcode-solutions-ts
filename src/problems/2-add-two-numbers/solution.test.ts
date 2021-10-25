import { addTwoNumbers } from './solution';
import { ListNode } from './list-node';

describe('2. Add Two Numbers', () => {
  test('should return 0 if both input is 0', () => {
    expect(addTwoNumbers(createList([0]), createList([0]))).toEqual(createList([0]));
  });

  test('should return the correct sum', () => {
    expect(addTwoNumbers(createList([2, 4, 3]), createList([5, 6, 4]))).toEqual(createList([7, 0, 8]));
  });

  test('should carry the 1', () => {
    expect(addTwoNumbers(createList([9, 9, 9, 9, 9, 9, 9]), createList([9, 9, 9, 9]))).toEqual(
      createList([8, 9, 9, 9, 0, 0, 0, 1]),
    );
  });
});

function createList(numbers: number[]): ListNode {
  const head = new ListNode(numbers[0]);
  let current = head;
  let i = 1;
  while (i < numbers.length) {
    current.next = new ListNode(numbers[i]);
    current = current.next;
    i += 1;
  }
  return head;
}
