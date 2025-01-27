//  Binary search in iterative approach


function binarySearch(arr,num) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] == num) return mid+1;
        if (arr[mid] > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return "not found";
}


console.log(binarySearch([1,2,3,4,5],4));
