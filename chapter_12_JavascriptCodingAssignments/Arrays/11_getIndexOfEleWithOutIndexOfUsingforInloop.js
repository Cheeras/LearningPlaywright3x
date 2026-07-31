//find the index of the given number in the array
let nums = [99, -49, 12, -77, 22, 33, -101, 87, 20];
let giveNum = 201;
let indexOfGivenNumber = -1;
if (nums.length === 0) {
    console.log("Array is empty");
} else {
    for( const index in nums){
        if(nums[index] === giveNum){
            indexOfGivenNumber = index;
            break;
        }
    }
    if (indexOfGivenNumber === -1) {
        console.log(`${giveNum} is not present in the array`);
    } else {
    console.log(`Index of the Given number ${giveNum} is ${indexOfGivenNumber}`);
    }
}