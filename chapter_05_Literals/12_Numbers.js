//Topic: All Number Types in JavaScript
/**
 * In JavaScript, there is only one number type, which is a double-precision 64-bit binary format
 *  IEEE 754 value.
 * There is no separate int,float, double or long data type in JavaScript.
 */


//1.Integer Literals: Integer literals are whole numbers without 
//any decimal point. They can be positive or negative. For example:

let positiveInteger = 42;
let negativeInteger = -99;

console.log("Positive Integer:", typeof positiveInteger); // Output: Positive Integer: number
console.log("Negative Integer:", typeof negativeInteger); // Output: Negative Integer: number

//Decimal Base 10 - most common
let decimal = 123; // decimal literal
console.log("Decimal Literal:", decimal); // Output: Decimal Literal: number
console.log("Decimal Literal Type:", typeof decimal); // Output: Decimal Literal Type: number

//Binary Base 2 - uses 0 and 1
//starts with 0b or 0B
let binary = 0b101010; // binary literal
let binary2 = 0B1101; // binary literal
console.log("Binary Literal:", binary); // Output: Binary Literal: 42
console.log("Binary Literal Type:", typeof binary); // Output: Binary Literal Type: number
console.log("Binary Literal 2:", binary2); // Output: Binary Literal 2: 13
console.log("Binary Literal 2 Type:", typeof binary2); // Output: Binary Literal 2 Type: number


//Octal Base 8 - uses digits 0-7
//starts with 0o or 0O
let octal = 0o77; // octal literal
console.log("Octal Literal:", octal); // Output: Octal Literal: 63
console.log("Octal Literal Type:", typeof octal); // Output: Octal Literal Type: number
let octal2 = 0O12; // octal literal
console.log("Octal Literal 2:", octal2); // Output: Octal Literal 2: 10

//2. Floating-Point Literals: Floating-point literals are numbers that have a decimal point. They can also be expressed in scientific notation. For example:

let floatNumber = 3.14;
let scientificNotation = 1.23e4; // 1.23 * 10^4

console.log("Floating-Point Literal:", floatNumber); // Output: Floating-Point Literal: 3.14
console.log("Scientific Notation Literal:", scientificNotation); // Output: Scientific 
// Notation Literal: 12300

//3.Exponential Notation: Exponential notation is a way to represent very large or very small numbers using powers of 10. It is often used in scientific and engineering contexts. For example:

let largeNumber = 5e6; 
let smallNumber = 2.5e-3;

console.log("Large Number in Exponential Notation:", largeNumber); // Output: Large Number in Exponential Notation: 5000000
console.log("Small Number in Exponential Notation:", smallNumber); // Output: Small Number in Exponential Notation: 0.0025