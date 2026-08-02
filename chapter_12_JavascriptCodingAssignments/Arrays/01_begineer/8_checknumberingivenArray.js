//Checke whether a given number exists in an array
let nums = [99, -49, 12, -77, 22, 33, -101, 87, 20];

let givenNum = 201;
if(nums.length === 0){
    console.log("Array is empty");
} else if(nums.includes(givenNum)){
    console.log(`${givenNum} is present in the array`);
}else {
    console.log(`${givenNum} is not present in the array`);
}