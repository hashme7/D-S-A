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


class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = new Node(key, value);
        } else {
            let current = this.table[index];
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(key, value);
        }
    }
    get(key) {
        const index = this.hash(key);
        let current = this.table[index];
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined; // Key not found
    }
    remove(key) {
        const index = this.hash(key);
        let current = this.table[index];
        let prev = null;
        while (current) {
            if (current.key === key) {
                if (prev === null) {
                    this.table[index] = current.next; 
                } else {
                    prev.next = current.next;
                }
                return; 
            }
            prev = current;
            current = current.next;
        }
    }
}

// Example usage:
const hashTable = new HashTable(10);
hashTable.insert("apple", 10);
hashTable.insert("banana", 20);
hashTable.insert("cherry", 30);

console.log(hashTable.get("apple")); 
console.log(hashTable.get("banana")); 

hashTable.remove("banana");
console.log(hashTable.get("banana"));
