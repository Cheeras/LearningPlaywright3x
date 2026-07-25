/** There are two ways to create an array in JavaScript
 * 
 * Method 1: Array Literals(Most common and Recommended)
 * 
 * Syntax:
 * let arrayName = [value1,value2,value3,.....] 
 * 
 * Example:
 * let fruits = ["Apple","Banana","Mango","Orange"];
 * 
 * Method 2: Array Contructor
 * 
 * let arrayName = new Array(value1,value2,value3,............);
 * 
 * let fruits = new Array("Apple","Banana","Mango","Orange");
 * 
 * 

*/
//Array Literal(preferred)

let marks = [67,89,56,99,87]

//Array constructor 

let scores = new Array(3);

scores[0] = "1";

let scores2 = new Array(1,2,3);

console.log(scores2[0]);
console.log(scores2[1]);
console.log(scores2[2]);


let test = Array.of(10,20,30,40,50);
console.log(test[0]);
console.log(test[-1]);
console.log(test[1]);

let chars = Array.from("Hello");

console.log(chars);