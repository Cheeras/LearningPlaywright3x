let url = "https://app.vwo.com";
let status = 'Pass';
let message = `Test completed in ${320} ms`;

//single quotes
let a = 'Hello';

//Double Quotes
let b = "World";

//Template literals (bankticks) -- allows expressions & multiline
let name = "Alice";
let msg = `Hello, ${name}! 2 + 2 = ${2+2}`;
console.log(msg);

//mutliline
let report = `
Test: Login
Status: Pass
Duration: 320ms`;

console.log(String(200));
console.log(String(true));//"true"
String(null);//"null"
String([1,2]);//"[1,2]"