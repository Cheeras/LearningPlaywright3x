let arr = [10,99,78,9,4,10,56,99,102];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr);
// Output: [10, 99, 78, 9, 4, 56, 102]
