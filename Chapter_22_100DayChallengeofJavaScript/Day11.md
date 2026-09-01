
# 🚀 Day 11/100 – JavaScript Inheritance: Stop Repeating Code in Your Automation Framework!

Imagine you are building a test automation framework.

You have:

* Login Test
* Checkout Test
* Payment Test
* Profile Test
* Search Test

And every test needs to perform the same actions:

```
launchBrowser();
login();
logout();
closeBrowser();
```

Now imagine writing the same methods again and again in every class.

That would make your framework:

❌ Hard to maintain ❌ Difficult to scale ❌ Full of duplicated code ❌ More prone to bugs

This is exactly where**Inheritance in JavaScript**becomes useful.

Today, as part of my**#100DaysOfJavaScript**learning journey, I explored one of the most important Object-Oriented Programming concepts:

### 👉 Inheritance in JavaScript

---

## 🔁 Quick Recap of Day 10

Yesterday, I learned about:

✅ JavaScript Classes ✅ Constructors ✅ The this keyword ✅ Creating objects using new

Example:

```
class Tester {

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    displayDetails() {
        console.log(`${this.name} is working as ${this.role}`);
    }
}

const tester = new Tester(
    "Shankar",
    "QA Automation Engineer"
);

tester.displayDetails();
```

Output:

```
Shankar is working as QA Automation Engineer
```

Today, I extended that understanding by learning how one class can reuse another class's functionality.

---

## 🔥 What is Inheritance?

Inheritance is an Object-Oriented Programming concept where:

> A child class can acquire properties and methods from another class.

In simple terms:

**Create common functionality once and reuse it wherever required.**

For example, consider this class:

```
class Tester {

    login() {
        console.log("Tester logged into the application");
    }
}
```

Now suppose I create another class:

```
class AutomationTester extends Tester {

    executeAutomation() {
        console.log("Executing automation tests");
    }
}
```

Here:

```
AutomationTester extends Tester
```

means:

AutomationTester inherits functionality from Tester.

Now:

```
const tester = new AutomationTester();

tester.login();
tester.executeAutomation();
```

Output:

```
Tester logged into the application
Executing automation tests
```

Interestingly, login() is not defined inside AutomationTester.

It comes from the parent class Tester.

That is the power of inheritance.

---

## 🧠 Parent Class vs Child Class

When inheritance is used, we normally have two classes.

### Parent Class

Also called:

* Base Class
* Super Class

Example:

```
class Tester {

    login() {
        console.log("Login");
    }
}
```

### Child Class

Also called:

* Derived Class
* Subclass

Example:

```
class AutomationTester extends Tester {

    executeTest() {
        console.log("Executing automated test");
    }
}
```

Relationship:

```
Tester
   ↓
AutomationTester
```

The child class can use methods available in the parent class.

---

## 🔹 extends Keyword

JavaScript uses the extends keyword to create inheritance.

Syntax:

```
class ChildClass extends ParentClass {

}
```

Example:

```
class Employee {

    login() {
        console.log("Employee logged in");
    }
}

class Tester extends Employee {

    testApplication() {
        console.log("Testing application");
    }
}
```

Now:

```
const tester = new Tester();

tester.login();
tester.testApplication();
```

Output:

```
Employee logged in
Testing application
```

---

## 🔥 Why is Inheritance Useful in Test Automation?

Think about a real automation framework.

Every test might need common operations such as:

```
Launch Browser
       ↓
Open Application
       ↓
Login
       ↓
Execute Test
       ↓
Logout
       ↓
Close Browser
```

Instead of adding these operations to every test class, we can create one common parent class.

For example:

```
class BaseTest {

    launchBrowser() {
        console.log("Launching browser");
    }

    login() {
        console.log("Logging into application");
    }

    logout() {
        console.log("Logging out");
    }

    closeBrowser() {
        console.log("Closing browser");
    }
}
```

Now individual tests can inherit from BaseTest.

```
class LoginTest extends BaseTest {

    verifyLogin() {
        console.log("Verifying successful login");
    }
}
```

Usage:

```
const loginTest = new LoginTest();

loginTest.launchBrowser();
loginTest.login();
loginTest.verifyLogin();
loginTest.logout();
loginTest.closeBrowser();
```

Output:

```
Launching browser
Logging into application
Verifying successful login
Logging out
Closing browser
```

This significantly improves code reusability.

---

## 🔥 One Parent Class, Multiple Child Classes

Inheritance becomes even more useful when multiple classes share common functionality.

Consider:

```
class BaseTest {

    launchBrowser() {
        console.log("Browser launched");
    }

    login() {
        console.log("User logged in");
    }
}
```

Now we can create:

```
class LoginTest extends BaseTest {

    verifyLogin() {
        console.log("Login verified");
    }
}
```

Another test:

```
class CheckoutTest extends BaseTest {

    verifyCheckout() {
        console.log("Checkout verified");
    }
}
```

And another:

```
class PaymentTest extends BaseTest {

    verifyPayment() {
        console.log("Payment verified");
    }
}
```

Architecture:

```
BaseTest
                     |
          -------------------------
          |           |           |
      LoginTest  CheckoutTest  PaymentTest
```

All child classes can reuse functionality from BaseTest.

This means the common logic stays in one place.

---

## 🔹 Inheritance With Constructors

Inheritance becomes even more interesting when constructors are involved.

Consider the parent class:

```
class Tester {

    constructor(name, experience) {
        this.name = name;
        this.experience = experience;
    }

    displayDetails() {
        console.log(
            `${this.name} has ${this.experience} years of experience`
        );
    }
}
```

Now let's inherit it:

```
class AutomationTester extends Tester {

    executeAutomation() {
        console.log(`${this.name} is executing automation tests`);
    }
}
```

Create the object:

```
const tester = new AutomationTester(
    "Shankar",
    12
);

tester.displayDetails();
tester.executeAutomation();
```

Output:

```
Shankar has 12 years of experience
Shankar is executing automation tests
```

Notice something interesting.

AutomationTester doesn't have its own constructor.

JavaScript automatically uses the parent's constructor.

---

## 🔥 What if the Child Class Needs Its Own Constructor?

Suppose an Automation Tester has:

* Name
* Experience
* Automation Tool

The first two properties belong to the parent class.

The third belongs specifically to the child class.

Example:

```
class Tester {

    constructor(name, experience) {
        this.name = name;
        this.experience = experience;
    }
}
```

Now:

```
class AutomationTester extends Tester {

    constructor(name, experience, tool) {

        super(name, experience);

        this.tool = tool;
    }

    displayDetails() {
        console.log(
            `${this.name} has ${this.experience} years of experience and uses ${this.tool}`
        );
    }
}
```

Create the object:

```
const tester = new AutomationTester(
    "Shankar",
    12,
    "Playwright"
);

tester.displayDetails();
```

Output:

```
Shankar has 12 years of experience and uses Playwright
```

Here we introduced another important JavaScript keyword:

## 👉 super()

---

## 🔥 What Does super() Mean?

super() calls the constructor of the parent class.

In our example:

```
super(name, experience);
```

calls:

```
constructor(name, experience) {
    this.name = name;
    this.experience = experience;
}
```

Therefore:

```
super("Shankar", 12);
```

initializes:

```
this.name = "Shankar";
this.experience = 12;
```

Then the child class initializes:

```
this.tool = "Playwright";
```

So conceptually, the final object looks like:

```
{
    name: "Shankar",
    experience: 12,
    tool: "Playwright"
}
```

---

## ⚠️ Important Rule: super() Before this

This was an important concept for me.

In a child class constructor, we cannot use this before calling super().

Wrong:

```
class AutomationTester extends Tester {

    constructor(name, tool) {

        this.tool = tool;

        super(name);
    }
}
```

This results in an error.

Correct:

```
class AutomationTester extends Tester {

    constructor(name, tool) {

        super(name);

        this.tool = tool;
    }
}
```

Why?

Because super() initializes the parent portion of the object first.

Think of the sequence like this:

```
Parent Object Initialization
            ↓
        super()
            ↓
Child Object Initialization
            ↓
          this
```

---

## 🔥 Method Overriding

Inheritance doesn't mean a child class must always use the parent's implementation.

The child class can provide its own implementation.

This concept is called:

### 👉 Method Overriding

Example:

```
class Tester {

    executeTest() {
        console.log("Executing manual test");
    }
}
```

Now:

```
class AutomationTester extends Tester {

    executeTest() {
        console.log("Executing automation test");
    }
}
```

Create the object:

```
const tester = new AutomationTester();

tester.executeTest();
```

Output:

```
Executing automation test
```

Even though the parent class contains:

```
executeTest()
```

the child class provides its own version.

Therefore, the child implementation gets executed.

---

## 🔥 Calling Parent Methods Using super

Sometimes we don't want to completely replace the parent's behavior.

Instead, we want to:

1. Execute the parent method
2. Add additional child behavior

Example:

```
class Tester {

    executeTest() {
        console.log("Preparing test environment");
    }
}
```

Child:

```
class AutomationTester extends Tester {

    executeTest() {

        super.executeTest();

        console.log("Executing automation scripts");
    }
}
```

Usage:

```
const tester = new AutomationTester();

tester.executeTest();
```

Output:

```
Preparing test environment
Executing automation scripts
```

Here:

```
super.executeTest();
```

calls the parent's method.

Important distinction:

```
super();
```

calls the parent constructor.

Whereas:

```
super.methodName();
```

calls a parent method.

---

## 🚀 Real-World Page Object Model Example

As a QA Automation Engineer, this is where inheritance becomes much more meaningful.

Imagine a Playwright Page Object Model framework.

We could create a common base page.

```
class BasePage {

    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }
}
```

Now create a Login Page:

```
class LoginPage extends BasePage {

    async login(username, password) {

        await this.page.fill("#username", username);

        await this.page.fill("#password", password);

        await this.page.click("#login");
    }
}
```

Usage:

```
const loginPage = new LoginPage(page);

await loginPage.open(
    "https://example.com/login"
);

await loginPage.login(
    "tester@example.com",
    "password123"
);
```

Here:

```
open()
```

comes from:

```
BasePage
```

while:

```
login()
```

belongs specifically to:

```
LoginPage
```

Our architecture becomes:

```
BasePage
                       |
        --------------------------------
        |              |               |
    LoginPage       HomePage      CheckoutPage
```

This is a practical example of how inheritance can be used while designing automation frameworks.

---

## 🔥 Another Real-Time Example: API Automation

Inheritance isn't limited to UI automation.

Consider API testing.

We could have:

```
class BaseAPI {

    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    setHeaders() {
        console.log("Setting common API headers");
    }
}
```

Then:

```
class UserAPI extends BaseAPI {

    createUser() {
        console.log(
            `Creating user using ${this.baseURL}`
        );
    }
}
```

Usage:

```
const userAPI = new UserAPI(
    "https://api.example.com"
);

userAPI.setHeaders();

userAPI.createUser();
```

This shows how common API functionality can also be reused.

---

## 🧩 Key Benefits of Inheritance

Inheritance provides several advantages.

### 1️⃣ Code Reusability

Write common functionality once and reuse it.

Instead of:

```
LoginTest → login()
CheckoutTest → login()
PaymentTest → login()
ProfileTest → login()
```

We can have:

```
BaseTest
                |
             login()
                |
       -------------------
       |        |        |
    Login   Checkout   Payment
```

---

### 2️⃣ Easier Maintenance

Suppose application login behavior changes.

Without inheritance, we may need to update multiple classes.

With inheritance:

```
class BaseTest {

    login() {
        // Update login logic here
    }
}
```

Change it once.

Every child class automatically gets the updated functionality.

---

### 3️⃣ Cleaner Framework Architecture

Instead of duplicating methods everywhere, the framework becomes structured.

Example:

```
BasePage
   |
   ├── LoginPage
   ├── DashboardPage
   ├── ProductPage
   ├── CartPage
   └── CheckoutPage
```

---

### 4️⃣ Better Scalability

When new test pages are added, they can reuse existing common functionality.

For example:

```
class OrdersPage extends BasePage {

}
```

Immediately, OrdersPage can access methods available inside BasePage.

---

## ⚠️ One Important Learning

Inheritance is powerful, but that doesn't mean everything should be inherited.

If we create very deep inheritance such as:

```
BasePage
   ↓
CommonPage
   ↓
UserPage
   ↓
CustomerPage
   ↓
PremiumCustomerPage
   ↓
CheckoutPage
```

the framework may become difficult to understand and maintain.

In real automation projects, inheritance should be used carefully.

Sometimes**composition**can be a better design than deep inheritance.

That is something I plan to explore further as I progress in JavaScript and Playwright.

---

## 🧠 Important Keywords From Day 11

ConceptMeaningextendsCreates inheritancesuper()Calls parent constructorsuper.method()Calls parent methodParent ClassClass being inheritedChild ClassClass inheriting another classMethod OverridingChild provides its own implementationReusabilityReuse common functionality

---

## 💡 Easy Way to Remember

Inheritance:

```
class Child extends Parent {

}
```

If the child needs its own constructor:

```
class Child extends Parent {

    constructor(value) {

        super(value);

    }
}
```

Calling parent constructor:

```
super();
```

Calling parent method:

```
super.methodName();
```

---

## 🎯 My Biggest Takeaway From Day 11

Before learning inheritance, I looked at:

```
class LoginPage {}
class CheckoutPage {}
class PaymentPage {}
```

as completely separate classes.

Now I understand that when multiple classes have common behavior, we can move that behavior into a reusable parent class.

In automation testing, this could look like:

```
BaseTest
   ↓
LoginTest

BasePage
   ↓
LoginPage

BaseAPI
   ↓
UserAPI
```

The key idea I learned today is:

> **Don't repeat common functionality across multiple classes. Identify what is common, place it in the appropriate reusable abstraction, and let other classes reuse it.**

This understanding will be particularly useful when I start designing more structured **Playwright automation frameworks using JavaScript** .

---

📌**Day 11 Completed: JavaScript Inheritance**

Tomorrow, I will continue strengthening my JavaScript OOP concepts and connect them with practical automation framework design.

If you are also learning JavaScript for Playwright or Test Automation, what approach do you currently use for common functionality —**Inheritance or Composition?**

#JavaScript #100DaysOfJavaScript #Playwright #TestAutomation #QAAutomation #SoftwareTesting #AutomationTesting #JavaScriptLearning #PageObjectModel #OOP #QualityAssurance #SDET #PlaywrightAutomation #LearningInPublic
