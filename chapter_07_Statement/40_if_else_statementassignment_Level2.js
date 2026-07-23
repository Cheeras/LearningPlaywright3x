//Level 2 - Intermediate
//Question 6 - Largest of 3 numbers
let firstNumber = 30;
let secondNumber = 30;
let thirdNumber = 30;

if( firstNumber === secondNumber && secondNumber === thirdNumber ){
    console.log("all are equal");
}else if((firstNumber >= secondNumber) && (firstNumber >= thirdNumber)){
    console.log(`${firstNumber} is larger`);
}else if((secondNumber >= firstNumber) && (secondNumber >= thirdNumber)){
    console.log(`${secondNumber} is larger`);
}else {
    console.log(`${thirdNumber} is larger`);
}

//Question 7 - Grade calculator
let marks = 89;

if(marks <=0 || marks >= 100){
    console.log("Invalid marks");
}
else if( marks >= 90){
    console.log("A");
}else if( marks >= 80){
    console.log("B");
}else if( marks >= 70){
    console.log("C");
}else if( marks >= 60){
    console.log("D");
}else if( marks >= 35){
    console.log("E");
}else {
    console.log("F");
}

//Question 8 - Leap year
//Check the give year is leap year or not
let year = 2000;
if(year < 0){
    console.log("Invalid year");
}else if((year % 4 === 0 && year % 100 !== 0 ) ||( year % 400 === 0)){
    console.log("Leap year");
}else {
    console.log("Not a leap year");
}
//Question 9 - Divisible check
//FizzBuzz
let number = 5;
if(number % 3 === 0 && number % 5 === 0){
    console.log("FizzBuzz");
}else if(number % 3 === 0){
    console.log("Fizz");
}else if(number % 5 === 0){
    console.log("Buzz");
}else {
    console.log(number);
}
//Question 10 - Login Validation
let username = "admin";
let password = "123456";

if((username.toLowerCase() === "admin") && (password === "12345")){
    console.log("Login Successful");
}else {
    console.log("Invalid Credentials");
}
