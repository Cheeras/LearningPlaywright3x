//find second and second last element from the array
let nums = [99, -49, 12, -77, 22, 33, -101, 87, 20];

if(nums.length === 0){
    console.log("Array is empty");
}else if(nums.length === 1){
    console.log("The array does not have second and second last element");
} else {
    console.log(nums[1]);
    console.log(nums[nums.length-2]);
}