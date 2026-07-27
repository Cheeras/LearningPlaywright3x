//Q9 - Check Whether number is Armstrong 
/**
 * "A number is an Armstrong number if the sum of its digits, 
 * each raised to the power of the total number of digits, 
 * equals the original number itself."
*/

let number = 1534;
let originlaNumber = number;
let countofDigits = 0;
while(number !== 0){
    number = Math.floor(number/10);
    countofDigits ++;
}

console.log(`Count of Digits of the ${originlaNumber} is ${countofDigits}`);

let sum = 0;
let temp = originlaNumber;
while(temp>0){
    let digit = temp % 10;
    sum = sum + (digit ** countofDigits);
    temp = Math.floor(temp / 10);
}
if(sum === originlaNumber){
    console.log(`${originlaNumber} is Armstrong number`);
}else {
    console.log(`${originlaNumber} is Not Armstrong number`);
}
