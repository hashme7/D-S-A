// function encoder(str, key) {
//     let newKey = key % 26;
//     let newArray = [];
//     for (let i = 0; i < str.length; i++) {
//         let letterPosition = str.charCodeAt(i) + newKey;
//         if (letterPosition <= 122) {
//             newArray[i] = String.fromCharCode(letterPosition);
//         } else {
//             newArray[i] = String.fromCharCode(96 + letterPosition % 122);
//         }
//     }
//     return newArray.join('');
// }   


// let strng = encoder("hai",2)
// console.log(strng)


// //---------------------------------------reverse a STring--------------//
// reverse = function(name){
//     if(name.length ==0)return "";
//     return reverse(name.slice(1))+name[0];
// }

// let reversedName = reverse("hashim");

// console.log(reversedName)


// reverse = function(array){
//     for(let i =0 ;i< array.length ; i++){
//         let temp = array[i];
//         array[i] = array[array.length -i];
//         array[array.length - i] = temp;
//     }
//     return array;
// }
// console.log(reverse([1,2,3,4,5,6]))


let search = function(numbers,num){
    let l = 0;
    let r = numbers.length -1;
    while(l<r){
        let mid = Math.floor((l+r)/2)
        if(numbers[mid]==num){
            return numbers.indexOf(num)
        }else if(numbers[mid]<num){
            r = mid -1;
        }else if(numbers[mid]>num){
            l = mid +1;
        }
    }
}
let numbers = [9,7,6,1,-1,-6]
console.log(search(numbers,-1))