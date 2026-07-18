var v = 10;
var browser = "Chrome";
//reassignment is allowed in case of var 
//what is the issue with var?
//var is function scoped, which means it can be accessed outside of the block it was defined in,
//leading to potential bugs and unexpected behavior. It can also be redeclared within the same scope, 
//which can cause confusion and errors in larger codebases.

let l = 20;
//let is a modern way of creating the variable in javascript
//let is block-scoped(lives only inside {}),can be reassigned, but can not be redeclared in the same scope
//It is hoisted but not initialized, so accessing it before declaring throws a Referrence Error


//const --> for the values should not change
//Operators
//let x = 10;
//let is keyword
//x is identifier or variable name
//10 is called literal or variable value
//= is operator

//Operator and functions

//Assignment operators
//= -- the task is to assign right hand side value to left hand side
//to assign the right hand side value to the left hand side
//let x =10;
//x =30;

let x = 20;
x = "shankarcheerala";
console.log(x);

let y = 10;
y += 5; //y = y+ 5;
//y += 2; //y = y+2
//y -= 1; //y = y-1
console.log(y);
