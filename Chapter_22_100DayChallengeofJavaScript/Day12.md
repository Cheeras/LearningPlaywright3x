


# 🚨 One JavaScript Method… But Different Behaviors? This OOP Concept Changed How I Look at Automation Frameworks!

Imagine writing this in your automation framework:

```
browser.launch();
```

Simple, right?

But what if the same launch() method could:

* Open Chrome when the object is Chrome
* Open Firefox when the object is Firefox
* Open Edge when the object is Edge

Same method name.

Different behavior.

No complicated if-else everywhere.

This is where**Polymorphism**comes into the picture. 🚀

Welcome to **Day 12 of my #100DaysOfJavaScript learning journey** .

But before starting Day 12, here is a quick recap of what I learned yesterday.

---

## 🔄 Quick Recap — Day 11: Inheritance in JavaScript

Yesterday, I learned about **Inheritance** , one of the important concepts of Object-Oriented Programming.

In simple terms:

> Inheritance allows one class to reuse properties and methods from another class.

For example:

```
class Browser {

    launch() {
        console.log("Launching Browser");
    }

}

class Chrome extends Browser {

}
```

Now the Chrome class automatically gets access to:

```
launch()
```

because it inherits from Browser.

The main concepts I learned were:

✅ extends is used to inherit from another class ✅ The parent class is also called the base/super class ✅ The child class can reuse parent properties and methods ✅ super() is used to call the parent constructor ✅ Inheritance helps reduce duplicate code ✅ It makes automation frameworks easier to maintain and extend

Inheritance basically taught me:

> **Don't rewrite something if you can reuse it.**

But then I had another question.

What if the child class wants to inherit a method...

…but wants that method to behave differently?

That brings us to Day 12. 🔥

---

## 🚀 Day 12 — Polymorphism in JavaScript

Today I learned another important OOP concept:

## Polymorphism

At first, the word sounds complicated.

But the concept is actually very simple.

The word Polymorphism comes from:

**Poly → Many**

**Morph → Forms**

So Polymorphism means:

> **One thing having many forms.**

In programming:

> The same method can behave differently depending on which object calls it.

---

## 🧠 A Simple Example

Consider a method:

```
makeSound();
```

Different animals can use the same method differently.

```
class Animal {

    makeSound() {
        console.log("Animal makes a sound");
    }

}
```

Now let's create a Dog:

```
class Dog extends Animal {

    makeSound() {
        console.log("Dog says Woof!");
    }

}
```

And a Cat:

```
class Cat extends Animal {

    makeSound() {
        console.log("Cat says Meow!");
    }

}
```

Now:

```
let dog = new Dog();
let cat = new Cat();

dog.makeSound();
cat.makeSound();
```

Output:

```
Dog says Woof!
Cat says Meow!
```

Both objects are calling:

```
makeSound();
```

But the behavior is different.

That is **Polymorphism** .

---

## 🔥 How Is This Related to Inheritance?

This is where Day 11 and Day 12 connect beautifully.

Yesterday we saw that a child class can inherit methods from a parent class.

For example:

```
class Browser {

    launch() {
        console.log("Launching Browser");
    }

}

class Chrome extends Browser {

}
```

Chrome inherits launch().

But what if Chrome wants its own implementation?

We can write:

```
class Chrome extends Browser {

    launch() {
        console.log("Launching Google Chrome");
    }

}
```

Now:

```
let chrome = new Chrome();

chrome.launch();
```

Output:

```
Launching Google Chrome
```

The child class provides its own version of the inherited method.

This is called:

## Method Overriding

---

## 🎯 What Is Method Overriding?

Method overriding happens when:

> A child class creates a method with the same name as a method available in the parent class.

The child's implementation takes priority.

Example:

```
class Browser {

    launch() {
        console.log("Launching Browser");
    }

}

class Chrome extends Browser {

    launch() {
        console.log("Launching Chrome");
    }

}
```

Now:

```
let browser = new Chrome();

browser.launch();
```

JavaScript executes:

```
Launching Chrome
```

not:

```
Launching Browser
```

because the child method overrides the parent method.

---

## 🧪 Now Let's Connect This With QA Automation

Suppose I am building a cross-browser automation framework.

My tests should work with:

🌐 Chrome

🦊 Firefox

🌊 Edge

Every browser needs one common operation:

```
launch();
```

Let's create a parent class.

```
class Browser {

    launch() {
        console.log("Launching Browser...");
    }

}
```

Now Chrome:

```
class ChromeBrowser extends Browser {

    launch() {
        console.log("Launching Chrome Browser...");
    }

}
```

Firefox:

```
class FirefoxBrowser extends Browser {

    launch() {
        console.log("Launching Firefox Browser...");
    }

}
```

Edge:

```
class EdgeBrowser extends Browser {

    launch() {
        console.log("Launching Edge Browser...");
    }

}
```

Now let's create the objects:

```
let chrome = new ChromeBrowser();
let firefox = new FirefoxBrowser();
let edge = new EdgeBrowser();

chrome.launch();
firefox.launch();
edge.launch();
```

Output:

```
Launching Chrome Browser...
Launching Firefox Browser...
Launching Edge Browser...
```

Notice what happened.

The method name is always:

```
launch();
```

But each browser provides its own implementation.

That is exactly what Polymorphism allows us to do.

---

## 🚀 Why Is This Important in Automation Frameworks?

Without a good design, we might create code like:

```
launchChrome();
launchFirefox();
launchEdge();
```

Later we might add:

```
launchSafari();
```

And maybe:

```
launchMobileChrome();
```

Our test code starts becoming dependent on individual implementations.

Instead, we can simply work with:

```
browser.launch();
```

The object itself decides how the browser should be launched.

Our test code doesn't need to know all the implementation details.

This leads to:

✅ Cleaner code

✅ Less duplication

✅ Easier maintenance

✅ Better framework scalability

✅ Easy addition of new implementations

✅ Better separation of responsibilities

---

## 🧪 Real-Time Example — Different Login Behaviors

Suppose our application has different types of users.

👤 Normal User

👨💼 Admin User

🛠 Support User

All users need to log in.

So we have one common operation:

```
login();
```

Parent class:

```
class User {

    login() {
        console.log("User Login");
    }

}
```

Admin User:

```
class AdminUser extends User {

    login() {
        console.log("Admin Login with additional verification");
    }

}
```

Normal User:

```
class NormalUser extends User {

    login() {
        console.log("Normal User Login");
    }

}
```

Support User:

```
class SupportUser extends User {

    login() {
        console.log("Support User Login with support permissions");
    }

}
```

Now:

```
let admin = new AdminUser();
let user = new NormalUser();
let support = new SupportUser();

admin.login();
user.login();
support.login();
```

Output:

```
Admin Login with additional verification
Normal User Login
Support User Login with support permissions
```

Again:

Same method name:

```
login();
```

Different behavior.

That is Polymorphism.

---

## 💡 But What If I Want the Parent Behavior Too?

Sometimes the child class doesn't want to completely replace the parent method.

Instead, it wants to:

1. Execute the parent behavior
2. Add some child-specific behavior

This is where:

```
super
```

becomes useful.

Example:

```
class Browser {

    launch() {
        console.log("Loading browser configuration");
    }

}
```

Now Chrome:

```
class ChromeBrowser extends Browser {

    launch() {

        super.launch();

        console.log("Launching Chrome Browser");

    }

}
```

Run it:

```
let chrome = new ChromeBrowser();

chrome.launch();
```

Output:

```
Loading browser configuration
Launching Chrome Browser
```

Here:

```
super.launch();
```

executes the parent class method.

Then Chrome performs its additional behavior.

---

## 🧪 A More Practical QA Framework Example

Consider a base test class.

```
class BaseTest {

    setup() {

        console.log("Loading Environment");

        console.log("Loading Test Data");

        console.log("Initializing Logger");

    }

}
```

Now suppose I have UI tests.

```
class UITest extends BaseTest {

    setup() {

        super.setup();

        console.log("Launching Browser");

    }

}
```

And API tests:

```
class APITest extends BaseTest {

    setup() {

        super.setup();

        console.log("Initializing API Client");

    }

}
```

Run UI Test:

```
let uiTest = new UITest();

uiTest.setup();
```

Output:

```
Loading Environment
Loading Test Data
Initializing Logger
Launching Browser
```

Run API Test:

```
let apiTest = new APITest();

apiTest.setup();
```

Output:

```
Loading Environment
Loading Test Data
Initializing Logger
Initializing API Client
```

Look at the design.

The common behavior is maintained only once inside:

```
BaseTest
```

The child classes add only what they need.

That is a much cleaner framework approach.

---

## 🔥 Polymorphism Without Classes?

One thing I found very interesting about JavaScript is that Polymorphism isn't limited only to class inheritance.

JavaScript is dynamically typed.

So different objects can simply expose the same method.

Example:

```
const chrome = {

    launch() {
        console.log("Launching Chrome");
    }

};
```

Firefox:

```
const firefox = {

    launch() {
        console.log("Launching Firefox");
    }

};
```

Now create a common function:

```
function startBrowser(browser) {

    browser.launch();

}
```

Call it:

```
startBrowser(chrome);

startBrowser(firefox);
```

Output:

```
Launching Chrome
Launching Firefox
```

The startBrowser() function doesn't really care whether the object is Chrome or Firefox.

It only expects one thing:

```
browser.launch();
```

This flexible style is very common in JavaScript.

---

## ⚠️ What About Method Overloading?

This is another interesting point.

Coming from languages such as Java, we may expect something like:

```
login(username)

login(username, password)

login(username, password, otp)
```

This is called **method overloading** .

JavaScript does not support traditional method overloading based purely on different parameter lists in the same way languages like Java do.

For example:

```
class Login {

    login(username) {
        console.log(username);
    }

    login(username, password) {
        console.log(username, password);
    }

}
```

The second method definition replaces the first one.

So we normally handle such scenarios differently in JavaScript.

---

## ✅ JavaScript Alternative — Default Parameters

For example:

```
function login(username, password = null) {

    if (password) {

        console.log("Login using username and password");

    } else {

        console.log("Login using username");

    }

}
```

Now:

```
login("tester");
```

And:

```
login("tester", "Test@123");
```

can both be handled using the same function.

JavaScript also allows us to use:

✅ Default parameters

✅ Optional values

✅ Rest parameters

✅ Objects as parameters

✅ Argument checks

---

## 🎭 Easy Real-Life Example to Remember Polymorphism

Think about one operation:

```
pay();
```

But payment can happen using:

💳 Credit Card

📱 UPI

🏦 Net Banking

💰 Wallet

The operation is still:

```
pay();
```

But every payment type has a different implementation.

That is Polymorphism.

Similarly, in an automation framework:

```
browser.launch();

user.login();

report.generate();

test.setup();

notification.send();
```

The method name can stay consistent.

The implementation can change depending on the object.

---

## 🎯 Inheritance vs Polymorphism

These two concepts are closely related, but they solve different problems.

### Inheritance

Inheritance says:

> **I want to reuse behavior from another class.**

Example:

```
class Chrome extends Browser {

}
```

Chrome gets behavior from Browser.

---

### Polymorphism

Polymorphism says:

> **I want the same operation to behave differently for different objects.**

Example:

```
chrome.launch();

firefox.launch();

edge.launch();
```

Same operation.

Different behavior.

---

## 🧠 The Easiest Way I Remember It

### Inheritance = Reuse

```
Parent
   ↓
Child
```

The child reuses parent functionality.

### Polymorphism = Different Behavior

```
launch()
                |
        ------------------
        |        |       |
      Chrome   Firefox   Edge
```

Same method.

Multiple implementations.

---

## 🚀 How This Connects With Playwright

Since I am learning JavaScript as a foundation for modern automation testing, this concept becomes even more interesting when thinking about Playwright frameworks.

Imagine different page objects:

```
loginPage.open();

dashboardPage.open();

profilePage.open();
```

All these objects can provide:

```
open();
```

But each page can define its own navigation behavior.

Similarly:

```
loginPage.validate();

dashboardPage.validate();

checkoutPage.validate();
```

The test can work with a consistent method design while each object manages its own implementation.

That is where OOP concepts start becoming practical framework-design skills rather than just interview definitions.

---

## 🔥 My Biggest Learning Today

Earlier, when I saw code such as:

```
browser.launch();
```

I considered it just a normal method call.

Now I understand that good framework design is not about creating more classes and methods.

It is about asking:

**What behavior should be common?**

**What behavior should be inherited?**

**What behavior should be overridden?**

**How can different objects expose the same operation?**

**How can I keep my tests independent from implementation details?**

That mindset can make automation frameworks much easier to scale.

---

## 📌 Day 12 Key Takeaways

Today I learned:

✅ Polymorphism means**one interface with multiple behaviors**

✅ The same method can behave differently depending on the object

✅ Child classes can override parent class methods

✅ This is called**Method Overriding**

✅ super.method() can be used to call the parent's implementation

✅ Inheritance focuses mainly on**reuse**

✅ Polymorphism focuses on**different implementations**

✅ JavaScript does not support traditional method overloading like Java

✅ JavaScript's dynamic nature allows Polymorphism even without classes

✅ Polymorphism can help us design cleaner and more scalable automation frameworks

---

## 🚀 Day 12 Completed — Polymorphism & Method Overriding in JavaScript

Every day, I'm slowly realizing that learning JavaScript isn't just about:

```
variables
loops
functions
```

The real value starts when we understand how these concepts help us design better software and better automation frameworks.

Day 11 taught me:

> **How to reuse behavior using Inheritance.**

Day 12 taught me:

> **How the same behavior can take different forms using Polymorphism.**

One concept at a time.

One practical example at a time.

Moving closer toward building better automation frameworks with JavaScript and Playwright. 🚀

---

## 🤔 Quick Interview Challenge

What will be the output of this code?

```
class Test {

    execute() {
        console.log("Executing Base Test");
    }

}

class AutomationTest extends Test {

    execute() {
        console.log("Executing Automation Test");
    }

}

let test = new AutomationTest();

test.execute();
```

Choose your answer:

**A)**Executing Base Test

**B)**Executing Automation Test

**C)**Both methods execute

**D)**JavaScript throws an error

💬 Drop your answer in the comments.

Let's learn together. 🚀

#JavaScript #100DaysOfJavaScript #JavaScriptLearning #Polymorphism #Inheritance #OOP #ObjectOrientedProgramming #MethodOverriding #Playwright #Selenium #AutomationTesting #QAAutomation #SoftwareTesting #TestAutomation #QualityAssurance #SoftwareEngineering #LearningInPublic
