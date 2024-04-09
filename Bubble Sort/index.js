// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortArrayByParity = function(nums) {
//     for(let i =0 ; i < nums.length ; i++){
//          let k = i-1;
//         let key = nums[i];
//         while(nums[k]%2==1 && key % 2==0 && k>=0){
//             let temp = nums[k];
//             nums[k] = nums[k+1];
//             nums[k+1] = temp;
//             k--;
//         }
//     }
//     return nums;
// };


