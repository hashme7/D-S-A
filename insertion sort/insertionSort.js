// let sort = (array) => {
//     for (let i = 1; i < array.length; i++) {
//         let key = array[i];
//         let k = i - 1;
//         while (k >= 0 && array[k] > key) {
//             array[k + 1] = array[k];
//             k--;
//         }
//         array[k+1] = key;
//     }
//     return array;
// }

// console.log(sort([1,4,2,34,56]));