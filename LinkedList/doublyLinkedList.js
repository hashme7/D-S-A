class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLinkedList{
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
        newNode.prev = curr;
        curr.next = newNode;
    }
    reverse() {
        let curr = this.head;
        while (curr && curr.next) {
            let nextNode = curr.next;
            curr.next = curr.prev;
            curr.prev = nextNode;
            curr = curr.prev;
        }
        curr.next = curr.prev;
        curr.prev = null;
        this.head = curr;
    }
    reverseUsingReverse(curr,prev = null) {
        if (!curr) return this.head = prev; 
        let nextNode = curr.next;
        curr.next = prev;
        curr.prev = nextNode;
        return this.reverseUsingReverse(nextNode, curr);
    }
    deleteByVal(val) {
        let curr = this.head;
        while (curr.val !== val) {
            curr = curr.next;
        }
        if (curr) {
            curr.prev.next = curr.next;
        }
    }
    display() {
        let curr = this.head;
        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
}

const ll = new DLinkedList();
ll.add(10);
ll.add(14);
ll.add(15);
ll.add(20);
ll.deleteByVal(20)
// ll.reverse();
ll.reverseUsingReverse(ll.head,null);
ll.display();
