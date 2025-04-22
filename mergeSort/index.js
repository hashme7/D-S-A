
//---------------------------------- Merge Sort --------------------------//
                //!!-------------     1      ---------------!!\\
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
   if(nums.length <= 1)return nums;
    let midIndx = nums.length/2;
    let firstHalf = nums.slice(0,midIndx);
    let lastHalf = nums.slice(midIndx,nums.length);
    return join(sortArray(firstHalf),sortArray(lastHalf));
};
var join = function (firstHalf,lastHalf){
    let newArray = [];
    let i =0 ,k =0, j =0;
    while(i< firstHalf.length && j< lastHalf.length){
        if(firstHalf[i]<lastHalf[j]){
            newArray[k++] =+ firstHalf[i++];
        }else{
            newArray[k++] =+ lastHalf[j++];
        }
    }
    while(i<firstHalf.length){
        newArray[k++] =+ firstHalf[i++];
    }
    while(j<lastHalf.length){
        newArray[k++] =+ lastHalf[j++];
    }
    console.log(newArray)
    return newArray;
}