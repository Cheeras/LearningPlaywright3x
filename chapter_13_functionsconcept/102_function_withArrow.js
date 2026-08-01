//function with expression and arrow function
const greet3 = (name) => {
    return `Hello , ${name}`;
}




// Calling the function with an argument
console.log(greet3("Charlie")); // Charlie is the argument passed to the function

//function with expression and arrow function with implicit return
const greet4 = (name) => `Hello , ${name}`;
console.log(greet4("David")); // David is the argument passed to the function   

//function with expression and arrow function with implicit return and single parameter
const greet5 = name => `Hello , ${name}`;
console.log(greet5("Eve")); // Eve is the argument passed to the function  

