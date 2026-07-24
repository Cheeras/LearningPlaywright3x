//Level 7 - Interview Level
//Question 31 - Reverse given number
let number = 12345;
let reverseNumber = 0;
while(number!=0){
    //extract the last digit from the number
    let digit = number % 10;

    //append the digit to reverse number
    reverseNumber = reverseNumber * 10 + digit;

    //remove last digit from the original number

    number = Math.trunc(number / 10);
}

console.log(reverseNumber)
