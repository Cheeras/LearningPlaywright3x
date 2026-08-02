//Create a new array that contains only even numbers from the given array.
let nums = [99, -49, 12, -77, 22, 33, -101, 87, 20];
let evenNumbers = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        evenNumbers.push(nums[i]);
    }
}

console.log("Even numbers:", evenNumbers);