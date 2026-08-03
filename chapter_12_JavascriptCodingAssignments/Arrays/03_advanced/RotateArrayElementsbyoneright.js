//Rotate Array Elements by One Position to the Right
let nums = [12,99,9,23,67,8,34,56];

console.log("Before rotation:", nums);

let previous = nums[nums.length - 1];
// for (let i = nums.length - 1; i > 0; i--) {
//     nums[i] = nums[i - 1];
// }
// nums[0] = last;

// console.log("After rotation:", nums);
//By using for in  loop

for(const index in nums){
    let currentValue = nums[index];
    nums[index] = previous; 
    previous = currentValue;
}
//nums[0] = last;
console.log("After rotation using for in loop:", nums);