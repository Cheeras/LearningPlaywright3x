//function with arrow
function greet(name) {
    return `Hello, ${name}`;
}

const greet1 = function (name1){
    return `Hello, ${name1}`;
}

const greet2 = (name2) => `Hello, ${name2}`;

const greet3 = name3 => `Hello, ${name3}`;

//Arrow function

//if you want to make a normal function to arrow function.
//Remove the keyword function, remove the keyword retunr, remove the curly braces, and use the =>

console.log(greet("shankar"));
console.log(greet1("Cheerala"));
console.log(greet2("Dharmik Sai"));
console.log(greet3("Jeyadev Sai"));