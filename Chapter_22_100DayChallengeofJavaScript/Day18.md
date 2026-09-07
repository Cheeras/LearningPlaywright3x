
# 🚀 Day 18/100 – If this Confuses You, call(), apply() and bind() Will Finally Make It Click




Yesterday I learned how the JavaScript this keyword changes depending on how a function is called.

Today I went one level deeper.

What if I want to tell JavaScript explicitly:

> “Run this function, but make this point to THIS object.”

That is exactly where these three methods come into the picture:

```
call()
apply()
bind()
```

At first, all three looked almost identical to me.

But there is one important difference:

```
call()  → Execute now
apply() → Execute now
bind()  → Create a new function and execute later
```

And once I understood that, many JavaScript and automation-framework patterns started making much more sense.

Welcome to**Day 18 of my #100DaysOfJavaScript journey.**

---

## 🔄 Quick Recap – Day 17

Yesterday we explored:

```
this
```

We learned that for regular functions, this largely depends on **how the function is invoked** .

Example:

```
const tester = {
    name: "Shankar",

    introduce() {
        console.log(this.name);
    }
};

tester.introduce();
```

Output:

```
Shankar
```

Here:

```
this === tester
```

But what happens if we take that function out of the object?

```
const introduce = tester.introduce;

introduce();
```

Now the original object context is lost.

So how can we manually control this?

That brings us to:

## 👉 call(), apply() and bind()

---

## First: Why Do We Even Need Them?

Consider a reusable function:

```
function showDetails() {
    console.log(
        `${this.name} works as ${this.role}`
    );
}
```

Notice something interesting.

The function doesn't have:

```
name
role
```

inside it.

Instead, it expects them through:

```
this.name
this.role
```

Now let's create two objects:

```
const tester1 = {
    name: "Shankar",
    role: "QA Automation Engineer"
};

const tester2 = {
    name: "Ravi",
    role: "Developer"
};
```

We want the same function to work with both objects.

This is where call() helps.

---

## 1️⃣ Understanding call()

call() allows us to execute a function immediately while specifying what this should refer to.

Syntax:

```
functionName.call(object);
```

Example:

```
showDetails.call(tester1);
```

Output:

```
Shankar works as QA Automation Engineer
```

Now:

```
showDetails.call(tester2);
```

Output:

```
Ravi works as Developer
```

The function never changed.

Only the value of this changed.

---

## 🧠 Simple Way to Think About call()

Imagine the function says:

> “I can work for anyone. Just tell me whose data I should use.”

Then:

```
showDetails.call(tester1);
```

means:

> “Run showDetails() using tester1 as this.”

And:

```
showDetails.call(tester2);
```

means:

> “Run the same function using tester2 as this.”

---

## 🧪 Real-Time QA Example – Browser Execution

Suppose we have a generic function:

```
function executeTest() {
    console.log(
        `Executing test on ${this.browser}`
    );
}
```

Configurations:

```
const chromeConfig = {
    browser: "Chrome"
};

const firefoxConfig = {
    browser: "Firefox"
};

const edgeConfig = {
    browser: "Edge"
};
```

Now:

```
executeTest.call(chromeConfig);
```

Output:

```
Executing test on Chrome
```

Then:

```
executeTest.call(firefoxConfig);
```

Output:

```
Executing test on Firefox
```

And:

```
executeTest.call(edgeConfig);
```

Output:

```
Executing test on Edge
```

One reusable function.

Three different execution contexts.

---

## call() With Arguments

call() can also pass additional arguments.

Example:

```
function executeTest(testName, environment) {

    console.log(
        `${testName} is running on ${this.browser} in ${environment}`
    );

}
```

Call:

```
executeTest.call(
    chromeConfig,
    "Login Test",
    "QA"
);
```

Output:

```
Login Test is running on Chrome in QA
```

Notice the syntax:

```
function.call(
    thisObject,
    argument1,
    argument2
);
```

The first value controls:

```
this
```

The remaining values go to the function parameters.

---

## 🧪 QA Example – Different Test Environments

```
function runAutomation(testSuite, environment) {

    console.log(
        `${testSuite} executed on ${this.browser} in ${environment}`
    );

}
```

Configuration:

```
const browserConfig = {
    browser: "Chrome"
};
```

Call:

```
runAutomation.call(
    browserConfig,
    "Regression Suite",
    "Staging"
);
```

Output:

```
Regression Suite executed on Chrome in Staging
```

This kind of reusable logic is common when building test runners, utilities, and configuration-driven frameworks.

---

## 2️⃣ Understanding apply()

apply() is almost the same as call().

The biggest difference is:

```
call()  → arguments are passed individually

apply() → arguments are passed as an array
```

Example:

```
function executeTest(testName, environment) {

    console.log(
        `${testName} is running on ${this.browser} in ${environment}`
    );

}
```

Using call():

```
executeTest.call(
    chromeConfig,
    "Login Test",
    "QA"
);
```

Using apply():

```
executeTest.apply(
    chromeConfig,
    [
        "Login Test",
        "QA"
    ]
);
```

Both produce:

```
Login Test is running on Chrome in QA
```

---

## 🧠 Simple Memory Trick

I remember it like this:

```
CALL  → Comma-separated arguments

APPLY → Array of arguments
```

Example:

```
myFunction.call(
    object,
    arg1,
    arg2,
    arg3
);
```

vs:

```
myFunction.apply(
    object,
    [
        arg1,
        arg2,
        arg3
    ]
);
```

---

## 🧪 Real-Time QA Example – Test Data

Suppose test data arrives dynamically as an array.

```
const testData = [
    "Checkout Test",
    "Staging"
];
```

Our function:

```
function runTest(testName, environment) {

    console.log(
        `${testName} running on ${this.browser} in ${environment}`
    );

}
```

Instead of manually extracting values:

```
runTest.call(
    chromeConfig,
    testData[0],
    testData[1]
);
```

we can use:

```
runTest.apply(
    chromeConfig,
    testData
);
```

Output:

```
Checkout Test running on Chrome in Staging
```

That makes apply() useful when arguments are already available as an array.

---

## 🧪 API Automation Example

Suppose we have:

```
function sendRequest(endpoint, method) {

    console.log(
        `${method} ${this.baseUrl}${endpoint}`
    );

}
```

Configuration:

```
const qaApi = {
    baseUrl: "https://qa-api.example.com"
};
```

Test data:

```
const requestData = [
    "/users",
    "GET"
];
```

Now:

```
sendRequest.apply(
    qaApi,
    requestData
);
```

Output:

```
GET https://qa-api.example.com/users
```

The function is reusable while the environment configuration can change.

---

## 3️⃣ Understanding bind()

Now comes the most interesting one.

bind() also controls this.

But unlike call() and apply():

> bind() does NOT execute the function immediately.

Instead, it returns a **new function** .

Example:

```
function showBrowser() {

    console.log(
        `Browser: ${this.browser}`
    );

}
```

Configuration:

```
const chromeConfig = {
    browser: "Chrome"
};
```

Now:

```
const chromeRunner =
    showBrowser.bind(chromeConfig);
```

At this point, nothing is printed.

We only created a new function.

Later:

```
chromeRunner();
```

Output:

```
Browser: Chrome
```

---

## 🧠 bind() in Simple Words

Think of bind() as making a promise:

> “Whenever this function runs in the future, always use this particular object as this.”

Example:

```
const chromeRunner =
    showBrowser.bind(chromeConfig);
```

Now chromeRunner() permanently remembers:

```
this === chromeConfig
```

---

## 🧪 Real-Time QA Example – Delayed Test Execution

Suppose:

```
const testRunner = {

    environment: "QA",

    executeTest() {

        console.log(
            `Executing in ${this.environment}`
        );

    }

};
```

Directly:

```
testRunner.executeTest();
```

works perfectly.

But consider:

```
setTimeout(
    testRunner.executeTest,
    2000
);
```

The method is passed separately.

The original object context can be lost.

A safer approach is:

```
setTimeout(
    testRunner.executeTest.bind(testRunner),
    2000
);
```

Now when the callback eventually runs:

```
this
```

still refers to:

```
testRunner
```

and the output is:

```
Executing in QA
```

---

## 🔥 Why bind() Is Important in Real Applications

Functions are frequently passed around as callbacks.

For example:

```
setTimeout()
```

```
event handlers
```

```
framework callbacks
```

```
custom utility functions
```

```
Promise handlers
```

When methods are detached from their objects, they can lose the original this.

bind() is one way to preserve it.

---

## 🧪 Automation Framework Example

Imagine:

```
class TestRunner {

    constructor(environment) {

        this.environment = environment;

    }

    run() {

        console.log(
            `Executing test in ${this.environment}`
        );

    }

}
```

Create:

```
const runner =
    new TestRunner("Staging");
```

Direct execution:

```
runner.run();
```

Output:

```
Executing test in Staging
```

Now imagine another utility expects a callback:

```
function executeLater(callback) {

    setTimeout(callback, 1000);

}
```

Passing:

```
executeLater(runner.run);
```

can lose the instance context.

Instead:

```
executeLater(
    runner.run.bind(runner)
);
```

Now the method remains connected to its original instance.

---

## ⚡ call() vs apply() vs bind()

Here is the easiest comparison:

Featurecall()apply()bind()Controls this✅✅✅Executes immediately✅✅❌Returns new function❌❌✅ArgumentsIndividualArrayIndividualBest forImmediate callArray-based argsFuture execution

---

## 🎯 One Example Explaining All Three

Let's create:

```
const browser = {
    name: "Chrome"
};
```

Function:

```
function runTest(testName, environment) {

    console.log(
        `${testName} → ${this.name} → ${environment}`
    );

}
```

---

### Using call()

```
runTest.call(
    browser,
    "Login Test",
    "QA"
);
```

Output:

```
Login Test → Chrome → QA
```

Executes immediately.

---

### Using apply()

```
runTest.apply(
    browser,
    [
        "Login Test",
        "QA"
    ]
);
```

Output:

```
Login Test → Chrome → QA
```

Also executes immediately.

But arguments are passed as an array.

---

### Using bind()

```
const runChromeTest =
    runTest.bind(
        browser,
        "Login Test",
        "QA"
    );
```

Nothing happens yet.

Later:

```
runChromeTest();
```

Output:

```
Login Test → Chrome → QA
```

---

## 🚀 Practical QA Scenario – Cross-Browser Test Execution

Imagine an automation framework supports:

```
Chrome
Firefox
Edge
```

Configuration:

```
const chrome = {
    browser: "Chrome"
};

const firefox = {
    browser: "Firefox"
};

const edge = {
    browser: "Edge"
};
```

Generic function:

```
function runSuite(suiteName) {

    console.log(
        `Executing ${suiteName} on ${this.browser}`
    );

}
```

Now:

```
runSuite.call(
    chrome,
    "Regression Suite"
);
```

```
runSuite.call(
    firefox,
    "Regression Suite"
);
```

```
runSuite.call(
    edge,
    "Regression Suite"
);
```

Output:

```
Executing Regression Suite on Chrome

Executing Regression Suite on Firefox

Executing Regression Suite on Edge
```

One reusable function.

Different contexts.

---

## 🧪 Practical QA Scenario – Environment-Specific API Tests

Suppose we maintain:

```
const qaEnvironment = {

    baseUrl: "https://qa.example.com"

};

const stagingEnvironment = {

    baseUrl: "https://staging.example.com"

};

const productionEnvironment = {

    baseUrl: "https://example.com"

};
```

Generic function:

```
function testEndpoint(endpoint) {

    console.log(
        `Testing: ${this.baseUrl}${endpoint}`
    );

}
```

QA:

```
testEndpoint.call(
    qaEnvironment,
    "/users"
);
```

Output:

```
Testing: https://qa.example.com/users
```

Staging:

```
testEndpoint.call(
    stagingEnvironment,
    "/users"
);
```

Output:

```
Testing: https://staging.example.com/users
```

Production:

```
testEndpoint.call(
    productionEnvironment,
    "/users"
);
```

Output:

```
Testing: https://example.com/users
```

The business logic remains the same.

Only the execution context changes.

---

## 🔥 Function Borrowing

Another interesting use of call() is something called:

> **Function Borrowing**

Imagine:

```
const tester1 = {

    name: "Shankar",

    role: "QA Automation Engineer",

    introduce() {

        console.log(
            `${this.name} - ${this.role}`
        );

    }

};
```

Another object:

```
const tester2 = {

    name: "Ravi",

    role: "Performance Tester"

};
```

Notice tester2 doesn't have:

```
introduce()
```

But it can borrow it:

```
tester1.introduce.call(tester2);
```

Output:

```
Ravi - Performance Tester
```

This is known as **function borrowing** .

The method belongs to one object but is executed using another object's data.

---

## 🧪 QA Function Borrowing Example

Suppose:

```
const chromeRunner = {

    browser: "Chrome",

    execute() {

        console.log(
            `Executing automation on ${this.browser}`
        );

    }

};
```

Firefox configuration:

```
const firefoxRunner = {

    browser: "Firefox"

};
```

Now:

```
chromeRunner.execute.call(
    firefoxRunner
);
```

Output:

```
Executing automation on Firefox
```

The function is borrowed.

The context changes.

---

## ⚠️ Common Mistakes

### Mistake 1 – Thinking call() returns a function

It doesn't.

```
run.call(obj);
```

executes immediately.

---

### Mistake 2 – Thinking bind() executes immediately

It doesn't.

```
const boundFunction =
    run.bind(obj);
```

You still need:

```
boundFunction();
```

---

### Mistake 3 – Passing array arguments to call()

Wrong:

```
run.call(
    obj,
    ["Login", "QA"]
);
```

That sends one array argument.

Use:

```
run.apply(
    obj,
    ["Login", "QA"]
);
```

when you specifically want array-based argument passing.

---

### Mistake 4 – Forgetting About Lost this

Example:

```
const execute =
    testRunner.executeTest;

execute();
```

The function may no longer know about:

```
testRunner
```

You may need:

```
const execute =
    testRunner.executeTest.bind(
        testRunner
    );
```

---

## 🧠 A Simple Interview Question

A common JavaScript interview question is:

### What is the difference between call(), apply() and bind()?

My answer would be:

> All three allow us to explicitly control the value of this.

But:

```
call()
Executes immediately
Arguments passed separately
```

```
apply()
Executes immediately
Arguments passed as an array
```

```
bind()
Returns a new function
Execution can happen later
```

---

## 🔥 Interview Code Question

What will be the output?

```
const tester = {

    name: "Shankar"

};

function showName() {

    console.log(this.name);

}

const result =
    showName.bind(tester);

result();
```

Output:

```
Shankar
```

Why?

Because:

```
bind(tester)
```

creates a new function where:

```
this === tester
```

---

## 💡 One More Important Modern JavaScript Point

Today, apply() is sometimes less necessary because JavaScript's**spread operator**can handle arrays.

Earlier:

```
runTest.apply(
    config,
    argumentsArray
);
```

Modern JavaScript can often use:

```
runTest.call(
    config,
    ...argumentsArray
);
```

Example:

```
const data = [
    "Login Test",
    "QA"
];

runTest.call(
    chromeConfig,
    ...data
);
```

So while apply() is still an important JavaScript concept, the spread operator often provides another readable option.

---

## 🎯 Why Should QA Automation Engineers Understand These Methods?

Because modern automation frameworks involve a lot of:

✅ Objects

✅ Classes

✅ Callbacks

✅ Page Objects

✅ Event handlers

✅ Utility functions

✅ Browser/session contexts

✅ Async execution

✅ Reusable framework components

✅ Configuration-driven execution

Understanding how JavaScript manages function context helps us diagnose bugs such as:

```
Cannot read properties of undefined
```

or situations where:

```
this.page
```

```
this.driver
```

```
this.browser
```

```
this.config
```

suddenly becomes unavailable.

Sometimes the real problem is not Playwright.

Not WebdriverIO.

Not Cypress.

It is simply that:

> **the function lost its**this context.

---

## 📌 My Day 18 Cheat Sheet

```
call()
↓
Run function NOW
↓
Set this explicitly
↓
Pass arguments individually
```

```
apply()
↓
Run function NOW
↓
Set this explicitly
↓
Pass arguments as an array
```

```
bind()
↓
Set this explicitly
↓
Create NEW function
↓
Run it later
```

---

## 💡 My Biggest Learning From Day 18

Yesterday I learned:

> this depends on how a regular function is called.

Today I learned:

> JavaScript also gives us explicit control over this.

With:

```
call()
apply()
bind()
```

we can decide what object a function should operate on.

The connection now looks like this:

```
Objects
   ↓
Prototype Chain
   ↓
this
   ↓
call()
   ↓
apply()
   ↓
bind()
   ↓
Callbacks
   ↓
Reusable Framework Components
```

And that's when JavaScript starts feeling less like a collection of random concepts and more like one connected system.

---

## 🚀 Day 18 Complete!

Today I learned:

✅ Why call(), apply() and bind() exist

✅ How call() controls this

✅ How apply() works with arrays

✅ How bind() preserves context

✅ Function borrowing

✅ Callback context problems

✅ Cross-browser automation examples

✅ API testing examples

✅ Environment-driven execution

✅ Real-world QA automation use cases

✅ Common interview questions

The biggest takeaway:

> call() and apply() say: “Use this object and execute now.”

> bind() says: “Remember this object — I'll execute you later.”

That one difference makes all three much easier to remember.

---

💬**Question for fellow JavaScript learners and QA engineers:**

Which one confused you the most when you first learned JavaScript?

call(), apply(), or bind()?

And have you ever debugged an automation failure that was actually caused by a lost this context?

Share your experience in the comments. 👇

#100DaysOfJavaScript #JavaScript #Day18 #JavaScriptLearning #QAAutomation #QualityAssurance #SoftwareTesting #AutomationTesting #Playwright #WebdriverIO #Cypress #TestAutomation #JavaScriptForTesters #QAEngineer #Programming #LearningInPublic
