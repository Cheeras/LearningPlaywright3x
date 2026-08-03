//Rotate Array Elements by One Position to the Left
let nums = [12,99,9,23,67,8,34,56];

console.log("Before rotation:", nums);

let previous = nums[0];
for (let i = 0; i < nums.length - 1; i++) {
    nums[i] = nums[i + 1];
}
nums[nums.length - 1] = previous;
console.log("After rotation:", nums);
