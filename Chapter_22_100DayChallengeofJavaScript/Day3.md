
🚀 Day 03/100 – One Wrong Data Type Can Break Your Entire Automation Test!

Imagine your application returns the price `"500"` as a string, but your test expects `500` as a number.

They look identical—but JavaScript treats them differently!

Today, as part of my #100DaysOfJavaScript journey, I learned about  **JavaScript Data Types** .

JavaScript data types are broadly divided into two categories:

1️⃣ Primitive Data Types

✅ String

```javascript
let browserName = "Chrome";
```

✅ Number

```javascript
let responseTime = 1200;
```

✅ Boolean

```javascript
let isLoginSuccessful = true;
```

✅ Undefined

```javascript
let errorMessage;
console.log(errorMessage); // undefined
```

✅ Null

```javascript
let sessionToken = null;
```

✅ BigInt

```javascript
let largeNumber = 9007199254740991n;
```

✅ Symbol

```javascript
let uniqueId = Symbol("testId");
```

2️⃣ Non-Primitive Data Types

✅ Object

```javascript
let user = {
    email: "tester@example.com",
    role: "Admin"
};
```

✅ Array

```javascript
let browsers = ["Chrome", "Firefox", "Edge"];
```

✅ Function

```javascript
function launchBrowser() {
    console.log("Browser launched");
}
```

🔍 How can we check a variable’s data type?

JavaScript provides the `typeof` operator.

```javascript
let testStatus = "Passed";
let executionTime = 25;
let isCompleted = true;

console.log(typeof testStatus);    // string
console.log(typeof executionTime); // number
console.log(typeof isCompleted);   // boolean
```

💡 Practical QA Automation Example

Suppose an API returns a user’s age:

```javascript
let actualAge = "30";
let expectedAge = 30;

console.log(actualAge === expectedAge); // false
```

Why does the test fail?

Because:

```javascript
typeof actualAge;   // string
typeof expectedAge; // number
```

Even though both values look like `30`, their data types are different.

We can convert the string into a number:

```javascript
console.log(Number(actualAge) === expectedAge); // true
```

⚠️ Important JavaScript Behaviour

```javascript
console.log(typeof null); // object
console.log(typeof []);   // object
```

To check whether a value is an array, use:

```javascript
console.log(Array.isArray([])); // true
```

🎯 Key Takeaway

Understanding data types is essential in automation testing because UI fields, API responses, environment variables and test data may return values in different formats.

Before comparing values, always verify both the value and its data type.

Tomorrow: Day 04 – JavaScript Operators and Their Use in Automation Testing.

#100DaysOfJavaScript #JavaScript #AutomationTesting #QA #TestAutomation #Playwright #APITesting #SoftwareTesting #QualityEngineering #LearningInPublic
