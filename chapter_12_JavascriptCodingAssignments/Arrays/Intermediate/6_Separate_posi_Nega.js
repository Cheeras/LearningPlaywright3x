//Separate positive and negative numbers in an array
let nums = [99, -49, 12, -77, 22, 33, -101, 87, 20];
let positiveNumbers = [];
let negativeNumbers = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
        positiveNumbers.push(nums[i]);
    } else {
        negativeNumbers.push(nums[i]);
    }
}

console.log("Positive numbers:", positiveNumbers);
console.log("Negative numbers:", negativeNumbers);