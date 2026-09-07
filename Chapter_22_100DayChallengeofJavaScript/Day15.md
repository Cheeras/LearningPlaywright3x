
# 🚀 Day 15/100 of Learning JavaScript — JavaScript Classes Look Like Java… But Under the Hood, It’s All Prototypes! 😲




Have you ever written this?

```
class LoginPage {
    login() {
        console.log("Logging into application...");
    }
}
```

And thought:

👉 “JavaScript classes probably work exactly like Java classes.”

That is where things get interesting.

JavaScript does support the class syntax, but underneath, JavaScript inheritance is fundamentally based on **Prototypes and the Prototype Chain** .

Understanding prototypes helped me understand what JavaScript is actually doing behind the scenes when we use:

✅ Classes ✅ Inheritance ✅ Methods ✅ Objects ✅ Method overriding ✅ Reusable automation components

Today, on **Day 15 of my #100DaysOfJavaScript journey** , I explored**JavaScript Prototypes and the Prototype Chain**with practical QA automation examples.

---

### 🔁 Quick Recap — Day 14

Yesterday, I explored **Abstraction Layers in JavaScript** .

✅ Hide unnecessary implementation details ✅ Expose only what the consumer needs ✅ Keep automation tests readable ✅ Separate test logic from framework complexity

For example, instead of writing all browser interactions inside a test:

```
await page.locator("#username").fill("admin");
await page.locator("#password").fill("password");
await page.locator("#login").click();
```

we can expose a simple abstraction:

```
await loginPage.login("admin", "password");
```

The test knows **what to do** , not every detail of **how it is done** .

Today, I wanted to go one level deeper.

---

## 🧠 What Is a Prototype in JavaScript?

Every JavaScript object can have another object associated with it called its **prototype** .

When JavaScript cannot find a property or method directly inside an object, it looks for it in its prototype.

If it still cannot find it, JavaScript continues searching upward.

This process is called the:

### 🔗 Prototype Chain

Consider this object:

```
const tester = {
    name: "Shankar",
    role: "QA Automation Engineer"
};

console.log(tester.name);
```

Output:

```
Shankar
```

That makes sense because name exists directly inside tester.

But what about this?

```
console.log(tester.toString());
```

We never created a toString() method.

Still, JavaScript knows how to execute it.

Why?

Because JavaScript looks further up the **prototype chain** .

Conceptually:

```
tester
   ↓
Object.prototype
   ↓
null
```

toString() is available through Object.prototype.

---

## 🔍 Real-Time Example

Imagine we create an automation tester object:

```
const qaEngineer = {
    name: "Shankar",
    tool: "Playwright"
};
```

Now:

```
console.log(qaEngineer.hasOwnProperty("name"));
```

Output:

```
true
```

But did we create hasOwnProperty()?

No.

It comes from:

```
Object.prototype
```

JavaScript effectively searches:

```
qaEngineer
     ↓
Object.prototype
     ↓
null
```

This is prototype-based inheritance.

---

## 🏗️ Constructor Functions and Prototypes

Before modern JavaScript introduced the class syntax, constructor functions were commonly used to create reusable objects.

Example:

```
function Tester(name, tool) {
    this.name = name;
    this.tool = tool;
}
```

Now create objects:

```
const tester1 = new Tester("Shankar", "Playwright");
const tester2 = new Tester("Rahul", "Selenium");
```

Output:

```
console.log(tester1.name);
// Shankar

console.log(tester2.tool);
// Selenium
```

Suppose every tester needs a method called:

```
executeTest()
```

We could write:

```
function Tester(name, tool) {
    this.name = name;
    this.tool = tool;

    this.executeTest = function () {
        console.log(`${this.name} is executing tests using ${this.tool}`);
    };
}
```

But there is a problem.

Every object gets its **own copy of the function** .

Instead, we can put the method on the prototype.

```
function Tester(name, tool) {
    this.name = name;
    this.tool = tool;
}

Tester.prototype.executeTest = function () {
    console.log(`${this.name} is executing tests using ${this.tool}`);
};
```

Now:

```
const tester1 = new Tester("Shankar", "Playwright");
const tester2 = new Tester("Rahul", "Selenium");

tester1.executeTest();
tester2.executeTest();
```

Output:

```
Shankar is executing tests using Playwright
Rahul is executing tests using Selenium
```

Both objects can use the same method through the prototype.

---

## 💡 Why Is This Better?

Instead of creating:

```
tester1 → executeTest()
tester2 → executeTest()
tester3 → executeTest()
tester4 → executeTest()
```

with separate copies, we can conceptually have:

```
Tester.prototype
                    |
              executeTest()
                 /     \
                /       \
          tester1     tester2
```

The behavior is shared.

This is one of the powerful ideas behind JavaScript's object model.

---

## 🧪 QA Automation Example

Imagine we are building our automation framework.

We create:

```
function BasePage(page) {
    this.page = page;
}
```

Now add reusable functionality:

```
BasePage.prototype.clickElement = async function(locator) {
    await this.page.locator(locator).click();
};

BasePage.prototype.enterText = async function(locator, value) {
    await this.page.locator(locator).fill(value);
};
```

Now different page objects can reuse those behaviors.

For example:

```
function LoginPage(page) {
    BasePage.call(this, page);
}
```

Set up inheritance:

```
LoginPage.prototype = Object.create(BasePage.prototype);
LoginPage.prototype.constructor = LoginPage;
```

Now:

```
LoginPage.prototype.login = async function(username, password) {

    await this.enterText("#username", username);

    await this.enterText("#password", password);

    await this.clickElement("#login");
};
```

Notice something interesting.

LoginPage never directly defines:

```
enterText()
clickElement()
```

Yet it can access them because of the prototype chain.

Conceptually:

```
LoginPage Object
       ↓
LoginPage.prototype
       ↓
BasePage.prototype
       ↓
Object.prototype
       ↓
null
```

That is inheritance in action.

---

## 🔎 How Does JavaScript Search for a Method?

Suppose we execute:

```
loginPage.enterText("#username", "admin");
```

JavaScript searches step by step.

### Step 1

Does loginPage directly contain:

```
enterText
```

No.

### Step 2

Check:

```
LoginPage.prototype
```

Still not found.

### Step 3

Check:

```
BasePage.prototype
```

Found! ✅

JavaScript executes the method.

This lookup mechanism is called the:

## Prototype Chain

---

## 🧬 What About Modern JavaScript Classes?

Now consider:

```
class BasePage {

    constructor(page) {
        this.page = page;
    }

    clickElement(locator) {
        console.log(`Clicking ${locator}`);
    }
}
```

Then:

```
class LoginPage extends BasePage {

    login() {
        console.log("Executing login");
    }
}
```

Usage:

```
const loginPage = new LoginPage();

loginPage.login();

loginPage.clickElement("#login");
```

It looks like traditional class-based programming.

But JavaScript is still using prototypes internally.

You can verify:

```
console.log(LoginPage.prototype);
```

And:

```
console.log(
    Object.getPrototypeOf(LoginPage.prototype)
);
```

The class syntax gives developers a cleaner way to work with JavaScript's prototype system.

---

## 🔥 __proto__ vs prototype

This confused me initially.

They are related, but they are **not the same thing** .

Consider:

```
function Tester() {}
```

Tester.prototype is the object that objects created using new Tester() will inherit from.

Example:

```
const tester = new Tester();
```

Conceptually:

```
tester.__proto__ === Tester.prototype
```

returns:

```
true
```

Modern code generally prefers:

```
Object.getPrototypeOf(tester)
```

instead of accessing __proto__ directly.

---

## 🧪 Another Automation Example

Imagine browser-specific implementations.

```
function Browser(browserName) {
    this.browserName = browserName;
}
```

Shared method:

```
Browser.prototype.launch = function () {
    console.log(`Launching ${this.browserName}`);
};
```

Create browsers:

```
const chrome = new Browser("Chrome");
const firefox = new Browser("Firefox");
const edge = new Browser("Edge");
```

Execute:

```
chrome.launch();
firefox.launch();
edge.launch();
```

Output:

```
Launching Chrome
Launching Firefox
Launching Edge
```

One shared behavior can support many objects.

---

## 🎯 Prototype Chain With Arrays

Here is another fascinating example.

```
const browsers = [
    "Chrome",
    "Firefox",
    "Edge"
];
```

We can execute:

```
browsers.map(browser => {
    console.log(browser);
});
```

But where does map() come from?

We never created it.

JavaScript finds it through:

```
browsers
    ↓
Array.prototype
    ↓
Object.prototype
    ↓
null
```

Methods such as:

```
map()
filter()
reduce()
forEach()
push()
pop()
slice()
```

are available largely because they exist on:

```
Array.prototype
```

This finally connects many of the array methods I learned earlier in this journey with JavaScript's underlying object model. 🔥

---

## 🧪 String Example

Consider:

```
const framework = "Playwright";
```

Then:

```
console.log(framework.toUpperCase());
```

Output:

```
PLAYWRIGHT
```

JavaScript gives strings access to methods provided by:

```
String.prototype
```

Similarly:

```
Array → Array.prototype

String → String.prototype

Function → Function.prototype

Object → Object.prototype
```

---

## 🚀 Why Should a QA Automation Engineer Learn Prototypes?

At first, prototypes may look like something only JavaScript developers need.

But understanding them helps automation engineers understand:

✅ How JavaScript inheritance actually works ✅ How classes work internally ✅ Why objects can access methods they never directly declared ✅ How reusable framework components work ✅ How built-in array/string methods are available ✅ How libraries extend functionality ✅ How method lookup happens ✅ How debugging inheritance issues becomes easier

When working with tools such as:

🔹 Playwright 🔹 WebdriverIO 🔹 Cypress 🔹 Node.js

we constantly work with JavaScript objects and inherited methods.

Understanding the prototype chain makes those APIs much less mysterious.

---

## 🏆 My Biggest Learning From Day 15

Previously, I thought:

```
JavaScript Class → Object
```

Now I understand that the deeper picture is closer to:

```
Object
   ↓
Prototype
   ↓
Parent Prototype
   ↓
Object.prototype
   ↓
null
```

And when JavaScript cannot find a property or method directly on an object, it walks this chain until:

✅ It finds the property

or

❌ It reaches null.

That simple mechanism powers a huge part of JavaScript's inheritance system.

---

### 💭 Interview Question

What will this print?

```
const arr = [10, 20, 30];

console.log(
    Object.getPrototypeOf(arr) === Array.prototype
);
```

Think before checking the answer. 😉

The answer is:

```
true
```

Because the array object's prototype is:

```
Array.prototype
```

---

🔥**Day 15 Takeaway**

> JavaScript may give us class, extends, and super, but underneath those convenient keywords lives one of JavaScript's most important concepts — the Prototype Chain.

Understanding syntax helps us write JavaScript.

Understanding prototypes helps us understand**how JavaScript actually works.**

✅ Day 10 — Classes & Constructors ✅ Day 11 — Inheritance ✅ Day 12 — Polymorphism ✅ Day 13 — Encapsulation ✅ Day 14 — Abstraction Layers ✅ Day 15 — Prototypes & Prototype Chain

The deeper I go into JavaScript, the more I realize:

**Learning the syntax tells us what to write. Understanding the internals tells us why it works. 🚀**

#100DaysOfJavaScript #JavaScript #Day15 #JavaScriptLearning #Prototype #PrototypeChain #QA #QAAutomation #AutomationTesting #Playwright #Selenium #WebdriverIO #SoftwareTesting #TestAutomation #LearningInPublic #QualityEngineering
