//move all zeros to the end of the array    
let arr = [77,0,0,97,23,0,14,0,0,17,19];
let nonZeroCount = 0;

for (const index in arr){   
    if (arr[index] !== 0){
        arr[nonZeroCount] = arr[index];
        nonZeroCount++;
    }
}
// Fill the remaining positions with zeros
for (let i = nonZeroCount; i < arr.length; i++) {
    arr[i] = 0; 
}
console.log("Array after moving zeros to the end:", arr);


