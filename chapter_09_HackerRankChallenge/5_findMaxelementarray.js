let nums = [99,49,12,77,33,101,87]
//let nums = [];
//find the maximum element from the array

if (nums.length === 0) {
    console.log("Array is empty");
} else {
let max = nums[0];
   // for (const num of nums) {
        for(let i =1 ;i< nums.length;i++){
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    console.log(`Max element from the array is ${max}`);//101
}

//improved version

