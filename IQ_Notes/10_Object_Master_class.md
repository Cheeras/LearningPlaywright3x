# 🧱 JavaScript Objects — Master Class

---

## Table of Contents

1. [What is an Object?](#1-what-is-an-object)
2. [Basic Syntax — Creating Objects](#2-basic-syntax--creating-objects)
3. [Accessing Object Properties](#3-accessing-object-properties)
4. [Adding / Updating / Deleting Properties](#4-adding--updating--deleting-properties)
5. [Object with Different Data Types](#5-object-with-different-data-types)
6. [Nested Objects](#6-nested-objects)
7. [Object with Arrays](#7-object-with-arrays)
8. [Array of Objects](#8-array-of-objects)
9. [Object with Functions (Methods)](#9-object-with-functions-methods)
10. [Calling Methods & Accessing Nested Parameters](#10-calling-methods--accessing-nested-parameters)
11. [The `this` Keyword in Objects](#11-the-this-keyword-in-objects)
12. [Arrow Functions vs Regular Functions in Objects](#12-arrow-functions-vs-regular-functions-in-objects)
13. [`const` and Object Mutation](#13-const-and-object-mutation)
14. [Object.freeze, Object.seal](#14-objectfreeze-objectseal)
15. [Useful Object Methods](#15-useful-object-methods)
16. [Object Destructuring](#16-object-destructuring)
17. [Spread Operator with Objects](#17-spread-operator-with-objects)
18. [Object Reference vs Value](#18-object-reference-vs-value)
19. [Shallow Copy vs Deep Copy](#19-shallow-copy-vs-deep-copy)
20. [Interview Questions](#20-interview-questions)

---

## 1. What is an Object?

An **object** in JavaScript is a **collection of key-value pairs** (also called properties). It is used to store structured data.

- Keys are **strings** (or Symbols).
- Values can be **any data type**: string, number, boolean, null, undefined, array, another object, or a function.

> Think of an object as a **real-world entity** with **properties** (nouns) and **methods** (verbs).

---

## 2. Basic Syntax — Creating Objects

### 2.1 Object Literal `{}` (Most Common)

```javascript
const person = {
    name: "Rakesh",
    age: 65,
    email: "rakesh@gmail.com"
};
```

### 2.2 Using `new Object()`

```javascript
const person = new Object();
person.name = "Rakesh";
person.age = 65;
```

### 2.3 Using Constructor Function

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const p1 = new Person("Rakesh", 65);
```

### 2.4 Using ES6 Class

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person("Rakesh", 65);
```

### 2.5 Empty Object then Add Properties

```javascript
const user = {};
user.name = "Rakesh";
user.age = 65;
```

---

## 3. Accessing Object Properties

### 3.1 Dot Operator `.`

```javascript
const user = { name: "Rakesh", age: 65 };
console.log(user.name); // "Rakesh"
console.log(user.age);  // 65
```

✅ Use when the **key is a valid identifier** (no spaces, no hyphens, doesn't start with a number).

### 3.2 Square Bracket Notation `[]`

```javascript
console.log(user["name"]); // "Rakesh"
console.log(user["age"]);  // 65
```

✅ Use when:
- Key has **spaces or special characters**: `user["first name"]`
- Key is **dynamic** (stored in a variable):

```javascript
const key = "email";
user[key] = "rakesh@gmail.com"; // dynamic access
```

### 3.3 Difference Between Dot and Bracket

```javascript
const obj = {
    "full name": "Rakesh Kumar",  // key with space
    age: 65
};

console.log(obj["full name"]); // ✅ "Rakesh Kumar"
// console.log(obj.full name); // ❌ Syntax Error

const dynamicKey = "age";
console.log(obj[dynamicKey]); // ✅ 65 (dynamic)
// console.log(obj.dynamicKey); // ❌ looks for key "dynamicKey", not "age"
```

---

## 4. Adding / Updating / Deleting Properties

```javascript
const user = { name: "Rakesh" };

// ADD a new property
user.age = 65;
user["email"] = "rakesh@gmail.com";

// UPDATE an existing property
user.age = 66;

// DELETE a property
delete user.email;

console.log(user); // { name: "Rakesh", age: 66 }
```

---

## 5. Object with Different Data Types

```javascript
const user = {
    // String
    name: "Rakesh",

    // Number
    age: 65,

    // Boolean
    isMarried: true,

    // Null
    middleName: null,

    // Undefined
    profilePicture: undefined,

    // Symbol
    id: Symbol("uniqueId"),

    // BigInt
    bankBalance: 1000000000000n
};
```

---

## 6. Nested Objects

An object can contain another object as a property value.

```javascript
const user = {
    name: "Rakesh",
    address: {                          // 👈 nested object
        street: "12th Main Road",
        city: "Bangalore",
        state: "Karnataka",
        pincode: 560001,
        coordinates: {                  // 👈 deeply nested
            lat: 12.9716,
            lng: 77.5946
        }
    }
};
```

### Accessing Nested Properties

```javascript
console.log(user.address.city);              // "Bangalore"
console.log(user["address"]["city"]);        // "Bangalore"
console.log(user.address.coordinates.lat);   // 12.9716
console.log(user["address"]["coordinates"]["lng"]); // 77.5946
```

### Using Optional Chaining `?.` (Safe Access)

```javascript
console.log(user?.address?.city);           // "Bangalore"
console.log(user?.contact?.phone);          // undefined (no error!)
```

---

## 7. Object with Arrays

```javascript
const user = {
    name: "Rakesh",
    hobbies: ["Cricket", "Chess", "Trekking"],  // 👈 array of strings
    scores: [85, 92, 78, 88]                    // 👈 array of numbers
};
```

### Accessing Array Elements Inside an Object

```javascript
console.log(user.hobbies[0]);      // "Cricket"
console.log(user.hobbies[1]);      // "Chess"
console.log(user["hobbies"][2]);   // "Trekking"
console.log(user.scores.length);   // 4
```

### Adding to an Array Inside an Object

```javascript
user.hobbies.push("Photography");
console.log(user.hobbies); // ["Cricket", "Chess", "Trekking", "Photography"]
```

---

## 8. Array of Objects

One of the most common patterns — an array where each element is an object.

```javascript
const skills = [
    { name: "JavaScript", level: "Expert" },       // 👈 object at index 0
    { name: "Playwright", level: "Advanced" },     // 👈 object at index 1
    { name: "Node.js", level: "Intermediate" },    // 👈 object at index 2
    { name: "Python", level: "Beginner" }          // 👈 object at index 3
];
```

### Accessing Objects Inside an Array

```javascript
console.log(skills[0]);                 // { name: "JavaScript", level: "Expert" }
console.log(skills[0].name);            // "JavaScript"
console.log(skills[0]["level"]);        // "Expert"
console.log(skills[1].name);            // "Playwright"
```

### Looping Through Array of Objects

```javascript
// forEach
skills.forEach(skill => {
    console.log(`${skill.name} - ${skill.level}`);
});

// map
const skillNames = skills.map(s => s.name);
console.log(skillNames); // ["JavaScript", "Playwright", "Node.js", "Python"]

// filter
const advanced = skills.filter(s => s.level === "Advanced");
console.log(advanced); // [{ name: "Playwright", level: "Advanced" }]
```

---

## 9. Object with Functions (Methods)

Functions inside objects are called **methods**.

### 9.1 Regular Function as Method

```javascript
const user = {
    name: "Rakesh",
    age: 65,
    // Method using function expression
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};
```

### 9.2 ES6 Shorthand Method Syntax

```javascript
const user = {
    name: "Rakesh",
    greet() {                    // 👈 shorthand — no `function` keyword
        return "Hello, I'm " + this.name;
    }
};
```

### 9.3 Arrow Function as Method

```javascript
const user = {
    name: "Rakesh",
    greet: () => {
        return "Hello!";
    }
};
```

> ⚠️ Arrow functions do **NOT** have their own `this`. They inherit `this` from the surrounding scope (which may not be the object). Prefer regular functions for object methods that need `this`.

### 9.4 Method with Parameters

```javascript
const user = {
    name: "Rakesh",
    introduce: function(city, age) {
        return `I'm ${this.name}, ${age} years old, from ${city}.`;
    }
};

console.log(user.introduce("Bangalore", 65));
// "I'm Rakesh, 65 years old, from Bangalore."
```

### 9.5 Nested Object with Methods

```javascript
const user = {
    name: "Rakesh",
    contact: {
        email: "rakesh@gmail.com",
        phone: "+91-9876543210",
        sendEmail: function(subject) {
            return `Sending email to ${this.email} with subject: "${subject}"`;
        }
    }
};

console.log(user.contact.sendEmail("Hello!"));
// "Sending email to rakesh@gmail.com with subject: "Hello!""
```

---

## 10. Calling Methods & Accessing Nested Parameters

### Full Complex Example

```javascript
const user = {
    // --- Properties ---
    name: "Rakesh",
    age: 65,
    address: {
        city: "Bangalore",
        state: "Karnataka",
        coordinates: { lat: 12.97, lng: 77.59 }
    },
    hobbies: ["Cricket", "Chess", "Trekking"],
    skills: [
        { name: "JavaScript", level: "Expert" },
        { name: "Playwright", level: "Advanced" }
    ],

    // --- Methods ---
    getSummary: function() {
        return `${this.name}, ${this.age} yrs, lives in ${this.address.city}`;
    },

    addSkill: function(skillName, skillLevel) {
        this.skills.push({ name: skillName, level: skillLevel });
    },

    contact: {
        email: "rakesh@gmail.com",
        sendEmail: function(subject) {
            return `Email to ${this.email}: "${subject}"`;
        }
    }
};

// --- Calling ---
console.log(user.name);                          // "Rakesh"
console.log(user.address.city);                  // "Bangalore"
console.log(user.address.coordinates.lat);       // 12.97
console.log(user.hobbies[0]);                    // "Cricket"
console.log(user.skills[0].name);                // "JavaScript"
console.log(user.skills[0].level);               // "Expert"

// Calling methods
console.log(user.getSummary());                  // "Rakesh, 65 yrs, lives in Bangalore"
user.addSkill("Python", "Beginner");
console.log(user.skills.length);                 // 3

// Nested method
console.log(user.contact.sendEmail("Hi!"));      // "Email to rakesh@gmail.com: "Hi!""
```

---

## 11. The `this` Keyword in Objects

- Inside a **regular function** method, `this` refers to the **object** that owns the method.
- Inside an **arrow function**, `this` refers to the **outer (lexical) scope**, NOT the object.

```javascript
const user = {
    name: "Rakesh",
    regularMethod: function() {
        return this.name;  // ✅ "Rakesh" — `this` is the user object
    },
    arrowMethod: () => {
        return this.name;  // ❌ undefined — `this` is the outer scope (window/global)
    }
};

console.log(user.regularMethod()); // "Rakesh"
console.log(user.arrowMethod());   // undefined (in browser) or "" (in Node)
```

---

## 12. Arrow Functions vs Regular Functions in Objects

| Feature | Regular Function | Arrow Function |
|---|---|---|
| `this` binding | Own `this` (the object) | Inherits `this` from outer scope |
| Use as method? | ✅ Yes | ⚠️ Avoid if using `this` |
| Access to `arguments` | ✅ Yes | ❌ No |
| Can be constructor | ✅ Yes | ❌ No |

---

## 13. `const` and Object Mutation

```javascript
const user = { name: "Rakesh", age: 65 };

// ✅ ALLOWED — mutating properties
user.age = 66;
user.city = "Bangalore";
delete user.name;

// ❌ NOT ALLOWED — reassigning the variable
// user = { name: "New" }; // TypeError: Assignment to constant variable
```

> `const` prevents **reassignment of the variable**, not **mutation of the object**.

---

## 14. Object.freeze, Object.seal

### Object.freeze — Makes object completely immutable (shallow)

```javascript
const user = Object.freeze({ name: "Rakesh", age: 65 });

user.age = 66;          // ❌ Silently fails (or throws in strict mode)
user.city = "BLR";      // ❌ Cannot add
delete user.name;       // ❌ Cannot delete

console.log(user.age);  // 65 (unchanged)
```

### Object.seal — Prevents add/delete, but allows value changes

```javascript
const user = Object.seal({ name: "Rakesh", age: 65 });

user.age = 66;          // ✅ Allowed
user.city = "BLR";      // ❌ Cannot add
delete user.name;       // ❌ Cannot delete

console.log(user.age);  // 66
```

| Operation | `const` | `Object.freeze` | `Object.seal` |
|---|---|---|---|
| Reassign variable | ❌ | ✅ | ✅ |
| Change property value | ✅ | ❌ | ✅ |
| Add new property | ✅ | ❌ | ❌ |
| Delete property | ✅ | ❌ | ❌ |

---

## 15. Useful Object Methods

```javascript
const user = { name: "Rakesh", age: 65, city: "Bangalore" };

// Get all keys as an array
console.log(Object.keys(user));     // ["name", "age", "city"]

// Get all values as an array
console.log(Object.values(user));   // ["Rakesh", 65, "Bangalore"]

// Get all entries as [key, value] pairs
console.log(Object.entries(user));
// [["name", "Rakesh"], ["age", 65], ["city", "Bangalore"]]

// Check if a property exists
console.log(user.hasOwnProperty("name"));  // true
console.log("name" in user);               // true

// Merge objects
const extra = { email: "rakesh@gmail.com", age: 66 };
const merged = Object.assign({}, user, extra);
// OR using spread:
const merged2 = { ...user, ...extra };
```

---

## 16. Object Destructuring

Extract properties into individual variables.

```javascript
const user = { name: "Rakesh", age: 65, city: "Bangalore" };

// Basic destructuring
const { name, age } = user;
console.log(name); // "Rakesh"
console.log(age);  // 65

// Destructuring with alias
const { name: fullName, city: location } = user;
console.log(fullName); // "Rakesh"
console.log(location); // "Bangalore"

// Destructuring with default value
const { email = "no-email@test.com" } = user;
console.log(email); // "no-email@test.com"

// Nested destructuring
const user2 = {
    name: "Rakesh",
    address: { city: "Bangalore", pincode: 560001 }
};
const { address: { city, pincode } } = user2;
console.log(city);    // "Bangalore"
console.log(pincode); // 560001

// Destructuring in function parameters
function printUser({ name, age }) {
    console.log(`${name} is ${age} years old`);
}
printUser(user); // "Rakesh is 65 years old"
```

---

## 17. Spread Operator with Objects

```javascript
const user = { name: "Rakesh", age: 65 };

// Copy an object
const copy = { ...user };
console.log(copy); // { name: "Rakesh", age: 65 }

// Merge objects
const details = { city: "Bangalore", age: 66 };
const merged = { ...user, ...details };
console.log(merged); // { name: "Rakesh", age: 66, city: "Bangalore" }

// Add new properties while copying
const extended = { ...user, email: "rakesh@gmail.com" };
console.log(extended); // { name: "Rakesh", age: 65, email: "rakesh@gmail.com" }
```

---

## 18. Object Reference vs Value

**Primitives** (string, number, boolean) are assigned/copied **by value**.
**Objects** (including arrays) are assigned/copied **by reference**.

```javascript
// Primitives — copied by value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

// Objects — copied by reference
let obj1 = { status: "pass" };
let obj2 = obj1;        // both point to SAME object
obj2.status = "fail";
console.log(obj1.status); // "fail" (changed!)

// Comparison — objects are compared by reference
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d); // false (different references)

let e = c;
console.log(c === e); // true (same reference)
```

---

## 19. Shallow Copy vs Deep Copy

### Shallow Copy — Only top-level properties are copied

```javascript
const user = {
    name: "Rakesh",
    address: { city: "Bangalore", pincode: 560001 }
};

// Shallow copy methods
const copy1 = { ...user };
const copy2 = Object.assign({}, user);

// Top-level is independent
copy1.name = "Sunita";
console.log(user.name); // "Rakesh" ✅ independent

// But nested objects are still shared (by reference)
copy1.address.city = "Mysore";
console.log(user.address.city); // "Mysore" ❌ changed!
```

### Deep Copy — Everything is copied recursively

```javascript
const user = {
    name: "Rakesh",
    address: { city: "Bangalore", pincode: 560001 }
};

// Method 1: JSON.parse + JSON.stringify (works for JSON-safe data)
const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.address.city = "Mysore";
console.log(user.address.city); // "Bangalore" ✅ independent

// Method 2: structuredClone (modern browsers/Node 17+)
const deepCopy2 = structuredClone(user);

// Method 3: Lodash (_.cloneDeep)
// const deepCopy3 = _.cloneDeep(user);
```

---

## 20. Interview Questions

### Q1: What is the difference between dot and bracket notation?

**A:** Dot notation requires a valid identifier key. Bracket notation accepts any string and supports dynamic keys.

### Q2: Why can we modify a `const` object?

**A:** `const` prevents reassignment of the variable binding, not mutation of the object's properties.

### Q3: How do you make an object truly immutable?

**A:** Use `Object.freeze()` for shallow immutability. For deep immutability, recursively freeze or use a deep freeze utility.

### Q4: What is the difference between `Object.freeze` and `Object.seal`?

**A:** `freeze` prevents all changes (add, delete, update). `seal` prevents add/delete but allows value updates.

### Q5: How do you check if a property exists in an object?

**A:** `"key" in obj` or `obj.hasOwnProperty("key")`.

### Q6: What is the difference between `==` and `===` for objects?

**A:** Both compare by **reference**, not by structure. Two different objects with identical content are `!=` and `!==`.

### Q7: How do you copy an object?

**A:** Shallow: `{ ...obj }` or `Object.assign({}, obj)`. Deep: `JSON.parse(JSON.stringify(obj))` or `structuredClone(obj)`.

### Q8: What is optional chaining?

**A:** `obj?.prop?.nested` — safely accesses nested properties without throwing an error if an intermediate property is `null` or `undefined`.

### Q9: Can an object have functions? How do you call them?

**A:** Yes, they are called methods. Call them with `obj.methodName()` or `obj["methodName"]()`.

### Q10: What is the difference between a regular function and an arrow function as a method?

**A:** Regular functions have their own `this` (the object). Arrow functions inherit `this` from the outer scope and cannot access the object's properties via `this`.

---

> **💡 Pro Tip:** Practice by creating objects with all the patterns above — nested objects, arrays of objects, methods, and nested methods. Try accessing every property and calling every method using both dot and bracket notation!