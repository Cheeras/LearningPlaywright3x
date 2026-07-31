//Sum of all elements of the array
let nums = [99,49,12,77,33,101,87];
let sum = 0;
if( nums.length === 0 ){
    console.log("Array is empty");
}else {
    for(const num of nums){
        sum += num;
    }
    console.log("Sum of all elements of the array is "+sum);
}