//Q8 - count of Digits of number
let number = 987654321;
let count = 0;
while(number !== 0){
    number = Math.floor(number/10);
    console.log(number);
    count ++;
}

console.log(count);