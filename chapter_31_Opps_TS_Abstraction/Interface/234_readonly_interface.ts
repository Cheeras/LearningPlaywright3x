//Readonly in the interface
// The readonly modifier in TypeScript is used to mark properties of an interface or class as immutable. 
// When a property is marked as readonly, it can only be assigned a value during initialization or 
// in the constructor of a class. 
// Once assigned, the value cannot be changed. This is useful for creating objects that should not be 
// modified after creation, 
// ensuring data integrity and preventing accidental changes.

interface point {
    readonly x: number;
    readonly y: number;
}

const point1: point = {
    x: 10,
    y: 20
}

//point1.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.

console.log(point1.x); // Output: 30
console.log(point1.y); // Output: 20