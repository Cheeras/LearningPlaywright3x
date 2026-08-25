# What Makes One Test Script Run Against 100 Data Sets? The Answer Is JavaScript Arrays

## Day 7 of Learning JavaScript: Arrays with Real-Time Automation Examples

**If an automation test works with only one set of data, it may work—but it will not scale.**

Imagine testing a login page with 50 usernames, multiple passwords and different user roles. Creating separate variables and duplicating the test for each user would make the code lengthy, repetitive and difficult to maintain.

JavaScript arrays solve this problem by allowing us to store and process multiple related values using a single variable.

## Quick Recap: Day 6—JavaScript Loops

* Loops execute the same block of code repeatedly based on a condition.
* We learned `for`, `while`, `do...while` and `for...of` loops.
* The `break` statement terminates a loop, while `continue` skips the current iteration.
* Loops reduce code duplication and are widely used to process test data and repeat automation actions.

Now, let us begin **Day 7: JavaScript Arrays**.

---

## What is an array?

An array is an ordered collection used to store multiple values in a single variable.

Without an array:

```javascript
const browser1 = "Chrome";
const browser2 = "Firefox";
const browser3 = "Edge";
```

With an array:

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];
```

The array version is easier to read, update and process.

Here:

* `browsers` is the array name.
* `"Chrome"`, `"Firefox"` and `"Edge"` are array elements.
* Every element has a numerical position called an index.

---

## JavaScript arrays use zero-based indexing

The first element of an array is available at index `0`, not index `1`.

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];

console.log(browsers[0]); // Chrome
console.log(browsers[1]); // Firefox
console.log(browsers[2]); // Edge
```

The index positions are:

```text
Chrome  → Index 0
Firefox → Index 1
Edge    → Index 2
```

Accessing an index that does not exist returns `undefined`.

```javascript
console.log(browsers[5]); // undefined
```

---

## Creating an array

### Using an array literal

This is the most common and recommended approach:

```javascript
const testingTools = [
    "Selenium",
    "Playwright",
    "Postman",
    "JMeter"
];
```

### Using the `Array` constructor

```javascript
const testingTools = new Array(
    "Selenium",
    "Playwright",
    "Postman"
);
```

We must be careful when passing a single number:

```javascript
const values = new Array(5);

console.log(values);
```

This creates an empty array with five available positions. It does not create an array containing the number `5`.

To store the value `5`, use:

```javascript
const values = [5];
```

---

## Accessing and updating array elements

An element can be accessed using its index:

```javascript
const environments = [
    "Development",
    "Testing",
    "Production"
];

console.log(environments[1]); // Testing
```

We can also update an existing element:

```javascript
environments[1] = "Staging";

console.log(environments);
```

Output:

```text
["Development", "Staging", "Production"]
```

---

## Finding the number of elements

The `length` property returns the total number of elements in an array.

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];

console.log(browsers.length); // 3
```

The last element can be accessed using:

```javascript
const lastBrowser = browsers[browsers.length - 1];

console.log(lastBrowser); // Edge
```

This works because the last index is always one less than the array length.

---

## Adding elements to an array

### `push()`—adds an element at the end

```javascript
const browsers = ["Chrome", "Firefox"];

browsers.push("Edge");

console.log(browsers);
// ["Chrome", "Firefox", "Edge"]
```

### `unshift()`—adds an element at the beginning

```javascript
browsers.unshift("Safari");

console.log(browsers);
// ["Safari", "Chrome", "Firefox", "Edge"]
```

---

## Removing elements from an array

### `pop()`—removes the last element

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];

const removedBrowser = browsers.pop();

console.log(removedBrowser); // Edge
console.log(browsers);       // ["Chrome", "Firefox"]
```

### `shift()`—removes the first element

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];

const removedBrowser = browsers.shift();

console.log(removedBrowser); // Chrome
console.log(browsers);       // ["Firefox", "Edge"]
```

Both methods return the element that was removed.

---

## Checking whether a value exists

The `includes()` method checks whether an array contains a particular value.

```javascript
const supportedBrowsers = [
    "Chrome",
    "Firefox",
    "Edge"
];

console.log(supportedBrowsers.includes("Chrome"));
// true

console.log(supportedBrowsers.includes("Safari"));
// false
```

The comparison is case-sensitive:

```javascript
console.log(supportedBrowsers.includes("chrome"));
// false
```

### Real-time role validation

```javascript
const availableRoles = [
    "Admin",
    "Manager",
    "Tester"
];

const requestedRole = "Tester";

if (availableRoles.includes(requestedRole)) {
    console.log(`${requestedRole} role is available`);
} else {
    console.log(`${requestedRole} role is unavailable`);
}
```

---

## Combining arrays with loops

Loops and arrays are frequently used together.

A loop allows us to process every element stored inside an array.

### Using a traditional `for` loop

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];

for (let index = 0; index < browsers.length; index++) {
    console.log(`Running test on ${browsers[index]}`);
}
```

### Using a `for...of` loop

When we only need the values, `for...of` provides cleaner syntax:

```javascript
for (const browser of browsers) {
    console.log(`Running test on ${browser}`);
}
```

Output:

```text
Running test on Chrome
Running test on Firefox
Running test on Edge
```

---

## Real-Time Example 1: Testing multiple invalid passwords

Consider a login page that must reject different types of invalid passwords.

Instead of writing a separate validation for every password, we can store all the values in an array:

```javascript
const invalidPasswords = [
    "",
    "123",
    "password",
    "abc@"
];

for (const password of invalidPasswords) {
    console.log(`Testing password: "${password}"`);

    if (password.length < 8) {
        console.log("Expected validation: Password is too short");
    } else {
        console.log("Additional validation is required");
    }
}
```

The same validation logic is executed with every password.

This is the basic idea behind **data-driven testing**—executing the same test scenario with multiple sets of data.

---

## Real-Time Example 2: Managing multiple test users

An array can also contain objects. This allows us to store complete test-data sets.

```javascript
const testUsers = [
    {
        username: "admin@test.com",
        password: "Admin@123",
        expectedResult: "Login successful"
    },
    {
        username: "invalid@test.com",
        password: "WrongPassword",
        expectedResult: "Invalid credentials"
    },
    {
        username: "",
        password: "",
        expectedResult: "Username and password are required"
    }
];
```

We can process every test user using a loop:

```javascript
for (const user of testUsers) {
    console.log(`Username: ${user.username}`);
    console.log(`Expected result: ${user.expectedResult}`);
}
```

This approach separates the test data from the test logic, making the automation code cleaner and easier to maintain.

---

## Real-Time Example 3: Data-driven testing with Playwright

The same concept can be applied in a Playwright automation project.

```javascript
import { test, expect } from "@playwright/test";

const testUsers = [
    {
        username: "admin@test.com",
        password: "Admin@123"
    },
    {
        username: "tester@test.com",
        password: "Tester@123"
    }
];

for (const user of testUsers) {
    test(`Verify login for ${user.username}`, async ({ page }) => {
        await page.goto("https://example.com/login");

        await page.fill("#username", user.username);
        await page.fill("#password", user.password);
        await page.click("#login");

        await expect(page).toHaveURL(/dashboard/);
    });
}
```

In this example:

1. The login data is stored in an array.
2. Each array element represents one test user.
3. The loop creates a separate test for every user.
4. The same login steps are reused.
5. Additional users can be added without duplicating the test logic.

This demonstrates how a JavaScript fundamental becomes directly useful when building an automation framework.

---

## Real-Time Example 4: Validating application menu items

Suppose an application should display these navigation options:

```javascript
const expectedMenuItems = [
    "Dashboard",
    "Reports",
    "Users",
    "Settings"
];
```

The application displays the following values:

```javascript
const actualMenuItems = [
    "Dashboard",
    "Reports",
    "Users",
    "Settings"
];
```

We can compare them using a loop:

```javascript
for (
    let index = 0;
    index < expectedMenuItems.length;
    index++
) {
    if (expectedMenuItems[index] === actualMenuItems[index]) {
        console.log(
            `${expectedMenuItems[index]} is displayed correctly`
        );
    } else {
        console.log(`Mismatch found at index ${index}`);
    }
}
```

This type of array validation can be used for:

* Navigation menus
* Dropdown options
* Table headers
* Search results
* Product lists
* Validation messages
* API response values

---

## Can an array declared with `const` be modified?

Yes.

This is a common source of confusion.

```javascript
const tools = ["Selenium", "Postman"];

tools.push("Playwright");
tools[0] = "Cypress";

console.log(tools);
// ["Cypress", "Postman", "Playwright"]
```

The contents of the array can be modified.

However, we cannot assign a completely new array to the same variable:

```javascript
const tools = ["Selenium", "Postman"];

tools = ["Playwright", "JMeter"];
// TypeError
```

`const` prevents reassignment of the variable. It does not make the array contents permanently immutable.

---

## How to check whether a value is an array

JavaScript provides the `Array.isArray()` method:

```javascript
const browsers = ["Chrome", "Firefox"];

console.log(Array.isArray(browsers)); // true
```

Using `typeof` does not correctly identify an array:

```javascript
console.log(typeof browsers); // object
```

Therefore, the recommended approach is:

```javascript
Array.isArray(value);
```

---

## Common mistakes to avoid

### 1. Assuming that indexing starts from one

```javascript
const tools = ["Selenium", "Playwright"];

console.log(tools[1]); // Playwright
```

Index `1` represents the second element.

### 2. Using `<=` when looping through an array

Incorrect:

```javascript
for (let index = 0; index <= tools.length; index++) {
    console.log(tools[index]);
}
```

This produces an additional iteration and prints `undefined`.

Correct:

```javascript
for (let index = 0; index < tools.length; index++) {
    console.log(tools[index]);
}
```

### 3. Confusing array methods

* `push()` adds at the end.
* `pop()` removes from the end.
* `unshift()` adds at the beginning.
* `shift()` removes from the beginning.

### 4. Accessing an unavailable index

```javascript
console.log(tools[10]); // undefined
```

Always consider the array length when working with dynamic data.

---

## Practice exercises

1. Store five programming languages and print each one.
2. Print the first and last elements of an array.
3. Calculate the sum and average of all numbers.
4. Find the largest and smallest numbers.
5. Count the even and odd numbers.
6. Check whether a particular value exists.
7. Reverse an array without using `reverse()`.
8. Remove duplicate values from an array.
9. Move all zeros to the end of an array.
10. Create multiple login test-data sets using an array of objects.

---

## Key takeaways from Day 7

* Arrays store multiple related values in one variable.
* JavaScript array indexing starts from zero.
* The `length` property returns the number of elements.
* `push()` and `pop()` operate at the end of an array.
* `unshift()` and `shift()` operate at the beginning.
* `includes()` checks whether a value exists.
* Arrays can be processed using loops.
* Arrays of objects are useful for managing test data.
* `Array.isArray()` verifies whether a value is an array.
* Arrays are the foundation of data-driven automation testing.

Arrays are more than simple containers. They help us organize test data, process API responses, validate application content and execute the same automation scenario with multiple inputs.

Understanding arrays thoroughly will make advanced methods such as `map()`, `filter()`, `find()` and `reduce()` much easier to learn.

✅ **Day 7 completed: JavaScript Arrays**

How are you using—or planning to use—arrays in your automation framework?

#JavaScript #100DaysOfCode #JavaScriptLearning #TestAutomation #Playwright #Selenium #QualityAssurance #SoftwareTesting #LearningInPublic