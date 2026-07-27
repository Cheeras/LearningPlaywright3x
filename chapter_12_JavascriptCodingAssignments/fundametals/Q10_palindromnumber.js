//Q10 - Palindrom number
//"A number that remains the same when its digits are reversed."
//example is 121 or 151 or 141 or 222 or 333 

//first reverse the given number

let number = 151;
let originalNumber = number;
let reverseNumber = 0;
while(number !== 0){
    let digit = number % 10;
    reverseNumber = reverseNumber * 10 + digit;
    number  = Math.floor(number/10);
}

if(reverseNumber === originalNumber){
    console.log(`${reverseNumber} is palindrome`);
}else {
    console.log(`${reverseNumber} is not palindrome`);
}