let nums = [99, 49, 12, 77, 22,33, 101, 87, 20];
let evennoCount = 0;
let oddnoCount = 0;

if (nums.length === 0) {
    console.log("Array is empty");
} else {
    for (const ele of nums) {
        if (ele % 2 === 0) {
            evennoCount++;
        } else {
            oddnoCount++;
        }
    }
    console.log(`Even number count is ${evennoCount}`);
    console.log(`Odd number count is ${oddnoCount}`);
}