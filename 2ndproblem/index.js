// order all target to the last 
// let inputArray = [1,6,6,2,6,3,32,6];

// let target = 6;

// function rearrange(inputArray,target){
//     let i = 0; k = inputArray.length-1;
//     let temp = 0;
//     while(i!=k){
//         if(k==target){
//             k--;
//         }
//         if(i!=6){
//             i++;
//         }
//         if(i==6&&k!=6){
//             temp = inputArray[i];
//             inputArray[i]= inputArray[k];
//             inputArray[k] = temp
//         }
//         return inputArray;
//     }
// }

// console.log(rearrange(inputArray,target))


//fibunacci series----------------;


function fibunacci(n){
    let result = [0,1];
    for(let i =2 ;i< n;i++){
        result[i]= result[i-1]+result[i-2];
    }
    return result;
}

console.log(fibunacci(10));
console.log(fibunacci(3));
console.log(fibunacci(29));