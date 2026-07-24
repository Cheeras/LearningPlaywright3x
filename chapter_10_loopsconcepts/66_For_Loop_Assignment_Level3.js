//Level 3 - Intermediate
//Question 11 - Find the factorial of 5
let num = 5;
let facto = 1;
for (let i = num; i >= 1; i--) {
    facto = facto*i;
}
console.log(facto);

//Question 12 - Reverse counting from 100 to 1, printing only multiples of 5
    
for(let i = 100;i >= 1;i--){
    if(i % 5 === 0){
    console.log(i)
    }
}

//Question 13 - Print numbers divisible by 3 and 5 between 1 to 100
for(let i = 1;i <= 100;i++){
    if((i % 5 === 0) && (i % 3 === 0)){
    console.log(i)
    }
}

//Question 14 - Count how many even numbers exist between 1 and 1000
let countOfEvenNumbers = 0;
for(let i = 1;i <= 1000;i++){
    if(i % 2 === 0){
    countOfEvenNumbers++;
    }
}
console.log(countOfEvenNumbers);

//Question 15 - Count how many odd numbers exist between 1 and 1000
let countOfOddNumbers = 0;
for(let i = 1;i <= 1000;i++){
    if(i % 2 !== 0){
    countOfOddNumbers++;
    }
}
console.log(countOfOddNumbers);