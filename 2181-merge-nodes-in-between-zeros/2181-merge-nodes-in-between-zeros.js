class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeNodes(head) {
  let dummy = new ListNode(0);
  let current = dummy;
  let sum = 0;

  head = head.next;

  while (head !== null) {
    if (head.val === 0) {
      current.next = new ListNode(sum);
      current = current.next;
      sum = 0;
    } else {
      sum += head.val;
    }
    head = head.next;
  }

  return dummy.next;
}
