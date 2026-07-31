let nums = [99, -49, 12, -77, 22, 33, -101, 87, 20];
//let nums = [0, 0, 0, 0, 0, 0, 0, 0];
let positivenum = [];
let negativenum = [];
let zerocount = [];

if (nums.length === 0) {
    console.log("Array is empty");
} else {
    for (const ele of nums) {
        if (ele > 0) {
            positivenum.push(ele);
        } else if (ele < 0) {
            negativenum.push(ele);
        } else {
            zerocount.push(ele);
        }
    }
    if (positivenum.length > 0) {
        console.log(`Positive numbers are ${positivenum}`);
    } if (negativenum.length > 0) {
        console.log(`Negative numbers are ${negativenum}`);
    } if (zerocount.length > 0) {
        console.log(`Number of zeros are ${zerocount.length}`);
    }
    if (zerocount.length === nums.length) {
        console.log("All elements of the array are zeros");
    }
}