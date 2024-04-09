// let arr = [21,2,33,55,4,34,33];
// quickSort(arr,0,arr.length-1);
// for(let i =0 ; i< arr.length ;i++){
//     console.log(arr[i])
// }

// function quickSort(arr,low,height){
//     if(low<height){
//         let pi = partition(arr,low,height);
//         quickSort(arr,low,pi-1);
//         quickSort(arr,pi+1,height);
//     }
// }
// function partition(arr,low,height){
//     let pivot = arr[height];
//     let i = low-1;
//     for(let k =low ; k<= height ; k++){
//         if(arr[k]<pivot){
//             i++;
//             [arr[i],arr[k]=arr[k],arr[i]]
//         }
//     }
//     [arr[i+1],arr[height]] = [arr[height],arr[i+1]];
//     return i+1;
// }

// function partition(arr, low, high) {
//     // Choosing the pivot
//     let pivot = arr[high];
   
//     let i = low - 1;
   
//     for (let j = low; j <= high - 1; j++) {
//         if (arr[j] < pivot) {
            
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]]; 
//         }
//     }
   
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
//     return i + 1; 
// }
 
// function quickSort(arr, low, high) {
//     if (low < high) {
//         let pi = partition(arr, low, high);
   
//         quickSort(arr, low, pi - 1);
//         quickSort(arr, pi + 1, high);
//     }
// }
 
// let arr = [21,2,33,55,4,34,33];
// let N = arr.length;
 
// quickSort(arr, 0, N - 1);
// console.log("Sorted array:");
// console.log(arr.join(" "));
let arr = [10,3,4,21,2];

let quickSort = function(arr,low,high){
    if(low<high){
        let pi = partition(arr,low,high);
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
    }
    return arr;
}

let partition  = (arr,low,high)=>{
    let pivot = arr[high];
    let i =low-1;
    for(let j =low ;j <high-1;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
    return i+1;
}
console.log(quickSort(arr,0,arr.length-1));

