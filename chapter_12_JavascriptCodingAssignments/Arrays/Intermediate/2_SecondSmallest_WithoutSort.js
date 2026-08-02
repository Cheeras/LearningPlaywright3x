//Second smallest number in an array without using sort function
let nums = [99, -49, 12, -77, 22, 33, -101, 87, 20];
let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
        secondSmallest = smallest;
        smallest = nums[i];
    } else if (nums[i] < secondSmallest && nums[i] !== smallest) {
        secondSmallest = nums[i];
    }
}

console.log("Second smallest number:", secondSmallest);