//Array checking 
//check if something is there in array

let result = Array.isArray([1,2,3]);

let result1 = Array.isArray("a");

console.log(result);
console.log(result1);

//map, filter, reduce

//every - ALL must pass
console.log([80,90,85].every(s => s >=70));//true
console.log([80,60,85].every(s => s >=70));//false

//some - at least one must pass
console.log([80,60,85].some(s => s < 70))//true
console.log([80,90,85].some(s => s < 70))//false

