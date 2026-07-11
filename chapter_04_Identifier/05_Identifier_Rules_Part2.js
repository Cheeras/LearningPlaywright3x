var name = "shankar";

var firstName = "shankar";

var This_is_a_Very_long_variable_name = "shankar"; //not recommended
//but it is valid identifier name in JavaScript. It is a valid identifier.
console.log(This_is_a_Very_long_variable_name);

var lastName = "Cheerala";//camel case - first letter of the first word is in lower case
// and first letter of the second word is in upper case. It is a valid identifier name in JavaScript.
//generally used for variable names in JavaScript. It is a valid identifier name in JavaScript.

//Name Conventions (Cases)
var camelCase = "camelCase";

//PascalCase
var PascalCase = "PascalCase"; //pascal case - 
//first letter of the first word is in upper case and first letter of the second word is in upper case. 
//It is a valid identifier name in JavaScript.
//generally used for class names in JavaScript. It is a valid identifier name in JavaScript.

//snake_case
var snake_case = "snake_case"; //snake case - first letter of the first word is in lower case and 
//first letter of the second word is in lower case. It is a valid identifier name in JavaScript.
//generally used for file names and database column names. It is a valid identifier name in JavaScript.


//Screaming_Snake_Case
var SCREAMING_SNAKE_CASE = "SCREAMING_SNAKE_CASE"; //used for constants
//screaming snake case - first letter of the first word is in upper case and 
// first letter of the second word is in upper case. It is a valid identifier name in JavaScript.
// generally used for constants in JavaScript. It is a valid identifier name in JavaScript.

//kebab-case
var kebab_case = "kebab-case"; //kebab case - first letter of the first word is in lower case and
// first letter of the second word is in lower case. It is a valid identifier name in JavaScript.
// generally used for file names and database column names. It is a valid identifier name in JavaScript.

//Hungarian Notation
var strName = "shankar"; //Hungarian notation - first letter of the first word is in lower case and
// first letter of the second word is in upper case. It is a valid identifier name in JavaScript.
// generally used for variable names in JavaScript. It is a valid identifier name in JavaScript.
var intAge = 30;
var blnIsActive = true;



//what is difference between var, let and const
//var name = "shankar"; //function scoped, can be redeclared and updated
//let name = "shankar"; //block scoped, can be updated but not redeclared
//const name = "shankar"; //block scoped, cannot be updated or redeclared   


//What is the difference between var, let and const in JavaScript?
//var is function scoped, can be redeclared and updated
//let is block scoped, can be updated but not redeclared
//const is block scoped, cannot be updated or redeclared   

//example of var in JavaScript
var name = "shankar";
console.log(name);
//example of var in function scope in JavaScript
function varExample() {
    var name = "function scope";
    console.log(name);
}

//example of let in JavaScript
let lname = "Cheerala";
console.log(lname);
//example of let in block scope in JavaScript
if (true) {
    let name = "block scope";
    console.log(name);
}