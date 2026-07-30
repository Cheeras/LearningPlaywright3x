let nums = [99,49,12,77,33,101,87]
//find the maximum element from the array

let max = nums[0];

for (const num of nums){
    if(num > max){
        max = num;
    }
}
console.log(`Max element from the array is ${max}`);//101