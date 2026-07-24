//Level 1 - Begineer (Warm-up)
//Question 1 - Print number from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Question 2 - Print numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Question 3 - Print all even numbers between 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//Question 4 - Print all odd numbers between 1 to 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//Question 5 - Print multiplication table of 7

let number = 7;
for (let i = 1; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`);
}