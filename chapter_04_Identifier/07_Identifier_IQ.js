//JavaScript Identifier Rules - Interview Questions

let validName = " starts with letter";

let _name = " starts with underscore";

let $name = " starts with dollar sign";

let name123 = " starts with letter and followed by numbers";

let _name123 = " starts with underscore and followed by numbers";

let $name123 = " starts with dollar sign and followed by numbers";          

let name_123 = " starts with letter and followed by underscore and numbers";    

let a1_a2 = " starts with letter and followed by numbers and underscore and numbers";

//let 1stPlace = "invalid"; //not valid identifier name in JavaScript. 
// It is invalid identifier name because it starts with a number. It is invalid identifier name in JavaScript.
//let 2ndPlace = "invalid"; //not valid identifier name in JavaScript. 
// It is invalid identifier name because it starts with a number. It is invalid identifier name in JavaScript.

//keywords are reserved words in JavaScript and cannot be used as identifier names.

// let class = "invalid"; //not valid identifier name in JavaScript.
// let const = "invalid"; //not valid identifier name in JavaScript.
// let function = "invalid"; //not valid identifier name in JavaScript.
let Function = "valied"; //is it valid identifier name  in JavaScript.- yes 
// It is valid identifier name because it starts with a letter and followed by letters. 
// It is valid identifier name in JavaScript.

let €€€ = "invalid"; //not valid identifier name in JavaScript.
// It is invalid identifier name because it starts with a special character. 
// It is invalid identifier name in JavaScript.

// Important Note: Only allowed special characters are underscore (_) and dollar sign ($) 
// in JavaScript identifier names.
// only allowed special characters are underscore (_) and dollar sign ($) in JavaScript identifier names.

let cafe = "valid"; //is it valid identifier name  in JavaScript.- yes
// It is valid identifier name because it starts with a letter and followed by letters. 
// It is valid identifier name in JavaScript.

let 姓名 = "chinese characters"; //is it valid identifier name  in JavaScript.- yes
// It is valid identifier name because it starts with a letter and followed by letters.
// It is valid identifier name in JavaScript.

//let \u0020 = "Unicode characters"; //is it valid identifier name  in JavaScript.- yes
//console.log(\u0020); // It is valid identifier name because it starts with a letter and followed by letters.

// let my-name = "invalid"; //not valid identifier name in JavaScript.
// let my name = "invalid"; //not valid identifier name in JavaScript.
// let my@name = "invalid"; //not valid identifier name in JavaScript.
// let my#name = "invalid"; //not valid identifier name in JavaScript.
// let my$name = "valid"; //is it valid identifier name  in JavaScript.- yes
// let my!name = "invalid"; //not valid identifier name in JavaScript.


//1.camel case - standard naming convention in JavaScript. 
// it is used for variable names and function names

let userName = "shankar"; //camel case - first letter of the first word is in lower case
let totolPrice = "89.98";
let isActive = true;
let isLoggedIn = false;

function getUserInfo() {
    return "function camelCase";
}

//2.Pascal case - standard naming convention in JavaScript.
// it is used for class names and constructor function names    

let UserProfile = "PascalCase";
let ShoppingCart = "class name style";
function Product() {
    return "constructor";
}

//3.snake case - standard naming convention in JavaScript.
// it is used for file names and database column names
let user_profile = "snake_case";
let shopping_cart = "snake_case";
let totol_price = 99.99;
let is_active = true;
let is_logged_in = false;

//4.Screaming_Snake_Case - standard naming convention in JavaScript.
const MAX_VALUE = 100; //screaming snake case - first letter of the first word is in upper case and 
// first letter of the second word is in upper case. It is a valid identifier name in JavaScript.
// generally used for constants in JavaScript. It is a valid identifier name in JavaScript.

const API_KEY = "1234567890"; //screaming snake case - first letter of the first word is in upper case and 
// first letter of the second word is in upper case. It is a valid identifier name in JavaScript.
// generally used for constants in JavaScript. It is a valid identifier name in JavaScript.

const DB_CONNECTION_STRING = "mongodb://localhost:27017/mydb"; //screaming snake case - first letter of the first word is in upper case and 
// first letter of the second word is in upper case. It is a valid identifier name in JavaScript.
// generally used for constants in JavaScript. It is a valid identifier name in JavaScript.

