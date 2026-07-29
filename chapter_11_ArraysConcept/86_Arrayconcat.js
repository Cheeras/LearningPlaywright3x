//Array concat 

let a = [1,2];
let b = [3,4];
let c = a.concat(b);

console.log(c);

//spread (modern way) of concatenation using ...(three dots)
//... all elements
let d = [...a,...b];
console.log(d);

//Join 
/** 
 * The join() method is used to combine all elements of an array into a single string. 
 * You can specify a separator (a string) that will be placed between each element in the resulting string
*/
let s = ["pass","fail","skip"].join("|");
console.log(s);