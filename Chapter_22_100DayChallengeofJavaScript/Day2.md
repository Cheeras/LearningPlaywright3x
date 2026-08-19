
🚨 **If JavaScript can’t find your variable… where does it actually look?**

That one question changed the way I look at JavaScript code.

Welcome to **Day 2 of my 100 Days of JavaScript Learning Challenge** 🚀

Yesterday, I explored **Execution Context and the Call Stack**.

Today, I went deeper into:

👉 **Scope**
👉 **Scope Chain**
👉 **Lexical Environment**
👉 **Variable Shadowing**

And instead of learning only definitions, I tried to connect them with **real QA Automation and Playwright-style examples**.

---

### 🔹 1. What exactly is Scope?

Scope decides:

> **Where can I access this variable in my program?**

Consider an automation framework:

```javascript
const baseURL = "https://app.vwo.com";

function launchApplication() {
    console.log(baseURL);
}

launchApplication();
```

`baseURL` is declared outside the function.

So `launchApplication()` can access it.

Think about a real automation project:

```javascript
const baseURL = "https://app.vwo.com";

function loginTest() {
    console.log("Opening:", baseURL);
}

function dashboardTest() {
    console.log("Opening:", baseURL);
}

function logoutTest() {
    console.log("Opening:", baseURL);
}
```

We don't have to create `baseURL` again and again.

This is an example of an outer/global scope being accessible to inner functions.

---

### 🔹 2. Function Scope

Now imagine login credentials are required only for one test.

```javascript
function loginTest() {

    let username = "tester@test.com";
    let password = "Test@123";

    console.log(username);
}

loginTest();

console.log(username);
```

The last statement gives:

```text
ReferenceError: username is not defined
```

Why?

Because `username` belongs to:

```text
loginTest()
```

and is not available outside it.

Conceptually:

```text
Global Scope
│
├── loginTest()
│      ├── username
│      └── password
│
└── username ❌
```

This is useful in automation because test-specific data can remain inside the test where it is required.

---

### 🔥 3. Block Scope — `let` and `const`

Suppose we execute some code only for Chrome:

```javascript
const browser = "Chrome";

if (browser === "Chrome") {

    let chromeOptions = "Headless Mode";

    console.log(chromeOptions);
}

console.log(chromeOptions);
```

The last line results in:

```text
ReferenceError
```

Because `chromeOptions` exists only inside:

```javascript
{
   ...
}
```

This is **Block Scope**.

`let` and `const` respect block scope.

---

### ⚠️ But `var` behaves differently

```javascript
if (true) {

    var browserName = "Chrome";
    let automationTool = "Playwright";
}

console.log(browserName);      // ✅ Chrome
console.log(automationTool);   // ❌ ReferenceError
```

Why?

Because:

```text
var   → Function Scoped

let   → Block Scoped

const → Block Scoped
```

This helped me understand one important reason why modern JavaScript code generally favors `let` and `const`.

---

# 🔥 Now comes the interesting part — Scope Chain

Let's take a more realistic automation example.

```javascript
const baseURL = "https://app.vwo.com";

function loginTest() {

    const username = "automation@test.com";

    function enterCredentials() {

        const password = "Test@123";

        console.log(baseURL);
        console.log(username);
        console.log(password);
    }

    enterCredentials();
}

loginTest();
```

Inside `enterCredentials()`, we are using three variables.

But all three are declared in different places.

```text
password
username
baseURL
```

So how does JavaScript find them?

JavaScript starts searching from the current scope.

For:

```javascript
console.log(password);
```

JavaScript searches:

```text
enterCredentials()
        │
        └── password ✅ FOUND
```

Easy.

Now:

```javascript
console.log(username);
```

JavaScript searches:

```text
enterCredentials()
        │
        └── username ❌
               ↓
loginTest()
        │
        └── username ✅ FOUND
```

Now:

```javascript
console.log(baseURL);
```

JavaScript searches:

```text
enterCredentials()
        ↓
loginTest()
        ↓
Global Scope
        │
        └── baseURL ✅ FOUND
```

This search process is called the:

🔥 **Scope Chain**

In simple terms:

```text
Current Scope
      ↓
Parent Scope
      ↓
Parent's Parent Scope
      ↓
Global Scope
```

---

# 🧪 Real-time Playwright-style example

Imagine this structure:

```javascript
const baseURL = "https://app.vwo.com";

async function loginTest(page) {

    const username = "automation@test.com";

    async function performLogin() {

        const password = "Test@123";

        await page.goto(baseURL);

        await page.fill("#username", username);
        await page.fill("#password", password);
    }

    await performLogin();
}
```

Inside `performLogin()`:

```text
password
```

comes from its **local scope**.

```text
username
```

comes from its **parent scope**.

```text
baseURL
```

comes from the **outer/global scope**.

And:

```text
page
```

comes from the parent function parameter.

This is where scope stops being just an interview definition.

👉 **We are already using the Scope Chain while writing automation code.**

---

# 🧠 What is Lexical Environment?

This term initially sounds complicated.

But I understood it like this:

Whenever JavaScript creates an Execution Context, it needs to know:

✅ What variables exist here?
✅ What functions exist here?
✅ Where is my outer environment?

Example:

```javascript
let project = "Playwright Automation";

function runTests() {

    let browser = "Chrome";

    function executeLoginTest() {

        let testName = "Login Test";

        console.log(project);
        console.log(browser);
        console.log(testName);
    }

    executeLoginTest();
}

runTests();
```

Conceptually:

```text
Global Lexical Environment
│
├── project
│
└── runTests()
       │
       ↓
runTests Lexical Environment
│
├── browser
│
└── executeLoginTest()
       │
       ↓
executeLoginTest Lexical Environment
│
└── testName
```

When JavaScript encounters:

```javascript
console.log(browser);
```

inside `executeLoginTest()`:

```text
executeLoginTest Scope
        ↓
browser available?

NO ❌

        ↓

runTests Scope
        ↓
browser available?

YES ✅
```

That's how the **Lexical Environment and Scope Chain work together**.

---

# 🚨 Another important concept — JavaScript searches OUTWARD, not INWARD

Example:

```javascript
function loginTest() {

    let username = "admin";

    function enterPassword() {

        let password = "Test123";

        console.log(username);
    }

    enterPassword();

    console.log(password);
}
```

Inside `enterPassword()`:

```javascript
console.log(username);
```

works ✅

Because the child function can look into its outer scope.

But:

```javascript
console.log(password);
```

inside `loginTest()` fails ❌

because the parent cannot search inside its child function.

In simple words:

```text
Child → Parent ✅

Parent → Child ❌
```

That was one of my biggest takeaways today.

---

# 🔥 One more real-world problem — Variable Shadowing

Imagine:

```javascript
let environment = "Production";

function runAutomation() {

    let environment = "QA";

    console.log(environment);
}

runAutomation();

console.log(environment);
```

Output:

```text
QA
Production
```

Why did JavaScript print `QA` inside the function?

Because when JavaScript searches for:

```javascript
environment
```

it first checks the **current scope**.

It finds:

```javascript
let environment = "QA";
```

So it stops searching.

The outer:

```javascript
let environment = "Production";
```

is temporarily hidden inside that scope.

This is called:

👉 **Variable Shadowing**

And this can become very relevant in larger automation frameworks where configuration variables, environment names, test data, and local variables may use similar names.

---

# 💡 My Day 2 mental model

When JavaScript sees:

```javascript
console.log(someVariable);
```

I now imagine JavaScript asking:

```text
Do I have someVariable here?
        ↓
YES → Use it ✅

NO
        ↓
Check parent scope

Found?
        ↓
YES → Use it ✅

NO
        ↓
Check next outer scope

        ↓
Global Scope

Still not found?
        ↓

ReferenceError ❌
```

---

### 🎯 Why am I spending time on these fundamentals as an Automation Engineer?

Because tomorrow, when we write something like:

```javascript
async function login(page) {
    await page.goto(baseURL);
}
```

or work with:

```text
Callbacks
Promises
Async/Await
Closures
Modules
Playwright Fixtures
Page Objects
Test Data
```

I don't want to just know **what syntax to type**.

I want to understand:

👉 Why can this function access that variable?
👉 Where did JavaScript get this value from?
👉 Why is one variable undefined?
👉 Why is another throwing ReferenceError?
👉 How does an inner function remember outer variables?

Strong automation starts with strong programming fundamentals.

---

📚 **100 Days of JavaScript Progress**

✅ **Day 1 — Execution Context & Call Stack**

✅ **Day 2 — Scope, Scope Chain & Lexical Environment**

🔜 **Day 3 — Hoisting & Temporal Dead Zone**

🔜 **Day 4 — Closures**

🔜 **Day 5 — Callbacks**

And then slowly towards:

🚀 **Promises → Async/Await → Playwright**

My biggest takeaway from Day 2:

> 💡 **JavaScript doesn't magically find variables. It follows a structured Scope Chain based on where the code is written.**

I'm learning JavaScript from the perspective of a **QA Automation Engineer**, focusing not only on *how to write code*, but also on *how JavaScript actually works behind the scenes.*

🚀 **Day 2 Completed. See you on Day 3!**

If you're learning **JavaScript for Playwright or QA Automation**, what concept was the hardest for you to understand initially?

#100DaysOfJavaScript #JavaScript #Playwright #QAAutomation #AutomationTesting #SoftwareTesting #SDET #QualityAssurance #JavaScriptLearning #TestAutomation #LearningInPublic #CodingJourney
