
# Day 6 of Learning JavaScript: Mastering Loops with Real-Time Examples 🔁

Imagine you have 100 test cases to execute.

Would you write the same code 100 times?

Of course not!

This is where loops become one of the most useful concepts in JavaScript. A loop allows us to execute the same block of code repeatedly until a particular condition is satisfied.

Loops are widely used in:

✅ Processing application data ✅ Validating multiple form fields ✅ Executing data-driven test cases ✅ Searching through API responses ✅ Retrying failed operations ✅ Working with tables and dropdowns ✅ Browser automation using Playwright

Let us understand JavaScript loops with practical examples.

1. Why Do We Need Loops?
   Suppose we need to print five test case numbers.

Without a loop:

console.log("Executing Test Case 1");
console.log("Executing Test Case 2");
console.log("Executing Test Case 3");
console.log("Executing Test Case 4");
console.log("Executing Test Case 5");
This works, but it contains repeated code.

Using a loop:

for (let testCase = 1; testCase <= 5; testCase++) {
    console.log(`Executing Test Case ${testCase}`);
}
Output:

Executing Test Case 1
Executing Test Case 2
Executing Test Case 3
Executing Test Case 4
Executing Test Case 5
The loop makes the program shorter, cleaner and easier to maintain.

Types of Loops in JavaScript
JavaScript provides several types of loops:

for loop
while loop
do...while loop
for...of loop
for...in loop

Each loop is useful in a different situation.

2. The for Loop
   The for loop is useful when we know how many times the code should execute.

Syntax:

for (initialization; condition; increment/decrement) {
    // Code to execute
}
Example:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
How Does It Work?
let i = 1;
The counter starts with the value 1.

i <= 5;
The loop continues as long as this condition is true.

i++;
After every iteration, the value of i increases by 1.

When i becomes 6, the condition becomes false and the loop stops.

Real-Time Example: Executing Multiple Test Cases
let testCases = [
    "Valid Login",
    "Invalid Email",
    "Invalid Password",
    "Empty Credentials",
    "Locked User"
];

for (let i = 0; i < testCases.length; i++) {
    console.log(`Executing: ${testCases[i]}`);
}
Output:

Executing: Valid Login
Executing: Invalid Email
Executing: Invalid Password
Executing: Empty Credentials
Executing: Locked User
Notice that array indexing starts from 0. Therefore, the loop begins with i = 0.

Real-Time Example: Data-Driven Login Testing
Imagine that we have multiple username and password combinations.

let users = [
    {
        username: "admin@example.com",
        password: "Admin@123"
    },
    {
        username: "tester@example.com",
        password: "Tester@123"
    },
    {
        username: "invalid@example.com",
        password: "wrongPassword"
    }
];

for (let i = 0; i < users.length; i++) {
    console.log(`Testing login for: ${users[i].username}`);
    console.log(`Password used: ${users[i].password}`);
}
In automation testing, this technique is called data-driven testing.

The same test steps are executed using different sets of test data.

3. The while Loop
   The while loop is useful when we do not know exactly how many times the code should execute.

It continues until the specified condition becomes false.

Syntax:

while (condition) {
    // Code to execute
}
Example:

let attempt = 1;

while (attempt <= 3) {
    console.log(`Login attempt: ${attempt}`);
    attempt++;
}
Output:

Login attempt: 1
Login attempt: 2
Login attempt: 3
Important Point
We must update the variable used in the condition.

If we forget attempt++, the condition will always remain true and create an infinite loop.

let attempt = 1;

while (attempt <= 3) {
    console.log(attempt);

    // attempt++ is missing
}
This loop will continue running indefinitely.

Real-Time Example: Retrying an API Request
Sometimes an API may temporarily fail because of a network issue.

We can retry the request a limited number of times.

let attempt = 1;
let requestSuccessful = false;

while (attempt <= 3 && !requestSuccessful) {
    console.log(`Sending API request. Attempt: ${attempt}`);

    if (attempt === 2) {
        requestSuccessful = true;
        console.log("API request successful");
    } else {
        console.log("API request failed");
    }

    attempt++;
}
Here, the loop stops when:

The request is successful, or
The maximum number of attempts is reached.

This is a common pattern in API and automation frameworks.

4. The do...while Loop
   A do...while loop executes the code at least once, even when the condition is false.

Syntax:

do {
    // Code to execute
} while (condition);
Example:

let attempt = 1;

do {
    console.log(`Executing attempt: ${attempt}`);
    attempt++;
} while (attempt <= 3);
Difference Between while and do...while
A while loop checks the condition before executing the code.

A do...while loop executes the code first and checks the condition afterward.

Example:

let number = 10;

while (number < 5) {
    console.log("Inside while loop");
}
Nothing is printed because the condition is false from the beginning.

Now consider do...while:

let number = 10;

do {
    console.log("Inside do-while loop");
} while (number < 5);
Output:

Inside do-while loop
Even though the condition is false, the code executes once.

Real-Time Example: Displaying a Menu
An application may need to display a menu at least once before checking whether the user wants to continue.

let continueTesting = false;

do {
    console.log("1. Run Login Test");
    console.log("2. Run Registration Test");
    console.log("3. Exit");
} while (continueTesting);
The menu is displayed at least once.

5. The for...of Loop
   The for...of loop is used to access the values of arrays, strings and other iterable objects.

Example with an array:

let browsers = ["Chrome", "Firefox", "Edge"];

for (let browser of browsers) {
    console.log(`Executing tests on ${browser}`);
}
Output:

Executing tests on Chrome
Executing tests on Firefox
Executing tests on Edge
This is cleaner than using an index when we only need the values.

Real-Time Example: Validating Dropdown Options
let expectedOptions = [
    "India",
    "United States",
    "United Kingdom",
    "Australia"
];

for (let option of expectedOptions) {
    console.log(`Validating dropdown option: ${option}`);
}
In Playwright, the same idea can be used like this:

const options = await page.locator("#country option").allTextContents();

for (const option of options) {
    console.log(`Available country: ${option}`);
}
This allows us to process every option available in a dropdown.

6. The for...in Loop
   The for...in loop is mainly used to access the keys or properties of an object.

Example:

let user = {
    username: "admin@example.com",
    role: "Administrator",
    status: "Active"
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
Output:

username: admin@example.com
role: Administrator
status: Active
Here:

key gives us the property name.
user[key] gives us the property value.

for...of vs for...in
Consider this array:

let browsers = ["Chrome", "Firefox", "Edge"];
Using for...of:

for (let browser of browsers) {
    console.log(browser);
}
Output:

Chrome
Firefox
Edge
It returns the values.

Using for...in:

for (let index in browsers) {
    console.log(index);
}
Output:

0
1
2
It returns the indexes or keys.

Therefore:

✅ Use for...of when you need array values. ✅ Use for...in when you need object keys.

Controlling a Loop
JavaScript provides two important keywords for controlling loop execution:

break
continue

7. The break Statement
   The break statement immediately terminates the loop.

Real-Time Example: Stop After Finding a Failed Test
let testResults = ["Passed", "Passed", "Failed", "Passed"];

for (let result of testResults) {
    console.log(`Test result: ${result}`);

    if (result === "Failed") {
        console.log("Failure detected. Stopping execution.");
        break;
    }
}
Once a failed result is found, the loop stops.

This can be useful when continuing the remaining tests would not provide meaningful results.

8. The continue Statement
   The continue statement skips the current iteration and moves to the next iteration.

Real-Time Example: Skip Disabled Test Cases
let testCases = [
    {
        name: "Login Test",
        status: "Active"
    },
    {
        name: "Payment Test",
        status: "Disabled"
    },
    {
        name: "Logout Test",
        status: "Active"
    }
];

for (let testCase of testCases) {
    if (testCase.status === "Disabled") {
        console.log(`Skipping: ${testCase.name}`);
        continue;
    }

    console.log(`Executing: ${testCase.name}`);
}
Output:

Executing: Login Test
Skipping: Payment Test
Executing: Logout Test
The entire loop does not stop. Only the disabled test case is skipped.

9. Nested Loops
   A loop inside another loop is called a nested loop.

Real-Time Example: Cross-Browser Testing
Suppose we need to execute two test cases on three browsers.

let browsers = ["Chrome", "Firefox", "Edge"];
let tests = ["Login Test", "Checkout Test"];

for (let browser of browsers) {
    for (let test of tests) {
        console.log(`Executing ${test} on ${browser}`);
    }
}
Output:

Executing Login Test on Chrome
Executing Checkout Test on Chrome
Executing Login Test on Firefox
Executing Checkout Test on Firefox
Executing Login Test on Edge
Executing Checkout Test on Edge
The outer loop selects the browser, while the inner loop executes every test on that browser.

Practical Playwright Example
Here is how a loop can help validate multiple links on a webpage:

const links = page.locator("a");
const linkCount = await links.count();

for (let i = 0; i < linkCount; i++) {
    const linkText = await links.nth(i).textContent();
    const linkUrl = await links.nth(i).getAttribute("href");

    console.log(`Link Text: ${linkText}`);
    console.log(`Link URL: ${linkUrl}`);
}
This code:

Locates all the links on the page.
Gets the total number of links.
Visits each link element using its index.
Retrieves its text and URL.
Prints the information.

This is a practical example of using loops in browser automation.

Common Mistakes to Avoid

1. Incorrect loop condition
   for (let i = 0; i <= browsers.length; i++) {
   console.log(browsers[i]);
   }
   Using <= causes one additional iteration and returns undefined.

Correct version:

for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
}
2. Forgetting to update the counter
let i = 1;

while (i <= 5) {
    console.log(i);
}
This creates an infinite loop because i never changes.

3. Using for...in for array values
   for (let browser in browsers) {
   console.log(browser);
   }
   This prints array indexes instead of browser names.

Use for...of when you need array values.

Which Loop Should We Use?
🔹 Use for when the number of iterations is known. 🔹 Use while when execution depends on a condition. 🔹 Use do...while when the code must execute at least once. 🔹 Use for...of to access array or string values. 🔹 Use for...in to access object keys or properties.

My Day 6 Takeaway
Today, I learned that loops are not simply used to print numbers repeatedly.

They are essential for solving real-time problems such as:

✅ Running the same test with multiple datasets ✅ Executing tests across different browsers ✅ Validating dropdown values and webpage links ✅ Processing API response data ✅ Retrying failed operations ✅ Skipping disabled test cases ✅ Reducing duplicate code in automation frameworks

As I continue learning JavaScript before moving deeper into Playwright, understanding loops gives me a strong foundation for writing scalable and maintainable automation scripts.

The goal is not only to learn JavaScript syntax.

The real goal is to understand how JavaScript concepts solve practical automation problems.

Day 6 completed — one more step forward in my JavaScript and Playwright learning journey! 🚀

What loop do you use most frequently in your automation projects?

#JavaScript #100DaysOfCode #LearningInPublic #Playwright #TestAutomation #QualityAssurance #QAAutomation #SoftwareTesting #AutomationTesting #WebDevelopment #JavaScriptLearning #CareerGrowth
