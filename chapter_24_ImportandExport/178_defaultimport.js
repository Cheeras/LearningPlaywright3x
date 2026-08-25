let num = 5;

let num1 = 40, num2= 20;
//if you want to create default import we will use default keyword
export default function squareIt(){
    let squareOfNumber = num * num;
   console.log(`Square of the given number ${num} is ${squareOfNumber}`);
}

export function Subraction(){
    let diff = num1 - num2;
    console.log(`Difference of ${num1} and ${num2} is ${diff} `);
}
