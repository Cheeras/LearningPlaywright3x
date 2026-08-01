//Template literal in javascript

function greet1(name11) {
    return `Hello ${name11}, welcome to the world of JavaScript!`;// Using template literal 
    //to include the name parameter in the greeting message
}

//function with expression
const greet2 = function(name) { 
    return `Hello , ${name}`;
}
// Calling the function with an argument
console.log(greet1("Alice")); // Alice is the argument passed to the function

console.log(greet2("Bob")); // Bob is the argument passed to the function

