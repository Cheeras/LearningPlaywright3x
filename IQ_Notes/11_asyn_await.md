
# Deep Dive into `async` and `await` in JavaScript

`async` and `await` are used in JavaScript to handle **asynchronous operations** in a cleaner, more readable, and easier-to-understand way.

Common asynchronous operations include:

* API calls
* Database calls
* Reading files
* Timers
* Browser automation actions
* Network requests
* Playwright/Selenium-like automation operations

---

# 1. Why Do We Need Asynchronous Programming?

Suppose you are testing a login flow:

```javascript
openBrowser();
gotoLoginPage();
enterCredentials();
clickLogin();
```

Looking at the code, it appears that these operations will happen one after another.

But imagine:

```javascript
gotoLoginPage();
```

takes **3 seconds** to load the page.

JavaScript normally does not want to block the entire program while waiting for slow operations.

Asynchronous programming allows JavaScript to continue doing other work while waiting for a slow operation to complete.

---

## Simple Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Browser opened");
}, 2000);

console.log("End");
```

### Output

```text
Start
End
Browser opened
```

You may initially expect:

```text
Start
Browser opened
End
```

But that does not happen.

### Why?

Because `setTimeout()` is asynchronous.

JavaScript does not stop the entire program for 2 seconds.

Instead, it registers the timer and continues executing the next statement.

So:

```javascript
console.log("End");
```

runs before the timer finishes.

---

# 2. What is `async`?

The `async` keyword is written before a function.

## Syntax

```javascript
async function test() {

}
```

Example:

```javascript
async function login() {
    console.log("Login started");
}
```

The most important rule is:

> **An `async` function always returns a Promise.**

---

## Example

```javascript
async function getName() {
    return "Shankar";
}

console.log(getName());
```

You do not directly get:

```text
Shankar
```

Instead, you get something similar to:

```text
Promise { 'Shankar' }
```

Why?

Because JavaScript internally converts the returned value into a resolved Promise.

This:

```javascript
async function getName() {
    return "Shankar";
}
```

behaves roughly like:

```javascript
function getName() {
    return Promise.resolve("Shankar");
}
```

So remember:

```text
async function
      ↓
always returns
      ↓
Promise
```

---

# 3. What is `await`?

`await` tells JavaScript:

> Wait until this Promise completes, then continue executing the next line inside this async function.

Example:

```javascript
async function test() {

    let result = await somePromise;

    console.log(result);
}
```

Here:

```javascript
await somePromise;
```

waits for `somePromise` to settle.

If the Promise resolves successfully, its resolved value is assigned to:

```javascript
result
```

---

# 4. Why Do We Need `async` Before Using `await`?

Consider this code:

```javascript
function test() {

    let result = await somePromise;

}
```

This is normally invalid.

You may get an error similar to:

```text
SyntaxError: await is only valid in async functions
```

So we write:

```javascript
async function test() {

    let result = await somePromise;

}
```

Think of it like this:

```text
async
  ↓
tells JavaScript

"This function contains asynchronous work
and can use await."
```

Then:

```text
await
  ↓
tells JavaScript

"Pause this async function here until
this Promise is completed."
```

---

# 5. Simple Real-Time Example

Let's create a fake browser-opening operation.

```javascript
function openBrowser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Browser opened");

            resolve();

        }, 2000);

    });
}
```

`openBrowser()` returns a Promise.

The Promise resolves after approximately 2 seconds.

Now suppose we write:

```javascript
openBrowser();

console.log("Navigate to login page");
```

### Output

```text
Navigate to login page
Browser opened
```

But for browser automation, this sequence is wrong.

We wanted:

```text
Browser opened
Navigate to login page
```

This is where `await` helps.

---

# 6. Using `await`

```javascript
async function test() {

    await openBrowser();

    console.log("Navigate to login page");

}

test();
```

### Output

```text
Browser opened
Navigate to login page
```

Now JavaScript waits for `openBrowser()` before executing the next line inside `test()`.

---

# 7. What Exactly Happens Internally?

When JavaScript reaches:

```javascript
await openBrowser();
```

the flow looks like this:

```text
test()
   ↓
openBrowser()
   ↓
returns Promise
   ↓
Promise pending
   ↓
await pauses test()
   ↓
timer completes
   ↓
Promise resolved
   ↓
test() resumes
   ↓
console.log("Navigate to login page")
```

One very important point:

> `await` does not block the entire JavaScript program.

It pauses only the execution of the surrounding `async` function while JavaScript can continue handling other work.

---

# 8. Returning a Value from a Promise

Consider:

```javascript
function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Shankar");

        }, 2000);

    });
}
```

Now use `await`:

```javascript
async function test() {

    const user = await getUser();

    console.log(user);

}

test();
```

### Output

```text
Shankar
```

Here:

```javascript
resolve("Shankar");
```

provides the Promise result.

And:

```javascript
const user = await getUser();
```

extracts that resolved value.

Flow:

```text
getUser()
   ↓
returns Promise
   ↓
await
   ↓
Promise resolves
   ↓
"Shankar"
   ↓
stored in user
```

---

# 9. QA Automation Example with Playwright

`async` and `await` are extremely important when working with Playwright.

For example:

```javascript
await page.goto("https://app.vwo.com");
```

Why do we use `await`?

Because opening a webpage takes time.

The browser has to perform several operations:

```text
Send request
    ↓
Wait for server
    ↓
Receive response
    ↓
Receive HTML
    ↓
Render page
    ↓
Continue test
```

Playwright APIs commonly return Promises.

A typical test looks like:

```javascript
test("Login Test", async ({ page }) => {

    await page.goto("https://app.vwo.com");

    await page.fill("#login-username", "test@gmail.com");

    await page.fill("#login-password", "password");

    await page.click("#js-login-btn");

});
```

Notice both keywords:

```javascript
async
```

and:

```javascript
await
```

are being used.

---

# 10. Why is the Playwright Test Function `async`?

Consider:

```javascript
test("Login Test", async ({ page }) => {

});
```

The callback function passed to `test()` is declared as:

```javascript
async
```

because we want to use `await` inside it.

For example:

```javascript
await page.goto(...);
await page.fill(...);
await page.click(...);
```

Without `async`, these `await` statements would not work normally inside that function.

---

# 11. What Happens If We Remove `async`?

Suppose we write:

```javascript
function loginTest() {

    await page.goto("https://app.vwo.com");

}
```

This is invalid because `await` is being used inside a regular function.

Correct version:

```javascript
async function loginTest() {

    await page.goto("https://app.vwo.com");

}
```

So:

```text
Want to use await?
      ↓
Function usually needs async
```

---

# 12. What Happens If We Keep `async` but Remove `await`?

Consider:

```javascript
async function loginTest() {

    page.goto("https://app.vwo.com");

    page.fill("#username", "admin");

}
```

The function itself is `async`.

But we are not waiting for:

```javascript
page.goto()
```

to finish.

Since `page.goto()` returns a Promise, JavaScript can continue to:

```javascript
page.fill()
```

before navigation is complete.

This may cause failures such as:

```text
Element not found
Navigation interrupted
Page closed
Timeout
Unexpected test behavior
```

Correct version:

```javascript
async function loginTest() {

    await page.goto("https://app.vwo.com");

    await page.fill("#username", "admin");

}
```

Now the flow is:

```text
Open page
   ↓
wait
   ↓
navigation completes
   ↓
find username
   ↓
enter value
```

---

# 13. `async` Does NOT Mean "Wait"

This is a very common misunderstanding.

Consider:

```javascript
async function test() {

    console.log("Hello");

}
```

There is no waiting happening here.

The `async` keyword itself does not mean:

```text
Wait here
```

Instead, `async` mainly does two things:

1. Makes the function return a Promise.
2. Allows `await` to be used inside the function.

So remember:

```text
async ≠ wait
```

`await` is responsible for waiting for a Promise.

---

# 14. Function Declaration Styles with `async`

You can use `async` with different JavaScript function styles.

## Normal Function

```javascript
async function login() {

    await openBrowser();

}
```

---

## Function Expression

```javascript
const login = async function () {

    await openBrowser();

};
```

---

## Arrow Function

```javascript
const login = async () => {

    await openBrowser();

};
```

Example:

```javascript
const login = async () => {

    await openBrowser();

    console.log("Browser ready");

};
```

All three approaches allow you to use `await`.

---

# 15. Multiple `await` Statements

You can use multiple `await` statements when operations depend on each other.

Example:

```javascript
async function loginTest() {

    await openBrowser();

    await gotoLoginPage();

    await enterCredentials();

    await clickLogin();

}
```

This creates a clean sequential flow:

```text
Open Browser
     ↓
wait
     ↓
Go to Login Page
     ↓
wait
     ↓
Enter Credentials
     ↓
wait
     ↓
Click Login
```

This is one of the main reasons `async/await` is widely used in automation frameworks.

---

# 16. Complete Browser Automation Simulation

```javascript
function openBrowser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Step 1: Browser opened");

            resolve();

        }, 2000);

    });
}

function gotoLoginPage() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Step 2: Login page loaded");

            resolve();

        }, 1500);

    });
}

function enterCredentials() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Step 3: Credentials entered");

            resolve();

        }, 1000);

    });
}

function clickLogin() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Step 4: Login button clicked");

            resolve();

        }, 500);

    });
}
```

Now create the test:

```javascript
async function loginTest() {

    await openBrowser();

    await gotoLoginPage();

    await enterCredentials();

    await clickLogin();

    console.log("Test Completed");

}

loginTest();
```

### Output

```text
Step 1: Browser opened
Step 2: Login page loaded
Step 3: Credentials entered
Step 4: Login button clicked
Test Completed
```

This closely resembles how we think about automation test steps.

---

# 17. Handling Errors with `async/await`

Promises may fail.

For example:

```javascript
await page.goto("https://wrong-url.com");
```

could fail.

We can handle failures using `try...catch`.

```javascript
async function loginTest() {

    try {

        await page.goto("https://app.vwo.com");

        await page.fill("#username", "admin");

        await page.click("#login");

        console.log("Login successful");

    } catch (error) {

        console.log("Test failed");

        console.log(error);

    }

}
```

Flow:

```text
try
 ↓
execute async operations
 ↓
success → continue normally

OR

Promise rejects
 ↓
catch
 ↓
handle error
```

This is very useful in real-world JavaScript applications and automation frameworks.

---

# 18. Promise vs `async/await`

Without `async/await`, Promises are commonly handled using `.then()`.

Example:

```javascript
openBrowser()
    .then(() => {
        console.log("Navigate to login page");
    });
```

Using `async/await`:

```javascript
async function test() {

    await openBrowser();

    console.log("Navigate to login page");

}
```

Both work with Promises.

But `async/await` usually makes sequential workflows easier to read.

---

# 19. Important Concept: `await` Works with Promises

This is the core idea.

Suppose:

```javascript
function openBrowser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Browser opened");

            resolve();

        }, 2000);

    });

}
```

Then:

```javascript
await openBrowser();
```

works because:

```javascript
openBrowser()
```

returns a Promise.

The relationship is:

```text
Asynchronous Operation
        ↓
      Promise
        ↓
      await
        ↓
Resolved Result
        ↓
Continue Execution
```

---

# 20. Easy Formula to Remember

Remember this sequence:

```text
Promise
   ↓
async function
   ↓
await Promise
   ↓
get result
   ↓
continue next line
```

For QA automation:

```javascript
await page.goto(url);

await page.fill(locator, value);

await page.click(locator);
```

Think about it as:

```text
Complete this browser operation
          ↓
then
          ↓
move to the next test step
```

---

# 21. `async` vs `await` Summary

| Keyword          | Purpose                                                              |
| ---------------- | -------------------------------------------------------------------- |
| `async`        | Declares an asynchronous function                                    |
| `async`        | Makes the function always return a Promise                           |
| `async`        | Allows`await` inside the function                                  |
| `await`        | Waits for a Promise to settle                                        |
| `await`        | Gives the resolved Promise result                                    |
| Without`async` | `await` normally cannot be used inside that function               |
| Without`await` | JavaScript may continue before the async operation finishes          |
| `async` alone  | Does not make individual operations wait                             |
| `await`        | Pauses the current async function, not the entire JavaScript program |

---

# 22. Interview Questions to Remember

### Q1. What is `async` in JavaScript?

`async` is a keyword used before a function. An async function always returns a Promise and allows the use of `await` inside the function.

---

### Q2. What is `await`?

`await` pauses execution inside an async function until the Promise settles and then returns the resolved value.

---

### Q3. Does `async` automatically wait for operations?

No.

`async` itself does not wait.

You normally use `await` for operations whose Promise completion must be waited for.

---

### Q4. What happens if we use `await` without `async`?

Inside a normal function, it typically results in a syntax error.

```javascript
function test() {
    await somePromise;
}
```

---

### Q5. What happens if we don't use `await` in Playwright?

The next statement may begin before the previous asynchronous browser operation has completed, which can cause test failures and race conditions.

---

### Q6. What does an async function return?

An async function always returns a Promise.

```javascript
async function getValue() {
    return 10;
}
```

Conceptually:

```javascript
Promise.resolve(10);
```

---

### Q7. Can we use `async` with arrow functions?

Yes.

```javascript
const test = async () => {

    await openBrowser();

};
```

---

# 23. Final Mental Model

Whenever you see:

```javascript
async function login() {

    await openBrowser();

    await gotoLoginPage();

    await enterCredentials();

    await clickLogin();

}
```

Read it mentally as:

```text
This function performs asynchronous work.

Open the browser and wait for completion.

Then open the login page and wait.

Then enter credentials and wait.

Then click the login button and wait.
```

That is the simplest way to understand `async` and `await`.

---

# Final Takeaway

`async` and `await` provide a cleaner way to work with JavaScript Promises.

Remember these three rules:

```text
1. async function → always returns a Promise

2. await Promise → waits for that Promise before continuing
   inside the async function

3. async + await → makes asynchronous code look and read
   like sequential code
```

For QA automation, the easiest way to remember it is:

```javascript
await page.goto(url);

await page.fill(locator, value);

await page.click(locator);
```

which means:

```text
Do Step 1
   ↓
Wait until required async work completes
   ↓
Do Step 2
   ↓
Wait
   ↓
Do Step 3
```

That is why `async` and `await` are fundamental when working with **Playwright, API calls, Node.js, database operations, file operations, and modern JavaScript automation frameworks**.
