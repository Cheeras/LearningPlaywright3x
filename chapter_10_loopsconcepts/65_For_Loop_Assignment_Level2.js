//Level 2 - Begineer puls
//Question 6 - Calculate sum of number from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);


//Question 7 - Calculate sum of even number from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum +=i;
    }
}
console.log(sum);

//Question 8 - Calculate sum of odd number from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log(sum);

//Question 9 - Print square of numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
        console.log(`${i*i}`);
}

//Question 9 - Print cubes of the number 1 to 10

for (let i = 1; i <= 10; i++) {
        console.log(`${i*i*i}`);
}
