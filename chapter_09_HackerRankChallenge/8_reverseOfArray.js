let nums = [99,49,12,77,33,101,87]

let rev = []

//nums.reverse();

//console.log(nums)
//with out using the reverse function

// for(let i = nums.length-1 ; i>=0;i--){
//     rev.push(nums[i]);
// }
// console.log(rev);

//i don't want to create separate duplicate how you can do this
let left = 0;
let right = nums.length - 1;

while(left < right){
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left ++;
    right --;
}

console.log(nums);