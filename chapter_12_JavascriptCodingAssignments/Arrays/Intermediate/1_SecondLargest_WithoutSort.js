//Second largest number in an array without using sort function
let nums = [99, -49, 12, -77, 22, 33, -101, 87, 20];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
        secondLargest = largest;
        largest = nums[i];
    } else if (nums[i] > secondLargest && nums[i] !== largest) {
        secondLargest = nums[i];
    }
}

console.log("Second largest number:", secondLargest);