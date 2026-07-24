//Level 6 - Logic Building

const { cloneElement } = require("react");

//Question 26 - Find all multiples of 7 between 1 and 500
let number = 7;
for (let i = 1; i <= 500; i++) {
    if (i % number === 0) {
        console.log(i)
    }
}

//Question 27 - Print numbers divisible by 3 but not by 5
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
        console.log(i)
    }
}

//Question 28 - Find the first 20 mutiples of 9
for (let i = 1; i <= 20; i++) {
    console.log(9 * i);
}

//Question 29 - Calculate sum of squares of first 20 numbers
let sumOfSquares = 0;
for (let i = 1; i <= 20; i++) {
    sumOfSquares = sumOfSquares + (i * i);
}

console.log(sumOfSquares);

//Question 30 - Calculate sum of cubes of first 20 numbers
let sumOfCubes = 0;
for (let i = 1; i <= 20; i++) {
    sumOfCubes = sumOfCubes + (i * i * i);
}

console.log(sumOfCubes);
