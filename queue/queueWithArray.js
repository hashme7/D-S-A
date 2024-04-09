// // class Queue {
// //     constructor() {
// //         this.item = []
// //     }
// //     enqueue(element) {
// //         this.item.push(element);
// //     }
// //     dequeue() {
// //         if(this.item.length ==0){
// //             console.log("Queue is underflow");
// //         }
// //         return this.item.shift();
// //     }
// //     isEmpty() {
// //         return this.item.length == 0;
// //     }
// //     peek() {
// //         if (this.isEmpty()) {
// //             return this.item[0]
// //         }
// //         return this.item[this.item.length-1]
// //     }
// //     size() {
// //         return this.item.length;
// //     }
// //     print() {
// //         for(let i =0 ;i< this.item.length;i++){
// //             console.log(this.item[i]);
// //         }
// //     }
// //     reverse(){
// //         if(this.isEmpty()){
// //             return;
// //         }
// //         let front = this.dequeue();
// //         this.reverse();
// //         this.enqueue(front);
// //     }
// // }
// // let firstQueue = new Queue();
// // firstQueue.enqueue(22);
// // // console.log(firstQueue.size())
// // firstQueue.enqueue(22);
// // // console.log(firstQueue.size())
// // firstQueue.enqueue(4)
// // firstQueue.dequeue()
// // firstQueue.print()
// // firstQueue.reverse();
// // console.log('\n\n\n\n')
// // firstQueue.print()
// // // console.log(firstQueue.peek())


// class Queue {
//     constructor() {
//         this.stack = [];
//     }

//     enqueue(element) {
//         // Push the new element onto the stack
//         this.stack.push(element);
//     }

//     dequeue() {
//         // Create a temporary stack to reverse the order of elements
//         const tempStack = [];
        
//         // Pop all elements from the main stack and push them onto the temporary stack
//         while (this.stack.length > 0) {
//             tempStack.push(this.stack.pop());
//         }

//         // Pop the first element (front of the queue) from the temporary stack
//         const dequeuedElement = tempStack.pop();

//         // Push the remaining elements from the temporary stack back onto the main stack
//         while (tempStack.length > 0) {
//             this.stack.push(tempStack.pop());
//         }

//         return dequeuedElement;
//     }

//     peek() {
//         // Create a temporary stack to reverse the order of elements
//         const tempStack = [];

//         // Pop all elements from the main stack and push them onto the temporary stack
//         while (this.stack.length > 0) {
//             tempStack.push(this.stack.pop());
//         }

//         // Peek at the first element (front of the queue) in the temporary stack
//         const frontElement = tempStack[tempStack.length - 1];

//         // Push the elements back onto the main stack
//         while (tempStack.length > 0) {
//             this.stack.push(tempStack.pop());
//         }

//         return frontElement;
//     }

//     isEmpty() {
//         // The queue is empty if the main stack is empty
//         return this.stack.length === 0;
//     }

//     size() {
//         // The size of the queue is the length of the main stack
//         return this.stack.length;
//     }
// }

// // Example usage
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// console.log(queue.dequeue()); // Output: 1
// console.log(queue.peek());    // Output: 2
// console.log(queue.size());    // Output: 2

// function removeDuplicatesInPlace(array) {
//     const set = new Set();
//     let writeIndex = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (!set.has(array[i])) {
//             set.add(array[i]);
//             if (writeIndex !== i) {
//                 array[writeIndex] = array[i];
//             }
//             writeIndex++;
//         }
//     }

//     array.length = writeIndex;

//     return array;
// }

// // Example usage:
// const array = [1, 2,2, 1,3, 4, 1, 2, 5];
// removeDuplicatesInPlace(array);
// console.log(array); // Output: [1, 2, 3, 4, 5]
