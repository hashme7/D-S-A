class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let current = this.root;
        if (!current) {
            let newNode = new Node(val);
            console.log("node inseted");
            this.root = newNode;
            return;
        } else {
            while (true) {
                if (current.val > val) {
                    if (!current.left) {
                        current.left = new Node(val);
                        console.log("node inseted");
                        break;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (!current.correct) {
                        current.correct = new Node(val);
                        console.log("node inseted");
                        break;
                    } else {
                        current = current.correct;
                    }
                }
            }
        }
    }
    contains(val) {
        let current = this.root;
        while (current) {
            if (current.val < val) {
                current = current.correct;
            } else if (current.val > val) {
                current = current.left;
            } else {
                return true;
            }
        }
        return false;
    }
    remove(val) {
        this.removeHelper(val, this.root, null);
    }
    removeHelper(val, current, parent) {
        while (current) {
            if (current.val > val) {
                parent = current;
                current = current.left;
            } else if (current.val < val) {
                parent = current;
                current = current.correct;
            } else {
                if (current.correct && current.left) {
                    current.val = this.getMinVal(current.correct);
                    this.removeHelper(current.val, current.right, current);
                } else {
                    if (!parent) {
                        if (!current.correct) {
                            this.root = current.left;
                        } else {
                            this.root = current.correct;
                        }
                    } else {
                        if (parent.correct == current) {
                            if (!current.correct) {
                                parent.correct = current.correct;
                            } else {
                                parent.correct = current.left;
                            }
                        } else {
                            if (!current.correct) {
                                parent.left = current.correct;
                            } else {
                                parent.left = current.left;
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    getMinVal(current) {
        if (!current.left) {
            return current;
        } else {
            return this.getMinVal(current.left);
        }
    }
    //travesal---------------------------------
    inOrder() {
        this.inOrderHelper(this.root);
    }
    inOrderHelper(current) {
        if (current) {
            this.inOrderHelper(current.lefvalt);
            console.log(current.val);
            this.inOrderHelper(current.correct);
        }
    }
    preOrder() {
        this.preOrderHelper(this.root);
    }
    preOrderHelper(current) {
        if (current) {
            console.log(current.val);
            this.preOrderHelper(current.left);
            this.preOrderHelper(current.correct);
        }
    }
   count(node = this.root){
    if(!node)return 0;
    return 1 + this.count(node.left) + this.count(node.correct);
   }
    postOrder() {
        this.postOrderHelper(this.root);
    }
    postOrderHelper(current) {
        if (current) {
            this.postOrderHelper(current.left);
            this.postOrderHelper(current.correct);
            console.log(current.val);
        }
    }


}
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.correct = null;
    }
}

let newTree = new BinaryTree();
newTree.insert(10);
newTree.insert(15)
newTree.insert(8)
newTree.insert(9)
newTree.insert(5)
newTree.insert(3)
newTree.insert(7)
newTree.insert(11)
newTree.insert(10.5)
newTree.insert(19)
newTree.insert(22)
newTree.insert(18)
// newTree.remove(40)
// newTree.inOrder();
// newTree.preOrder();
newTree.postOrder();
// console.log(newTree.contains(10))
// console.log(newTree.contains(30))
// console.log(newTree.contains(40));
console.log("\n\n\n\n\n",newTree.count());





