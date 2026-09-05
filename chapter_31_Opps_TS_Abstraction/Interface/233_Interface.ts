// Abstract
// An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed.
// It can contain both abstract methods (methods without implementation) and concrete methods
// (methods with implementation). Abstract classes are useful for defining a common interface for 
// a group of related classes while allowing for shared functionality.

// Interface
// An interface in TypeScript is a way to define a contract for the shape of an object. 
// It can specify properties, methods, and their types, but it does not provide any implementation.
//  Interfaces are used to enforce that certain classes adhere to a specific structure, allowing for
//  better type checking and code organization.   

//Enum
// An enum (short for "enumeration") is a way to define a set of named constants in TypeScript. 
// Enums can be numeric or string-based, and they provide a way to give more meaningful names to 
// sets of related values. Enums are useful for representing a fixed set of options, such as days 
// of the week, status codes, or user roles.

interface user {
    name: string;
    age: number;
    email: string;
}

const user1: user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
}

const user2: user = {
    name: "Shankar Cheerala",
    age: 36,
    email: "shankar.cheerala@example.com"
}

const user3: user = {
    name: "Chirag Gandhi",
    age: 50,
    email: "chirag.gandhi@example.com"
}

