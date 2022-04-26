class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const longestStreak = (head) => {
  let maxStreak = 0;
  let currentStreak = 0;
  let currentNode = head;
  let previousVal = null;

  while (currentNode !== null) {
    // condition to pinpoint the beginning of a streak
    // updated currentStreak variable
    // else reset it's value to 1
    // which indicates the value of the next
    // potential streak
    if (currentNode.val === previousVal) {
      currentStreak += 1;
    } else {
      currentStreak = 1;
    }

    // if currentStreak is greater than
    // insert that value into the maxStreak variable
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }

    previousVal = currentNode.val;
    currentNode = currentNode.next;
  }

  return maxStreak;
};

console.log(longestStreak(a));
