# Day 19/100 of Learning JavaScript 🚀 The JavaScript Concept That Can Make Your Playwright Tests Fail Even When Your Code Looks Perfect 👀



Have you ever written a Playwright test like this?

```
page.goto("https://example.com");

console.log("Page loaded!");

page.getByText("Login").click();
```

At first glance, everything looks correct.

But here's the question:

🤔**Did JavaScript actually wait for the page to load before printing "Page loaded!" and clicking Login?**

Not necessarily.

And this is where one of the most important concepts in modern JavaScript and Playwright automation comes into the picture:

## Promises and Async/Await ⚡

If you are learning Playwright, understanding async/await is not optional.

It is one of the core concepts that helps you understand how your automation code executes.

---

## 🧠 First, Let's Understand the Problem

JavaScript is primarily known for executing code synchronously.

That means:

➡️ Execute Line 1 ➡️ Complete Line 1 ➡️ Move to Line 2 ➡️ Complete Line 2 ➡️ Move to Line 3

For example:

```
console.log("Step 1");

console.log("Step 2");

console.log("Step 3");
```

Output:

```
Step 1
Step 2
Step 3
```

Simple.

But what happens when an operation takes time?

For example:

* Opening a web page
* Clicking an element
* Waiting for a response
* Reading data from an API
* Downloading a file
* Connecting to a database

JavaScript should not simply freeze everything while waiting.

This is where asynchronous programming becomes important.

---

## ⚡ What Is a Promise?

A**Promise**represents the result of an asynchronous operation.

Think about ordering food online. 🍔

When you place the order:

1️⃣ You place your order 2️⃣ The restaurant starts processing it 3️⃣ You wait for the result 4️⃣ The order is either delivered or cancelled

A Promise works in a similar way.

A Promise can have three states:

### ⏳ Pending

The operation is still running.

### ✅ Fulfilled

The operation completed successfully.

### ❌ Rejected

The operation failed.

For example:

```
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Login Successful");
    } else {
        reject("Login Failed");
    }
});
```

The Promise will eventually return either a successful result or an error.

---

## 🔥 Why Does This Matter in Playwright?

Most Playwright actions are asynchronous.

For example:

```
page.goto();

page.click();

page.fill();

page.locator();

page.waitForResponse();
```

These operations may take time to complete.

That is why Playwright code frequently looks like this:

```
await page.goto("https://example.com");

await page.getByLabel("Username").fill("testuser");

await page.getByLabel("Password").fill("password");

await page.getByRole("button", { name: "Login" }).click();
```

The keyword await tells JavaScript:

> "Pause this async function here until this Promise completes."

---

## 🚨 The Most Common Mistake Playwright Beginners Make

Consider this:

```
test("Login Test", async ({ page }) => {

    page.goto("https://example.com");

    page.getByLabel("Username").fill("testuser");

    page.getByLabel("Password").fill("password");

    page.getByRole("button", { name: "Login" }).click();

});
```

There are no await keywords.

The commands are asynchronous.

JavaScript may continue executing without properly waiting for each operation to complete.

The correct approach is:

```
test("Login Test", async ({ page }) => {

    await page.goto("https://example.com");

    await page.getByLabel("Username").fill("testuser");

    await page.getByLabel("Password").fill("password");

    await page.getByRole("button", { name: "Login" }).click();

});
```

Now the execution flow becomes much clearer:

```
Open Website
      ↓
Wait for navigation
      ↓
Enter Username
      ↓
Wait for action completion
      ↓
Enter Password
      ↓
Wait for action completion
      ↓
Click Login
```

This is why understanding async/await is essential for stable Playwright automation.

---

## 🧩 Understanding Async

The await keyword cannot normally be used inside a regular function.

It needs an async function.

```
async function login() {

    await page.goto("https://example.com");

}
```

When we mark a function as async, JavaScript knows that the function can perform asynchronous operations.

Example:

```
async function getUserData() {

    const response = await fetch(
        "https://api.example.com/users/1"
    );

    const data = await response.json();

    console.log(data);

}
```

Here:

```
await fetch()
```

waits for the API response.

Then:

```
await response.json()
```

waits for the response body to be converted into JavaScript data.

---

## 🎯 Promise vs Async/Await

One of the easiest ways to understand this is:

### Promise

The underlying mechanism for handling asynchronous operations.

### Async/Await

A cleaner and more readable way to work with Promises.

For example, using .then():

```
page.goto("https://example.com")
    .then(() => {
        console.log("Page Loaded");
    })
    .catch((error) => {
        console.log(error);
    });
```

Using async/await:

```
try {

    await page.goto("https://example.com");

    console.log("Page Loaded");

} catch (error) {

    console.log(error);

}
```

For automation engineers, the second approach is usually easier to read and maintain.

---

## 🔍 Real-Time Playwright Example: API Response

Imagine you click a button that triggers an API request.

You want to validate the response.

```
const responsePromise = page.waitForResponse(
    response =>
        response.url().includes("/api/users") &&
        response.status() === 200
);

await page.getByRole("button", {
    name: "Load Users"
}).click();

const response = await responsePromise;

console.log(await response.json());
```

Notice something important here.

We start waiting for the API response**before**clicking the button.

Why?

Because if we click first and then start waiting, a very fast API response might already be completed.

This is a practical example of how understanding asynchronous programming can make automation more reliable.

---

## 🚀 Parallel Execution with Promise.all()

Not every asynchronous operation needs to run one after another.

Sometimes tasks can run in parallel.

Example:

```
const [users, products] = await Promise.all([
    fetch("/api/users"),
    fetch("/api/products")
]);
```

Both API requests start at approximately the same time.

JavaScript waits until both Promises complete.

In Playwright, you might use:

```
await Promise.all([
    page.waitForNavigation(),
    page.getByRole("button", {
        name: "Login"
    }).click()
]);
```

This is useful when an action triggers another asynchronous event.

---

## 🧪 Why This Is Important for QA Automation Engineers

Understanding Promises and Async/Await helps you:

✅ Write stable Playwright tests ✅ Understand asynchronous browser behavior ✅ Handle API requests and responses ✅ Avoid unnecessary hard waits ✅ Write cleaner automation code ✅ Debug flaky tests more effectively ✅ Execute independent tasks efficiently ✅ Understand Playwright's asynchronous APIs

---

## ⚠️ A Very Important Lesson: await Does Not Mean Add It Everywhere Without Thinking

One common misconception is:

> "If I add await, my test will automatically become stable."

Not always.

await waits for the Promise you are awaiting.

It does not magically solve:

❌ Incorrect locators ❌ Race conditions ❌ Poor test data ❌ Unstable environments ❌ Incorrect assertions ❌ Application performance problems

Good automation requires understanding **what you are waiting for and why** .

---

## 🆚 Hard Wait vs Smart Waiting

Avoid this:

```
await page.waitForTimeout(5000);
```

This forces the test to wait for five seconds whether the application is ready or not.

Instead, prefer Playwright's built-in waiting mechanisms.

For example:

```
await page.getByRole("button", {
    name: "Login"
}).click();
```

Or wait for a specific expected condition:

```
await expect(
    page.getByText("Login Successful")
).toBeVisible();
```

The key principle is:

> **Wait for a meaningful application state, not an arbitrary amount of time.**

---

## 🧠 My Mental Model for Async Playwright Automation

When I see a Playwright command, I think:

```
Action Started
      ↓
Does this operation return a Promise?
      ↓
Yes
      ↓
Do I need its completion before continuing?
      ↓
Yes
      ↓
Use await
```

For most Playwright interactions, the answer is yes.

---

## 💡 Final Takeaway

Learning Playwright without understanding Promises and Async/Await is like learning to drive a car without understanding when to use the brakes.

You might still move forward.

But you won't fully understand what is happening when things become complex. 🚗

Promises are the foundation.

async/await makes asynchronous code readable.

And Playwright uses asynchronous programming everywhere.

So, if you are a QA Automation Engineer moving into Playwright, don't just memorize this:

```
await page.click();
```

Understand**why the**await is there.

Because once you understand Promises and Async/Await, you don't just write Playwright tests.

🔥**You understand how your Playwright tests actually execute.**

---

### 📌 Key Takeaways

🔹 Playwright APIs frequently return Promises.

🔹 async allows a function to perform asynchronous operations.

🔹 await waits for a Promise to complete.

🔹 Promises can be Pending, Fulfilled, or Rejected.

🔹 Promise.all() helps run independent asynchronous operations concurrently.

🔹 Understanding asynchronous execution helps reduce flaky automation.

🔹 Don't use hard waits when you can wait for a meaningful application state.

---

### 💬 Question for QA Engineers

When you started learning Playwright, what was more confusing for you?

**1️⃣ Promises****2️⃣ Async/Await****3️⃣ Playwright Auto-Waiting****4️⃣ API Synchronization**

Let's discuss in the comments. 👇

#100DaysOfJavaScript #Day19 #JavaScript #Promises #AsyncAwait #Playwright #TestAutomation #QA #QAEngineering #SDET #AutomationTesting #SoftwareTesting #WebAutomation #LearnInPublic #TestingCommunity
