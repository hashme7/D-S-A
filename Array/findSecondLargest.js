let numbers = [12, 23, 21, 1, 123, 45, 334];
let max = numbers[1];
let secondMax = 0;
for (let i = 1; i < numbers.length; i++){
    if (max < numbers[i]) {
        secondMax = max;
        max = numbers[i];
    } else if (max > numbers[i] && secondMax < numbers[i]) {
        secondMax = numbers[i];
    }
}

console.log(secondMax,max)