
Day 5 of Learning JavaScript: How Conditional Statements Help Programs Make Decisions



What if your automation script could open a browser and enter credentials—but could not decide whether the login passed or failed?

It would perform actions, but it would not know how to respond to different outcomes.

This is where conditional statements become important.

Welcome to Day 5 of my 100-Day JavaScript Learning Challenge! 🚀

Today, I explored conditional statements—the decision-making system of JavaScript.

As a QA Automation Engineer learning JavaScript before moving deeper into Playwright, understanding conditional statements is essential. We use them to validate application behaviour, handle different test outcomes, check element states and control the execution flow of automation scripts.

What is a conditional statement?
A conditional statement allows a program to make a decision based on whether a given condition is true or false.

We make similar decisions in everyday life:

If it is raining, take an umbrella.

If the password is correct, allow the user to log in.

If the account is locked, display an error message.

If the test result matches the expected result, mark the test as passed.

In JavaScript, these decisions can be implemented using:

if

if...else

else if

Nested if

Ternary operator

switch

1. The if statement
   The if statement executes a block of code only when its condition evaluates to true.

Syntax
if (condition) {
    // Code executes when the condition is true
}

Example
let age = 25;

if (age >= 18) {
    console.log("You are eligible to vote");
}

How does it work?
JavaScript evaluates the condition:

age >= 18

Because 25 >= 18 is true, JavaScript executes the code inside the block.

Output:

You are eligible to vote

If the age were 16, the condition would be false, and nothing inside the if block would execute.

2. The if...else statement
   The if...else statement is used when we have two possible outcomes.

If the condition is true, execute the if block.

Otherwise, execute the else block.

Example
let age = 16;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

Output:

Not eligible to vote

Only one of these blocks will execute.

Real-world QA example
let actualTitle = "Dashboard";
let expectedTitle = "Dashboard";

if (actualTitle === expectedTitle) {
    console.log("Test Passed");
} else {
    console.log("Test Failed");
}

Because both values are the same, the output will be:

Test Passed

This is one of the simplest ways to understand how validation works in test automation.

3. The else if statement
   Sometimes, we need to check more than two possibilities.

In such situations, we can use an else if chain.

Example
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Failed");
}

Output:

Grade B

How does JavaScript evaluate it?
JavaScript checks the conditions from top to bottom:

Is 82 >= 90? No.

Is 82 >= 75? Yes.

Print "Grade B".

Skip all the remaining conditions.

Once JavaScript finds the first true condition, it stops checking the rest of the chain.

Therefore, the order of conditions matters.

Incorrect order
if (marks >= 50) {
    console.log("Grade C");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 90) {
    console.log("Grade A");
}

If marks is 95, the first condition is already true. Therefore, the program incorrectly prints "Grade C".

The correct approach is to arrange the conditions from the highest range to the lowest range.

4. Combining multiple conditions
   JavaScript provides logical operators to combine or reverse conditions.

Logical AND: amp;amp;
The AND operator returns true only when both conditions are true.

let username = "admin";
let password = "admin123";

if (username === "admin" && password === "admin123") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

For the login to succeed:

The username must be correct.

The password must also be correct.

If either condition is false, the login fails.

Logical OR: ||
The OR operator returns true when at least one condition is true.

let userRole = "manager";

if (userRole === "admin" || userRole === "manager") {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

Because the user is a manager, access is granted even though the user is not an administrator.

Logical NOT: !
The NOT operator reverses a Boolean value.

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in");
}

Here:

!false

becomes:

true

Therefore, the message is displayed.

5. Building a better login validation
   Consider the following information:

let username = "admin";
let password = "admin123";
let accountLocked = false;

We need to validate three conditions:

The username must be correct.

The password must be correct.

The account must not be locked.

if (accountLocked) {
    console.log("Login failed: Account is locked");
} else if (username !== "admin") {
    console.log("Login failed: Invalid username");
} else if (password !== "admin123") {
    console.log("Login failed: Invalid password");
} else {
    console.log("Login successful");
}

Output:

Login successful

This example is more useful than printing only "Invalid credentials" because it provides a specific result for each failure.

However, in a real production application, we may intentionally display a common message such as "Invalid username or password" to avoid revealing sensitive account information.

That is an important security consideration for testers.

6. Nested if statements
   A nested if is an if statement placed inside another if statement.

let age = 25;
let hasDrivingLicense = true;

if (age >= 18) {
    if (hasDrivingLicense) {
        console.log("You can drive");
    } else {
        console.log("You need a driving license");
    }
} else {
    console.log("You are underage");
}

The program first checks the person’s age.

Only when the person is at least 18 does it check whether the person has a driving licence.

We can also simplify this logic:

if (age >= 18 && hasDrivingLicense) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}

Nested conditions can be useful, but too many levels of nesting can make code difficult to read and maintain.

7. The ternary operator
   The ternary operator is a shorter way of writing a simple if...else statement.

Syntax
condition ? valueIfTrue : valueIfFalse;

Example using if...else
let age = 20;
let message;

if (age >= 18) {
    message = "Eligible to vote";
} else {
    message = "Not eligible to vote";
}

console.log(message);

The same example using the ternary operator
let age = 20;

let message = age >= 18
    ? "Eligible to vote"
    : "Not eligible to vote";

console.log(message);

Output:

Eligible to vote

The ternary operator is suitable for short and simple decisions.

For complicated logic involving multiple conditions, if...else is usually easier to read.

8. The switch statement
   A switch statement is useful when one value needs to be compared with several fixed options.

Example
let browser = "chrome";

switch (browser) {
    case "chrome":
        console.log("Running tests in Chrome");
        break;

    case "firefox":
        console.log("Running tests in Firefox");
        break;

    case "edge":
        console.log("Running tests in Edge");
        break;

    default:
        console.log("Unsupported browser");
}

Output:

Running tests in Chrome

Why do we use break?
The break statement stops the execution of the switch after a matching case is completed.

Without break, JavaScript continues executing the cases below the matched case. This behaviour is known as fall-through.

What is default?
The default block executes when none of the cases match.

It works similarly to the final else block in an if...else chain.

QA automation use case
A test framework may receive the browser name from a configuration file or environment variable:

let browserName = "firefox";

switch (browserName) {
    case "chrome":
        console.log("Launch Chromium");
        break;

    case "firefox":
        console.log("Launch Firefox");
        break;

    case "edge":
        console.log("Launch Microsoft Edge");
        break;

    default:
        console.log("Please provide a supported browser");
}

9. Difference between == and ===
   This is an important JavaScript concept.

Loose equality: ==
console.log(5 == "5");

Output:

true

The number 5 and the string "5" have different data types. However, the == operator converts the values before comparing them.

Strict equality: ===
console.log(5 === "5");

Output:

false

The === operator compares both:

Value

Data type

Because one value is a number and the other is a string, the result is false.

Using === is generally safer and recommended because it prevents unexpected type conversion.

Similarly:

console.log(5 != "5");   // false
console.log(5 !== "5");  // true

10. Truthy and falsy values
    An if condition does not always need an explicit comparison. JavaScript automatically treats certain values as true or false.

Common falsy values include:

false
0
""
null
undefined
NaN

Example:

let username = "";

if (username) {
    console.log("Username is available");
} else {
    console.log("Username is empty");
}

Because an empty string is a falsy value, the program prints:

Username is empty

Most other values are considered truthy, including non-empty strings and non-zero numbers.

let username = "Shankar";

if (username) {
    console.log("Username is available");
}

11. Handling edge cases
    A good developer or tester should not validate only the expected input. We must also think about invalid and unexpected inputs.

Consider an even-or-odd program:

let number = 17;

if (typeof number !== "number" || Number.isNaN(number)) {
    console.log("Please enter a valid number");
} else if (!Number.isInteger(number)) {
    console.log("Please enter a whole number");
} else if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

This program handles:

Non-number values

NaN

Decimal numbers

Even numbers

Odd numbers

Zero

Negative integers

Negative numbers do not require a separate condition for checking even or odd.

-4 % 2 === 0  // true
-5 % 2 === 0  // false

Therefore, -4 is even and -5 is odd.

12. How conditional statements are used in QA automation
    Conditional statements are used in automation to:

✅ Validate whether actual and expected results match ✅ Check whether an element is visible ✅ Handle optional pop-ups ✅ Validate error and success messages ✅ Execute tests in different browsers ✅ Apply different logic for different environments ✅ Check user roles and permissions ✅ Control test flow based on application behaviour

Playwright-style example
const errorMessage = page.locator(".error-message");

if (await errorMessage.isVisible()) {
    console.log("Login failed: Error message is displayed");
} else {
    console.log("No login error message is displayed");
}

Another example:

const successMessage = page.locator(".success-message");

if (await successMessage.isVisible()) {
    console.log("Test Passed");
} else {
    console.log("Test Failed");
}

In actual Playwright tests, assertions such as expect() are usually preferred for validations because they generate clearer test failures.

await expect(successMessage).toBeVisible();

However, understanding conditional statements is still essential for controlling the surrounding test logic.

Common mistakes to avoid

1. Using assignment instead of comparison
   Incorrect:

if (status = "success") {
    console.log("Test Passed");
}

The single = assigns a value.

Correct:

if (status === "success") {
    console.log("Test Passed");
}

2. Writing conditions in the wrong order
   Always arrange ranges logically, usually from highest to lowest.
3. Forgetting break in a switch
   This can cause unintended fall-through.
4. Overusing nested if statements
   Too much nesting makes code difficult to understand.
5. Ignoring invalid inputs
   Always consider empty values, incorrect data types, null, undefined, decimals and other edge cases.

Practice problems for Day 5
Check whether a number is positive, negative or zero.

Check whether a number is even or odd.

Find the largest among three numbers.

Check whether a person is eligible to vote.

Assign a grade based on marks.

Check whether a year is a leap year.

Validate a username and password.

Check whether a number is divisible by both 3 and 5.

Display the day of the week using switch.

Select a browser using switch.

My key takeaway from Day 5
Conditional statements are the decision-making foundation of JavaScript.

They allow a program to analyse a situation and select the appropriate action. Without conditional statements, applications and automation scripts would execute the same instructions regardless of what happened.

For a QA Automation Engineer, learning this concept is especially valuable because testing is fundamentally based on decisions:

Did the actual result match the expected result?

Was the element displayed?

Was the login successful?

Did the correct error message appear?

Should the test continue or stop?

Every one of these questions involves a condition.

Day 5 completed! ✅

My next step is to practise these concepts by solving JavaScript problems and applying them to realistic QA automation scenarios.

What is one conditional-statement mistake that you encountered when learning JavaScript?

#100DaysOfCode #JavaScript #Day5 #JavaScriptLearning #ConditionalStatements #QAAutomation #SoftwareTesting #Playwright #TestAutomation #LearningInPublic
