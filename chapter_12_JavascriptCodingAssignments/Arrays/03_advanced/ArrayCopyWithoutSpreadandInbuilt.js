//Copy an array without using spread operator or built-in copy methods

let nums = [77,23,97,63,44,9,101];
let copyNums = [];

for (const index in nums){
    copyNums.push(nums[index]);
}

console.log(copyNums);

//copy an array using spread operator

let nums2 = [77,23,97,63,44,9,101];
let copyNums2 = [...nums2];

console.log(copyNums2);
//copy using slice method

let nums3 = [77,23,97,63,44,9,101];
let copyNums3 = nums3.slice();  
console.log(copyNums3);
//copy using Array.from method

let nums4 = [77,23,97,63,44,9,101];
let copyNums4 = Array.from(nums4);
console.log(copyNums4);

//copy using concat method

let nums5 = [77,23,97,63,44,9,101];
let copyNums5 = [].concat(nums5);
console.log(copyNums5);

//copy using map method

let nums6 = [77,23,97,63,44,9,101];
let copyNums6 = nums6.map(num => num);
console.log(copyNums6); 

//copy using forEach method

let nums7 = [77,23,97,63,44,9,101];
let copyNums7 = [];
nums7.forEach(num => copyNums7.push(num));
console.log(copyNums7);

//copy using for loop

let nums8 = [77,23,97,63,44,9,101];
let copyNums8 = [];
for (let i = 0; i < nums8.length; i++) {
    copyNums8.push(nums8[i]);
}

console.log(copyNums8);