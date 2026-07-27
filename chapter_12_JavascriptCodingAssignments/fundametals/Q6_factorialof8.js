//Question 6 - Find factorial of 8
let num = 8, facto = 1;
while (num > 1) {
    facto = facto * num;
    num--;
}
console.log(`Factorial of  number ${num} is ${facto}`);