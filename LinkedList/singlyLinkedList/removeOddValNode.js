// removeOddNodes from Singly linked list;

class LinkedList {
  constructor() {
    this.head = null;
  }
  removeOddNodes(curr, prev = null) {
    if (!curr) return;
    if (curr.val % 2 !== 0 && !prev) {
      this.head = curr.next;
      this.removeOddNodes(this.head, null);
    } else if (curr.val % 2 !== 0) {
      prev.next = curr.next;
      this.removeOddNodes(prev.next, prev);
    } else {
      this.removeOddNodes(curr.next, curr);
    }
  }
  add(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  filterList() {
    if (!this.head) return;
    return this.removeOddNodes(this.head, null);
  }
  log() {
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const newList = new LinkedList();
newList.add(13);
newList.add(12);
newList.add(15);
newList.add(16);
newList.add(17);
newList.add(18);

newList.filterList();
console.log("-------------------------------");

newList.log();
