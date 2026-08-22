
# 🚀 Day 04/100 – A Single = Instead of === Can Completely Change Your Test Result!



While writing JavaScript automation tests, operators help us calculate values, compare actual and expected results, combine validation conditions and make decisions.

Today, as part of my #100DaysOfJavaScript journey, I learned about JavaScript Operators.

1️⃣ Arithmetic Operators

Used to perform mathematical calculations.

let passedTests = 80;

let failedTests = 20;

let totalTests = passedTests + failedTests;

let passPercentage = (passedTests / totalTests) * 100;

console.log(totalTests); // 100

console.log(passPercentage); // 80

Common arithmetic operators:

+ Addition

- Subtraction

* Multiplication

/ Division

% Remainder

** Exponentiation

++ Increment

-- Decrement

The remainder operator is useful for checking even and odd numbers:

let testCaseId = 10;

if (testCaseId % 2 === 0) {

console.log("Even test case ID");

}

2️⃣ Assignment Operators

Used to assign or update values.

let executedTests = 10;

executedTests += 5;

console.log(executedTests); // 15

executedTests -= 2;

console.log(executedTests); // 13

Common assignment operators:

= += -= *= /= %=

3️⃣ Comparison Operators

Used to compare two values. The result is always true or false.

let actualStatus = 200;

let expectedStatus = 200;

console.log(actualStatus === expectedStatus); // true

console.log(actualStatus !== expectedStatus); // false

console.log(actualStatus > 199); // true

Common comparison operators:

== === != !== > < >= <=

⚠️ Difference Between == and ===

The loose equality operator == compares values after type conversion.

console.log("200" == 200); // true

The strict equality operator === compares both value and data type.

console.log("200" === 200); // false

For reliable automation tests, === is generally safer because it avoids unexpected type conversion.

4️⃣ Logical Operators

Logical operators help combine multiple conditions.

&& — AND

|| — OR

! — NOT

QA example:

let statusCode = 200;

let responseTime = 800;

if (statusCode === 200 && responseTime < 1000) {

console.log("API test passed");

}

Both conditions must be true because we used &&.

Login validation example:

let email = "tester@example.com";

let password = "Test@123";

if (email !== "" && password !== "") {

console.log("Credentials are available");

}

Browser validation using OR:

let browser = "Chrome";

if (browser === "Chrome" || browser === "Firefox") {

console.log("Supported browser");

}

5️⃣ Ternary Operator

The ternary operator is a shorter way of writing a simple if...else condition.

Syntax:

condition ? valueIfTrue : valueIfFalse;

Example:

let testPassed = true;

let result = testPassed ? "PASSED" : "FAILED";

console.log(result); // PASSED

6️⃣ Practical Automation Example

let actualTitle = "Dashboard";

let expectedTitle = "Dashboard";

let pageLoadTime = 1500;

let titleMatched = actualTitle === expectedTitle;

let performanceAccepted = pageLoadTime <= 2000;

if (titleMatched && performanceAccepted) {

console.log("Dashboard test passed");

} else {

console.log("Dashboard test failed");

}

In this example:

✅ === compares the page titles

✅ <= validates the page-load time

✅ && ensures both validations pass

🎯 Key Takeaway

Operators are the building blocks of test validations.

They help automation testers:

✅ Compare actual and expected results

✅ Validate API status codes

✅ Calculate execution statistics

✅ Combine multiple test conditions

✅ Control the test execution flow

A small operator mistake can produce a completely incorrect test result, so understanding operators is essential before moving into conditional statements.

Tomorrow: Day 05 – JavaScript Conditional Statements with Real-Time QA Examples

#100DaysOfJavaScript #JavaScript #AutomationTesting #QA #TestAutomation #Playwright #APITesting #SoftwareTesting #QualityEngineering #LearningInPublic
