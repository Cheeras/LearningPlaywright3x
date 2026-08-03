//Rotate Array Elements by K Positions
let nums = [12,99,9,23,67,8,34,56];
let k = 2; // Number of positions to rotate

console.log("Before rotation:", nums);

// Normalize k to ensure it's within the bounds of the array length
k = k % nums.length;
let previous = nums[nums.length - 1];
for (let i = nums.length - 1; i >= 0; i--) {
    let currentValue = nums[i];
    nums[i] = previous;
    previous = currentValue;
}
console.log("After rotation:", nums);