class LinkedList {
  constructor() {
    this.head = null;
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
  removeNthNodeFrmEnd(n) {
      if (this.head) return;
      
  }
}
class Node {
  constructor(val) {
    this.val = val;
  }
}
