//Level 7 - Interview Level
//Question 32 - Count digit of the number
let number = 12345;
let countOfDigits = 0;
while(number !== 0){

    number = Math.trunc(number / 10);
    countOfDigits++;
}

console.log(countOfDigits)