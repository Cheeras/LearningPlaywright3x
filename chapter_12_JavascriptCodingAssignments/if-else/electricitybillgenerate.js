//Q 15 - Electricity bill generate based on billed units

let numberOfUnits = 305;
let current_Bill = 0;

if (numberOfUnits < 0) {
    console.log("Number of Units can not be negative or Invalid number of Units");
} else if (numberOfUnits <= 100) {
    current_Bill = numberOfUnits * 2;
} else if (numberOfUnits <= 200) {
    current_Bill = (100 * 2) + (numberOfUnits - 100) * 3;
}else if (numberOfUnits <= 300) {
    current_Bill = (100 * 2) + (100 * 3) + (numberOfUnits - 200)*5;
}else {
    current_Bill = (100 * 2) + (100 * 3) + (100 * 5) + (numberOfUnits - 300)*8;
}

console.log(`Current Bill is ${current_Bill} for the number of units ${numberOfUnits}`);
