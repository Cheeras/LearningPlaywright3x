//Array Transform

let scores = [45,83,98,56,89];

let grades = scores.map( s => s > 70 ? "Pass" : "Fail");

console.log(grades);

//map actually takes special type of function
//Map is generally used whenever we want to 
//transform the array into a new array of the same size

//Filter

let passing = scores.filter( ss => ss >=70);
console.log(passing);

//reduce will give sum of the elements in array
let totol = scores.reduce((sum,s) => sum+s,0);
console.log(totol);

//map -> it will return same size array but array elements changes 
//filter -> no same size array
//reduce -> single/one element