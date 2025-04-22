// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
//     insertAtFirst(data) {
//         let node = new Node(data);
//         node.next = this.head;
//         this.head = node
//         this.size++;
//     }
//     insertAtLast(data) {
//         let node = new Node(data);
//         if (!this.head) {
//             this.head = node
//             this.tail = node;
//         } else {
//             this.tail.next = node;
//             this.tail = this.tail.next;
//         }
//         this.size++;
//     }
//     delete(data) {
//         if (this.head.data == data) {
//             this.head = this.head.next
//         } else {
//             let current = this.head;
//             let prev;
//             while (current.data != data) {
//                 prev = current;
//                 current = current.next;
//             }
//             if (current == this.tail) {
//                 prev.next = null
//                 this.tail = prev
//                 this.size--;
//                 return;
//             }
//             prev.next = current.next;
//         }
//         this.size--
//     }
//     insertAfter(nextTo,data){
//         let newNode = new Node(data);
//         let current = this.head;
//         while(current.data !== nextTo && current == null){
//             current = current.next;
//         }
//         if(!current){
//             return
//         }
//         newNode.next = current.next;
//         current.next = newNode;
//         this.size++;
//     }
//     printList() {
//         let current = this.head;
//         if (!this.head) {
//             console.log("list is empty")
//         } else {
//             while (current) {
//                 console.log(current.data)
//                 current = current.next
//             }
//         }
//     }
// }

// let ll = new LinkedList();

// ll.insertAtLast(3001)
// ll.insertAtFirst(38)
// ll.insertAtLast(399)
// ll.insertAtLast(10)
// ll.insertAtFirst(11)
// ll.delete(10)
// ll.insertAfter(399,1)
// ll.printList();


// console.log("\n",ll)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class linkedList {
    constructor() {
        this.head = null;
        this.tail = null
    }

    add(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.tail.next = newNode;
        this.tail = newNode;

    }
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    middleMan() {
        let once = this.head;
        let twice = this.head;
        while (twice && twice.next) {
            twice = twice.next.next;
            once = once.next;
        }
        return once;
    }

    rmDuplicatesInSorted(){
        let current = head;
        let prev =null;
        while(current.next){

        }
    }
    reverseList() {
        if (!this.head) return;
        let curr = this.head;
        let next = curr.next;
        let prev = null;
        while (curr.next) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        curr.next = prev;
        this.head =  curr;
    }
}

let ll = new linkedList();
ll.add(10);
ll.add(11);
ll.add(12);
ll.add(1000);
ll.add(200);
ll.add(499)
ll.reverseList()
// let middleMan = ll.middleMan()
ll.display()
// console.log(middleMan)


///__________________________------------------------------ Convert Array to linked List ------------------------------_________________________\\


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// function converArrayToList(array) {
//     if (!array || !array.length) return array;
//     let head = new Node(array[0]);
//     let current = head;
//     for (let i = 1; i < array.length; i++) {
//         let newNode = new Node(array[i]);
//         current.next = newNode;
//         current = newNode;
//     }
//     return head;
// }

// let convertingArray = [12, 323, 232, 232, 323, 2, 2, 2];

// let newLinkedList = converArrayToList(convertingArray)
// let current = newLinkedList
// while(current){
//     console.log(current.data)
//     current = current.next
// }


// REVERSE LINKEDLIST