let arr = [99,12,65,43,-23,87,34,-56,43,90];

// let arr1  = new Set(arr); // Remove duplicates using Set
// arr = Array.from(arr1); // Convert Set back to Array 
// console.log("Array after removing duplicates:", arr);

//with out using Set
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}
console.log("Array after removing duplicates (without Set):", uniqueArr);