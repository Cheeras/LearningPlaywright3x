//move all zeros to the end of the array    
let arr = [77,0,0,97,23,0,14,0,0,17,19];
let nonZeroCount = arr.length - 1;

for (let index = arr.length - 1; index >= 0; index--){   
    if (arr[index] !== 0){
        arr[nonZeroCount] = arr[index];
        nonZeroCount--;
    }
}

console.log("nonZeroCount:", nonZeroCount);
// Fill the remaining positions with zeros
for (let i = nonZeroCount; i >= 0; i--) {
    arr[i] = 0;
}
console.log("Array after moving zeros to the front:", arr);


