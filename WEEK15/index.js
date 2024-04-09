class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}
class Trie{
    constructor(){
        this.root = null;
    }
    insert(word){
         let node = new TrieNode();
         this.root = node;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
        }
    }
    contains(word){
        let node = this.root;
        let length = 0;
        for(let char of word){
            if(!node.children[char] && length == 0){
                return false;
            }else{
                length++;
            }
        }
        return true;
    }
}

let newTrie = new Trie();
newTrie.insert("hashim");
newTrie.insert("hisham");
newTrie.insert("tree");
newTrie.insert("trie");
console.log(newTrie.contains("ha"));