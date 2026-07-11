//Topic: null vs undefined in JavaScript
/**
 * Simple definition of the null and undefined in JavaScript:
 * 
 *  null --> A varible exists, but the developer has explicitly set it to have no value or empty
 *  it is intentionally set to have no value. It is an assignment value.
 * 
 * 
 *  undefined --> A variable exists, but it has not been assigned a value yet.
 *  It is the default value of a variable that has been declared but not initialized.
 * 
 * 
 ***/

var x;
console.log(x); // Output: undefined

var y = null;
console.log(y); // Output: null

// 1. undefined is a type itself, while null is an object.
let userName;
console.log(typeof userName); // Output: undefined

let userAge = null;
console.log(typeof userAge); // Output: object

let a = 100;
console.log(typeof a);// number

let numbers = [76,23, 45, 89];
console.log(typeof numbers); // Output: object

let person = { name: "John", age: 30 };
console.log(typeof person); // Output: object

let stringArray = ["apple", "banana", "cherry"];
console.log(typeof stringArray); // Output: object


//2.null is an assignment value, while undefined is a type itself.
let myVariable = null;
console.log(myVariable); // Output: null
console.log(typeof myVariable); // Output: object

//Key difference between null and undefined in JavaScript is that 
// null is an assignment value that represents the intentional absence of any object value, 
// while undefined is a type itself that represents a variable that has been declared but has not 
// yet been assigned a value.  



