//Arrow function annotation
let greet2 = (name: string): string => {
    return `Hello, ${name}`;
}

let message2: string = greet2("Chirag");
console.log(message2);

//Example 2 - Arrow function with 2 parameters
let multiply = (a: number, b: number): number => a * b;
let result: number = multiply(5, 10);
console.log(`Result: ${result}`);