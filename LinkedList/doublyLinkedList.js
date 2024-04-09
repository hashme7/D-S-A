// class Node {
//     constructor(data) {
//         this.next = null;
//         this.prev = null;
//         this.data = data;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }
//     add(data) {
//         let newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.prev = this.tail;
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//     }

//     display() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
//     prepend(data) {
//         let newNode = new Node(data);
//         this.head.prev = newNode;
//         newNode.next = this.head;
//         this.head = newNode;
//     }
//     append(data) {
//         let newNode = new Node(data);
//         newNode.prev = this.tail;
//         this.tail.next = newNode;
//         this.tail = newNode;
//     }
//     delete(data) {
//         let current = this.head;
//         while (current.data != data) {
//             current = current.next;
//         }
//         if (current) {
//             if (current == this.head) {
//                 current.next.prev = null;
//                 this.head = current.next;
//                 return;
//             }
//             if (current == this.tail) {
//                 this.tail = current.prev;
//                 current.prev.next = null;
//                 current.prev = null;
//             } else {
//                 current.prev.next = current.next;
//                 current.next.prev = current.prev;
//             }
//         } else {
//             console.log("no data is found!!!!")
//         }
//     }
//     rmDuplicatesInSortedList(){
//         let current = this.head;
//         while(current.next){
//             if(current.data == current.next.data){
//                 current.next.prev = current.prev;
//                 current.prev.next = current.next;
//             }
//             current = current.next;
//         }
//     }
//     displayReverse() {
//         let current = this.tail;
//         while (current) {
//             console.log(current.data);
//             current = current.prev;
//         }
//     }
// }
// let LL = new LinkedList();
// LL.add(10)
// LL.add(20)
// LL.add(30)
// LL.add(30)
// LL.add(40)
// LL.add(40)
// LL.prepend(100)
// LL.append(2000)
// LL.rmDuplicatesInSortedList()
// // LL.delete(100)
// // LL.delete(2000)
// // LL.delete(40)


// LL.display();
// // LL.displayReverse()



//-------------------------------------------------- Delete a particular node from the Doubly Linked List ------------------------------------\\

class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next =  null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addNode(data){
        let newNode = new Node(data);
        if(!this.head){
            newNode.next = null;
            newNode.prev = null;
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail.next;
            this.tail = newNode;
        }
    }

    display(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
    reverse() {
        this.head = this._reverse(this.head);
    }

    _reverse(node, prev = null) {
        if (!node) {
            this.tail = prev;
            return prev;
        }
        let nextNode = node.next;
        node.next = prev;
        node.prev = nextNode;
        return this._reverse(nextNode, node);
    }
}

let ll = new LinkedList();
ll.addNode(100)
ll.addNode(230)

ll.reverse(ll.head);
ll.display()