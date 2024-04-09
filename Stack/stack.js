//------------------ STACK using ARRAY ---------------//

// let stack = [];
// let top = -1;
// let push = function(elem){
//     stack[stack.length] = elem;
//     top++;
// }
// let pop = function(){
//     if(top==-1){
//         return console.log('Stack Underflow!!!!');
//     }
//     stack.length--;
//     top--;
// }
// let peak = function(){
//     if(top == -1){
//         return console.log('Stack underFlow!!');
//     }
//     console.log(stack[top]);
// }

// let isEmpty = function(){
//    console.log(top==-1);
// }
// let display = function(){
//     for(let i =0 ;i< stack.length;i++){
//         console.log(stack[i])
//     }
// }

// push(10);
// push(20)
// push(30)
// push(40)
// pop();
// push(50)
// peak();
// isEmpty();
// display();










// ++++++++++++++++++ STACK USING LINKED LIST +++++++++++++++++++++++++\\

// class Stack {
//     constructor() {
//         this.top = null;
//     }
//     peak(){
//         if (!this.top) {
//             return console.log('Stack underflow!!')
//         }
//         console.log(this.top.data)
//     }
//     push(data) {
//         let newNode = new Node(data);
//         if (!this.top) {
//             this.top = newNode;
//             return;
//         }
//         newNode.next = this.top;
//         this.top = newNode;
//     }
//     pop() {
//         if (!this.top) {
//             return console.log('Stack underflow!!')
//         }
//         let temp = this.top.next;
//         this.top.next = null;
//         this.top = temp;
//     }
//     display() {
//         if (!this.top) {
//             return console.log("Stack underFlow!!");
//         }
//         let current = this.top;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// let newStack = new Stack();
// newStack.push(10)
// newStack.push(104)
// newStack.push(130)
// newStack.push(20)
// newStack.display()
// newStack.peak()


// PENDING IN STACK
///1 finding logest repeating char in  a String;

function longestRepeatingChar(str) {
    if(str.length == 0)return [null,0];
    let currentChar = str[0];
    let currentCount = 1;
    let maxChar = null;
    let maxCount = 0;
    for(let i =1 ; i< str.length ;i++){
        if(currentChar == str[i]){
            currentCount++;
        }else{
            if(currentCount > maxCount){
                maxCount = currentCount;
                maxChar = currentChar;
            }
            currentChar = str[i+1];
            currentCount =1;
        }    }
    if(currentCount>maxCount){
        maxCount = currentCount;
        maxChar = currentChar;
    }
    return [maxChar,maxCount]
}

const inputStr = "aaabbccccddddd";
const [maxChar, maxCount] = longestRepeatingChar(inputStr);
console.log(`The longest repeating character in '${inputStr}' is '${maxChar}' with count ${maxCount}.`);



//2 reverse a string using Stack;
// let newStack = [];
// let reverseString = (strng) => {
//     for (let i = 0; i < strng.length; i++) {
//         newStack.push(strng[i])
//     }
//     let reverseWord = ''
//     while (newStack.length>0){
//         reverseWord += newStack.pop();
//     }
//     return reverseWord;
// }

// consolssswelrrrrrrrrrrrrrrrrrrr;;;;;rprprrpppppppppppppppppppppppppppp444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444e.log(reverseString('hashim'))

//3 reverse a string using recursion;
// let reverseString  = (strng)=>{
//     if(strng.length ==0) return "";
//     return reverseString(strng.slice(1))+strng[0];
// }

// console.log(reverseString("hashim"))

//4 check balanced parenthesis
// function isBalanced(str) {
//     const stack = [];
//     const openingBrackets = ['(', '[', '{'];
//     const closingBrackets = [')', ']', '}'];

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (openingBrackets.includes(char)) {
//             stack.push(char);
//         } else if (closingBrackets.includes(char)) {
//             const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
//             if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

// const testString1 = "{[()]}";
// console.log(`Is "${testString1}" balanced? ${isBalanced(testString1)}`);

// const testString2 = "{}[()]";
// console.log(`Is "${testString2}" balanced? ${isBalanced(testString2)}`);

// const testString3 = "({})[()]";
// console.log(`Is "${testString3}" balanced? ${isBalanced(testString3)}`);

