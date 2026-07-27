//Question 7 - Reverse of the given number 
let number = 987654;
let originalNumber = number;
let reverseNumber = 0;
while(number!==0){
    let digit  = number % 10;
    reverseNumber = reverseNumber * 10 + digit;
    number = Math.floor(number/10);
}
console.log(`Reverse of the number ${originalNumber} is ${reverseNumber}`);

