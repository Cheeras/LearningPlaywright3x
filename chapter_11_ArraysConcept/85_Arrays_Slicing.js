//Slice and Combining

let arr = [1,2,3,4,5,6];

//slice(start,end) - returns new array - shallow copy
//does not mutate the actual array -> (start , end-1) index = 0
// take from start to end

console.log(arr.slice(1,3));//slice will not change the original array it will only create shallow copy

console.log(arr);

console.log(arr.slice(2));

console.log(arr.slice(-2));//right side direction only

console.log(arr.slice(-3));//right side direction only

console.log(arr.slice(0));//start from zero index to entire array


console.log(arr.slice(-5));

console.log(arr.slice(-3,-5));//empty array
console.log(arr.slice(-5,-3));//[2,4]

