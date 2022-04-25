/* eslint-disable immutable/no-mutation */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// A -> B -> C -> D -> NULL
// current variable starts at the A node..
// try to write algos as present as possible
// no premature checking of next node if not necessary
// instead it is better to go to the next node and exit when at the NULL node;

// Iterative Approach
const printLinkedList = (head) => {
  // configure starting pointer
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

printLinkedList(a);

// Recursive Approach
const printRecursiveLinkedList = (head) => {
  // eslint-disable-next-line no-useless-return
  if (head === null) return;

  console.log(head.val);

  printRecursiveLinkedList(head.next);
};

printRecursiveLinkedList(a);
