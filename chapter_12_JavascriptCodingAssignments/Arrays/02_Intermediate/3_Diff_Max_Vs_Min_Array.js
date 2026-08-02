//Difference between maximum and minimum element in an array
let nums = [99, -49, 12, -77, 22, 33, -101, 87, 20];
let max = -Infinity;
let min = Infinity;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
    if (nums[i] < min) {
        min = nums[i];
    }
}

console.log("Maximum number:", max);
console.log("Minimum number:", min);

let difference = max - min;
console.log("Difference between maximum and minimum:", difference);