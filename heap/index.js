// class Heap {
//     constructor(array){
//         this.buildHeap(array);
//     }
//     buildHeap(array){
//         this.heap = array;
//         for(let i = this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftdown(i);
//         }
//     }
//     shiftdown(current){
//         let leftIndex = this.leftChild(current);
//         let endIndex = this.heap.length-1;
//         let indxToShift;
//         while(leftIndex<=endIndex){
//             let rightIndex = this.rightChild(current);
//             if(rightIndex<=endIndex && this.heap[rightIndex]<this.heap[leftIndex]){
//                 indxToShift = rightIndex;
//             }else{
//                 indxToShift = leftIndex;
//             }
//             if(this.heap[indxToShift]<this.heap[current]){
//                 [this.heap[indxToShift],this.heap[current]]=[this.heap[current],this.heap[indxToShift]];
//                 current = indxToShift;
//                 leftIndex = this.leftChild(current);
//             }else{
//                 return;
//             }
//         }
//     }
//     shiftUp(current){
//         let parentIndx = this.parent(current);
//         while(current >0 && this.heap[parentIndx]>this.heap[current]){
//             [this.heap[parentIndx],this.heap[current]]=[this.heap[current],this.heap[parentIndx]];
//             current = parentIndx;
//             parentIndx = this.parent(current);
//         }
//     }
//     peek(){
//         return this.peek[0];
//     }
//     parent(i){
//         return Math.floor((i-1)/2);
//     }
//     remove(){
//         [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]];
//         this.heap.pop();
//         this.shiftdown(0);
//     }
//     leftChild(i){
//         return i*2+1;
//     }
//     rightChild(i){
//         return i*2+2;
//     }
//     insert(data){
//         this.heap.push(data);
//     }
//     print(){
//         console.log("heap")
//         for(let i =0 ;i< this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }
// }
// let array = [12,2,3,4,4,22];
// let heap1  = new Heap(array);
// heap1.remove();
// heap1.print();


class Heap{
    constructor(array){
        this.heap = array;
        this.buildHeap();
    }
    buildHeap(){
        let lastP = this.parent(this.heap.length-1);
        for(let i = lastP; i >= 0; i--){
            this.shiftDown(i);
        }
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    leftChild(i){
        return i*2+1;
    }
    rightChild(i){
        return i*2+2;
    }
    shiftDown(current){
        let left = this.leftChild(current);
        let endIndex = this.heap.length-1;
        while(left<=endIndex){
            let right = this.rightChild(current);
            let indexToShift ;
            if(right<=endIndex && this.heap[right]<this.heap[left]){
                indexToShift = right;
            }else{
                indexToShift = left;
            }
            if(this.heap[indexToShift] < this.heap[current]){
                [this.heap[indexToShift],this.heap[current]] = [this.heap[current],this.heap[indexToShift]];
                current = indexToShift;
                left = this.leftChild(current);
            }else{
                return;
            }
        }
        return;
    }
    shiftUp(current){
        let parent = this.parent(current);
        while(current > 0 && this.heap[current]<this.heap[parent]){
            [this.heap[parent],this.heap[current]]= [this.heap[current],this.heap[parent]];
            current= this.parent(current);
        }
    }
    peek(){
        return this.heap[0];
    }
    remove(){
        [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]];
        this.heap.pop();
        this.shiftDown(0);
    }
    print(){
        for(let i =0 ;i<this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
}
let newArray = [12,23,2,1,212,3,21,22,11]
let newHeap = new Heap(newArray);
newHeap.remove();
newHeap.print();