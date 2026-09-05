let unknownValue: unknown = "Hello";
if( typeof unknownValue === "string") {
    let message: string = unknownValue;
    console.log(`Message: ${message}`);
}

let messageone: string = "Welcome to TypeScript";
let countone: number = 32;
console.log(`Message: ${messageone}, Count: ${countone}`);