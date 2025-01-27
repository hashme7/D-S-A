// Remove Adjacent Odd Numbers

function removeAdjacentOddNumbers(arr) {
  let i = 0; 

  while (i < arr.length - 1) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      for (let j = i; j < arr.length - 1; j++) {
          arr[j] = arr[j + 2];
          if (arr[j +1]  && arr[j+3]) {
              arr[j + 1] = arr[j + 3];
          }
      }
      arr.length-=2;
    } else {
      i++; 
    }
  }

  return arr; 
}

// Example usage
let arr = [3, 5, 6, 7, 2, 8, 11, 13, 15, 4];
console.log(removeAdjacentOddNumbers(arr)); 

