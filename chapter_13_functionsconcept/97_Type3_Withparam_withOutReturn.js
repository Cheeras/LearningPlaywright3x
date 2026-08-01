// Type 3 - Function with parameter and without return value
function greetUser(name) { // name is called parameter
    console.log("Hello " + name + ", welcome to the program!"); // This function does not return any value
}   

// Calling the function with an argument
greetUser("Alice"); // Alice is called argument 
greetUser("Bob");   // Bob is called argument
let message = greetUser("Shankar"); // Shankar     is called argument
console.log(message); // This will log 'undefined' since the function does not return any value