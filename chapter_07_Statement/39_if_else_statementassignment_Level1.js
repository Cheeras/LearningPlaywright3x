//Leve 1 - Basic - Easy
//Quation 1 - Number is positive or negative or zero
let num = 0;
if(num > 0){
    console.log("Positive")
}else if( num === 0 ){
    console.log("Zero")
}else {
    console.log("Negative");
}

//Question 2 - Even or odd
//if a number is divisible by 2 then it is even number else it is odd number
let i = 11;
if( i % 2 === 0 ){
    console.log("Even");
}else {
    console.log("Odd");
}

//Question 3 - Eligible to Vote
//if age is 18 or above 
let age = 17;
if(age < 0){
    console.log("Invalid age")
}
else if ( age >= 18 ){
    console.log("Eligible to vote");
}else {
    console.log("Not Eligible")
}

//Question 4 - Pass or Fail
//input marks
let marks = 33;
//check the boundary conditions
if(marks < 0 || marks > 100){
    console.log("Invalid marks");
}
else if(marks >= 35 ){
    console.log("Pass");
}else {
    console.log("Fail");
}

//Question 5 - Largest of Two Numbers
//Input 2 numbers 
let firstNumber = 10
let secondNumber=20;

if(firstNumber > secondNumber){
    console.log(`${firstNumber} is greater than ${secondNumber}`);
}else if(firstNumber === secondNumber ){
    console.log("Both are equal")
}else {
    console.log(`${secondNumber} is greather than ${firstNumber}`);
}
