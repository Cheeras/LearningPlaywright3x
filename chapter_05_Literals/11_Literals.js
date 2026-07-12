let count = 99;
let negativeCount = -99;
let zeroCount = 0;

let h = 0xFF; // hexadecimal literal
let o = 0o77; // octal literal
console.log("Hexadecimal Literal:", typeof h); // Output: Hexadecimal Literal: number
console.log("Octal Literal:", typeof o); // Output: Octal Literal: number
console.log("Count:", typeof count); // Output: Count: number
console.log("Negative Count:", typeof negativeCount); // Output: Negative Count: number 


let octal = 0o77; // octal literal
let binary = 0b101010; // binary literal
let million = 1e6; // exponential literal

console.log("Octal Literal:", typeof octal);

console.log("Binary Literal:", typeof binary);

console.log("Exponential Literal:", typeof million);