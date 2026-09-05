//Primitive datatypes in TypeScript
let name2:string = "Chirag";
let age:number = 25;
let isStudent:boolean = true;

let pi:number = 3.14;
let distance_to_moon:number = 384400345634351;

let isActive:boolean = false;
let nothing:null = null;
let notDefined:undefined = undefined;

//Arrays
let numbers:number[] = [1,2,3,4,5];
let names:string[] = ["Chirag","John","Doe"];

//Any (avoid when possible)
let anthing:any = "Hello";

//unknows (safter than any)
let unknown: unknown = "World";

let message: string = "Welcome to TypeScript";
let count: number = 32;

console.log(`Message: ${message}, Count: ${count}`);
console.log(`Name: ${name2}, Age: ${age}, Is Student: ${isStudent}`);
console.log(`Pi: ${pi}, Distance to Moon: ${distance_to_moon}`);
console.log(`Is Active: ${isActive}, Nothing: ${nothing}, Not Defined: ${notDefined}`);
console.log(`Anything: ${anthing}, Unknown: ${unknown}`);