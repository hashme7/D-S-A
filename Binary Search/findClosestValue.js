//  Binary Search with Closest Value

function binarySearchClosest(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (left === 0) return arr[0];
  if (left === arr.length) return arr[arr.length - 1];

  return Math.abs(arr[left] - target) < Math.abs(arr[left - 1] - target)
    ? arr[left]
    : arr[left - 1];
}

console.log(binarySearchClosest([1, 3, 5, 7, 9], 6)); 
