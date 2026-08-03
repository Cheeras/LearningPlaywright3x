//Swap the first and last elements of the array
let nums = [12,99,9,23,67,8,34,56];

console.log("Before swapping:", nums);
let first = nums[0];
let last = nums[nums.length - 1];
let temp = first;
nums[0] = last;
nums[nums.length - 1] = temp;
console.log("After swapping:", nums);
