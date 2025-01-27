// Binary Search using recursion:-

function BinarySearch(arr, tar, left, right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] > tar) {
        return BinarySearch(arr, tar, left, mid - 1);
    } else if (arr[mid] < tar) {
        return BinarySearch(arr, tar, mid + 1, right);
    } else {
        return mid == -1 ? "not found" : mid + 1;
    }
}

const arr = [1,2,3,4,5]
console.log(BinarySearch(arr,1,0,arr.length-1));
