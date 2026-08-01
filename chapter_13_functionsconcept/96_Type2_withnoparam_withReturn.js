// Type 2- Function with no parameter and with return value
function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toDateString(); // Returns the current date as a string
}

// Calling the function and storing the return value in a variable
const today = getCurrentDate();
console.log("Today's date is: " + today);

//Example 2
// Type 2- Function with no parameter and with return value
function getRandomNumber() {
    return Math.floor(Math.random() * 100); // Returns a random number between 0 and 99
}

// Calling the function and storing the return value in a variable
const randomNum = getRandomNumber();
console.log("Random number generated: " + randomNum);

//Example 3
// Type 2- Function with no parameter and with return value
function getGreetingMessage() {
    return "Hello! Welcome to the program."; // Returns a greeting message
}

// Calling the function and storing the return value in a variable
const greeting = getGreetingMessage();
console.log(greeting);

//Example 4
// Type 2- Function with no parameter and with return value
function getPiValue() {
    return 3.14159; // Returns the value of Pi
}

// Calling the function and storing the return value in a variable
const piValue = getPiValue();
console.log("The value of Pi is: " + piValue);

//Example 5
// Type 2- Function with no parameter and with return value
function isUserActive(){
    return true; // Returns a boolean value indicating if the user is active
}

// Calling the function and storing the return value in a variable
const userActiveStatus = isUserActive();
console.log("Is the user active? " + userActiveStatus);

//Example 6 
// Type 2- Function with no parameter and with return value
function getWelcomeMessage() {
    return "Welcome to Shankar Cheerala Youtube channel"; // Returns a welcome message
}

// Calling the function and storing the return value in a variable
const welcomeMessage = getWelcomeMessage();
console.log(welcomeMessage);

