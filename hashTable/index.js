// const arr1 = [5, 8, 5, -1, 8];
// const arr2 = [5, 0, 5, 8, 2, 6];

// let findUncommonElements = (arr1,arr2)=>{
//     let hashSet = new Set();
//     for( let elem of arr1){
//         hashSet.add(elem);
//     }
//     for(let elem of arr2){
//         if(hashSet.has(elem)){
//             hashSet.delete(elem);
//         }else{
//             hashSet.add(elem);
//         }
//     }
//     return hashSet;
// }
// console.log(findUncommonElements(arr1, arr2));


// class Node {
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//         this.next = null;
//     }
// }
// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Array(size).fill(null);
//     }
//     hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i)) % this.size;
//         }
//         return hash;
//     }

//     insert(key, value) {
//         const index = this.hash(key);
//         if (!this.table[index]) {
//             this.table[index] = new Node(key, value);
//         } else {
//             let current = this.table[index];
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = new Node(key, value);
//         }
//     }
//     get(key) {
//         const index = this.hash(key);
//         let current = this.table[index];
//         while (current) {
//             if (current.key === key) {
//                 return current.value;
//             }
//             current = current.next;
//         }
//         return undefined; // Key not found
//     }
//     remove(key) {
//         const index = this.hash(key);
//         let current = this.table[index];
//         let prev = null;
//         while (current) {
//             if (current.key === key) {
//                 if (prev === null) {
//                     this.table[index] = current.next; 
//                 } else {
//                     prev.next = current.next;
//                 }
//                 return; 
//             }
//             prev = current;
//             current = current.next;
//         }
//     }
// }

// // Example usage:
// const hashTable = new HashTable(10);
// hashTable.insert("apple", 10);
// hashTable.insert("banana", 20);
// hashTable.insert("cherry", 30);

// console.log(hashTable.get("apple")); 
// console.log(hashTable.get("banana")); 

// hashTable.remove("banana");
// console.log(hashTable.get("banana"));



// hashTable with collision handling ( chaining)
// class Node {
//   constructor(key,value) {
//       this.key = key;
//       this.value = value;
//       this.next = null;
//   }
// }


// class MyHashMap{
//     constructor(size){
//         this.size = size;
//         this.buckets = new Array(size).fill(null);
//     }
//     hash(key){
//         return key % this.size;
//     }
//     add(key,value){
//         const index = this.hash(key);
//         const newData = new Node(key, value);
//         if (!this.buckets[index]) {
//             this.buckets[index] = newData;
//         } else {
//             let curr = this.buckets[index];
//             while (curr.next) {
//                 curr = curr.next;
//             }
//             curr.next = newData;
//         }
//     }
//     get(key) {
//         const index = this.hash(key);
//         if (this.buckets[index]) {
//             let curr = this.buckets[index];
//             while (curr) {
//                 if (curr.key == key) {
//                     return curr.value;
//                 }
//                 curr = curr.next;
//             }
//         }
//         return console.log("not found");
//     }
//     delete(key) {
//         const index = this.hash(key)
//         if (this.buckets[index]) {
//             let curr = this.buckets[index]
//             let prev = null
//             while (curr) {
//                 if (curr.key == key && !prev) {
//                     this.buckets[index] = curr.next;
//                 } else if(curr.key == key && prev){
//                     prev.next = curr.next;
//                     return true;
//                 }
//                 prev = curr;
//                 curr = curr.next;
//             }
//         } else {
//             console.log("there is no data found");
//             return false;
//         }
//     }
// }
// const newMyHash =new MyHashMap(10);
// newMyHash.add(1, "hashim");
// newMyHash.delete(1);
// console.log(newMyHash)


// OPEN ADRESSING ( Linear probing)..

class MyHashMap {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size);
    }
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash += key.charCodeAt(0);
        }
        return hash % this.size;
    }
    insert(key,value) {
        const index = this.hash(key);
        let startIndex = index
        while (this.buckets[index] !== undefined && this.buckets[index] !== key) {
            index = (index + 1) % this.size;
            if (index == startIndex) {
                console.log("Hashmap is full");
                return;
            }
        }
        this.buckets[index] = { key, value };
    }
    get(key) {
        const index = this.hash(key);
        let startIndex = index;
        while (this.buckets[index] !== undefined) {
            if (this.buckets[index] == key) return this.buckets[index];
            index = (index + 1) % this.size;
            if (index == startIndex) break; 
        }
    }
    remove(key) {
        const index = this.hash(key);
        const startIndex = index;
        while (this.buckets[index] !== null) {
            if (this.buckets[index].key == key) {
                this.buckets[index] = null;
                
            }
        }
    }
}