class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// iterative solution
const insertNode = (head, value, index) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  let count = 0;
  let current = head;

  while (current !== null) {
    if (count === index - 1) {
      const temp = current.next;
      current.next = new Node(value);
      current.next.next = temp;
    }

    count += 1;
    current = current.next;
  }

  return head;
};

// recursive solution
// const insertNode = (head, value, index, count = 0) => {
//   if (head === null) return null;

// if (index === 0) {
//   const newHead = new Node(value);
//   newHead.next = head;
//   return newHead;
// }

//   if (count === index - 1) {
//     const temp = head.next;
//     head.next - new Node(value);
//     head.next.next = temp;
//     return head;
//   }
//   insertNode(head.next, value, index, count + 1);

//   return head;
// };

console.log(insertNode(a, 'c', 2, (count = 0)));
