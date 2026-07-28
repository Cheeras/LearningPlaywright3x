let fruits = ["banana","apple","cheery"];
fruits.sort();

console.log(fruits);//sorting based on first alphabate

let score = [4,3,2];
console.log(score.sort());

let nums = [10,1,21,2];
nums.sort();
console.log(nums);//1,2,10,21

//actual output is [1,10,2,21] ahh why is this?
/**
 * //Natural sorting
 * Because sort() method dafault uses natural sorting - Lexicographic /String sort
 * 
*/

// Proper sorting Asc, Desc

nums.sort((a,b) => a-b);

console.log(nums);//Asccending order


nums.sort((a,b) => b-a);

console.log(nums);//Descending order


//reverse of the array
nums.reverse();

console.log(nums);
