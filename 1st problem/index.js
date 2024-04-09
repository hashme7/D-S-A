let a = [1, 2, 6, 4, 354, 4, 54, 32, 22, 2];
let target = 10;
function result(a, target) {
    let setArray = new Set();
    for (let i = 1; i < a.length; i++) {
        let num = a[i];
        let match = target - num;
        if (setArray.has(match)) {
            return [num,match];
        }else{
            setArray.add(match)
        }
    }
    return ['0']
}
console.log(result(a,target))