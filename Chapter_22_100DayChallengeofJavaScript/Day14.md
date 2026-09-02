
# 🚀 Day 14/100 – Learning JavaScript: Abstraction with Real-Time QA Automation Examples




### 🚨 If Your Test Script Knows How Everything Works, Your Automation Framework Is Already in Trouble!

Imagine you are writing an automation test for login.

Your test only needs to say:

```
await loginPage.login("tester@example.com", "Password123");
```

But behind that single line, many things may happen:

* Locate the username field
* Wait until it is visible
* Clear existing text
* Enter the username
* Locate the password field
* Enter the password
* Click the Login button
* Wait for navigation
* Handle synchronization
* Capture logs if something fails

Should every test case know all these implementation details?

**Absolutely not.**

That is exactly where**Abstraction**becomes powerful.

Today, on **Day 14 of my #100DaysOfJavaScript journey** , I explored one of the most important Object-Oriented Programming concepts:

## 🔥 Abstraction

And the more I understand abstraction, the more I realize:

> Good automation frameworks are not just collections of scripts. They are layers of abstraction hiding complexity from test cases.

---

## 🔄 Quick Recap – Day 13

Yesterday, I learned about **Encapsulation in JavaScript** .

✅ Encapsulation groups data and methods together.

✅ It controls how internal data is accessed or modified.

✅ Private fields such as #password help protect implementation details.

✅ Getters and setters provide controlled access.

Today, we move to another important OOP concept:

## 👉 Abstraction

---

## 🤔 What Is Abstraction?

In simple terms:

**Abstraction means hiding unnecessary implementation details and exposing only what the user needs.**

Think about driving a car.

You press:

```
Start
Accelerator
Brake
Steering
```

You don't need to understand:

```
Fuel injection
Engine combustion
Transmission
Electronic control unit
Ignition sequence
```

All that complexity is hidden.

You simply use the available interface.

That is **abstraction** .

---

## 🧠 Abstraction vs Encapsulation

These two concepts are often confused.

Here's a simple way I understand them:

ConceptMain PurposeEncapsulationProtect and organize internal dataAbstractionHide complexity and expose only required functionality

For example:

```
class BankAccount {

    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
```

Here:

```
#balance
```

is hidden using **encapsulation** .

But when the user simply calls:

```
account.deposit(5000);
```

without knowing how the balance is internally updated, that is also an example of **abstraction** .

---

## 🚗 Real-Time Example 1 – Car

Suppose we create a car class.

```
class Car {

    startCar() {
        this.#checkBattery();
        this.#startFuelPump();
        this.#igniteEngine();

        console.log("Car Started");
    }

    #checkBattery() {
        console.log("Checking battery...");
    }

    #startFuelPump() {
        console.log("Starting fuel pump...");
    }

    #igniteEngine() {
        console.log("Igniting engine...");
    }
}

const car = new Car();

car.startCar();
```

The user only calls:

```
car.startCar();
```

The user doesn't need to call:

```
checkBattery()
startFuelPump()
igniteEngine()
```

The complicated process is hidden.

That is abstraction.

---

## 🏧 Real-Time Example 2 – ATM Withdrawal

Whenever we withdraw money from an ATM, we simply:

```
Insert Card
Enter PIN
Select Amount
Withdraw
```

But internally the ATM may perform:

```
Validate card
Encrypt PIN
Connect to bank server
Verify account
Check balance
Check withdrawal limit
Debit amount
Update transaction
Generate receipt
Dispense cash
```

The customer doesn't need to understand any of this.

Let's represent it in JavaScript:

```
class ATM {

    withdraw(amount) {

        this.#validateCard();
        this.#verifyPin();
        this.#checkBalance(amount);
        this.#debitAmount(amount);

        console.log(`₹${amount} withdrawn successfully`);
    }

    #validateCard() {
        console.log("Card validated");
    }

    #verifyPin() {
        console.log("PIN verified");
    }

    #checkBalance(amount) {
        console.log(`Checking balance for ₹${amount}`);
    }

    #debitAmount(amount) {
        console.log(`Debiting ₹${amount}`);
    }
}

const atm = new ATM();

atm.withdraw(5000);
```

The customer interacts with:

```
atm.withdraw(5000);
```

The complexity remains hidden.

---

## 💳 Real-Time Example 3 – Online Payment

Think about purchasing something online.

You click:

```
Pay Now
```

But behind that single button:

```
Validate cart
Calculate tax
Apply discount
Validate payment
Call payment gateway
Process transaction
Update order
Reduce inventory
Send email
Send notification
Generate invoice
```

A JavaScript application might expose only:

```
payment.processPayment();
```

Example:

```
class PaymentService {

    processPayment(amount) {

        this.#validatePayment();

        this.#connectPaymentGateway();

        this.#chargeCustomer(amount);

        this.#generateReceipt();

        console.log("Payment Successful");
    }

    #validatePayment() {
        console.log("Validating payment...");
    }

    #connectPaymentGateway() {
        console.log("Connecting to payment gateway...");
    }

    #chargeCustomer(amount) {
        console.log(`Charging ₹${amount}`);
    }

    #generateReceipt() {
        console.log("Receipt generated");
    }
}

const payment = new PaymentService();

payment.processPayment(2500);
```

Again:

```
payment.processPayment(2500);
```

is the abstraction exposed to the consumer.

---

## 🚀 Now Let's Connect Abstraction with QA Automation

This is where abstraction becomes extremely important for testers.

Consider a Playwright login test.

Without abstraction:

```
test("User should login", async ({ page }) => {

    await page.goto("https://example.com/login");

    await page.locator("#username")
        .fill("tester@example.com");

    await page.locator("#password")
        .fill("Password123");

    await page.locator("#login")
        .click();

    await page.waitForURL("**/dashboard");

    await expect(
        page.locator(".dashboard-title")
    ).toBeVisible();

});
```

Technically this works.

But imagine having **500 tests** .

Every test contains:

```
locator
fill
click
wait
navigation
```

Now suppose the Login button locator changes.

Hundreds of tests may need modification.

---

## 🔥 Using Abstraction with Page Object Model

Instead, create:

```
class LoginPage {

    constructor(page) {

        this.page = page;

        this.username = page.locator("#username");

        this.password = page.locator("#password");

        this.loginButton = page.locator("#login");
    }

    async login(username, password) {

        await this.username.fill(username);

        await this.password.fill(password);

        await this.loginButton.click();
    }
}
```

Now the test becomes:

```
test("User should login", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login(
        "tester@example.com",
        "Password123"
    );

});
```

Look at the difference.

The test doesn't care:

❌ Which username locator is used

❌ Which password locator is used

❌ Which button locator is used

❌ Whether fill() or another method is used

The test simply says:

```
loginPage.login();
```

That is abstraction.

---

## 🛒 Real-Time QA Example 4 – E-Commerce Checkout

Imagine an Amazon-like application.

Without abstraction:

```
await page.locator("#product").click();

await page.locator("#add-cart").click();

await page.locator("#cart").click();

await page.locator("#checkout").click();

await page.locator("#address").fill("Hyderabad");

await page.locator("#continue").click();

await page.locator("#payment").click();

await page.locator("#place-order").click();
```

Your test contains too much implementation detail.

Instead:

```
class CheckoutPage {

    async checkoutProduct(productName) {

        await this.searchProduct(productName);

        await this.addToCart();

        await this.openCart();

        await this.enterShippingAddress();

        await this.selectPayment();

        await this.placeOrder();
    }
}
```

Test:

```
await checkoutPage.checkoutProduct("iPhone");
```

Imagine how readable that is.

A business stakeholder can almost understand the test.

---

## 🧪 Real-Time QA Example 5 – API Testing

Suppose we want to create a user through an API.

Without abstraction:

```
const response = await fetch(
    "https://api.example.com/users",
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer token123"
        },

        body: JSON.stringify({
            name: "Shankar",
            role: "Tester"
        })
    }
);
```

Every test may repeat:

```
URL
HTTP method
Headers
Authentication
Serialization
Error handling
```

Instead, create an API abstraction.

```
class APIClient {

    async post(endpoint, payload) {

        return await fetch(endpoint, {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer token123"
            },

            body: JSON.stringify(payload)

        });
    }
}
```

Now the test simply says:

```
const response =
    await apiClient.post(
        "/users",
        {
            name: "Shankar",
            role: "Tester"
        }
    );
```

The authentication and HTTP implementation are hidden.

---

## 🔐 Real-Time QA Example 6 – Authentication Token

Imagine every API test generating a token separately.

```
const response = await fetch("/login", {
    method: "POST",
    body: JSON.stringify({
        username: "admin",
        password: "password123"
    })
});

const data = await response.json();

const token = data.access_token;
```

Instead create:

```
class AuthService {

    async getToken() {

        const response =
            await fetch("/login", {
                method: "POST",

                body: JSON.stringify({
                    username: "admin",
                    password: "password123"
                })
            });

        const data =
            await response.json();

        return data.access_token;
    }
}
```

Test:

```
const token =
    await authService.getToken();
```

Much cleaner.

---

## 🧹 Real-Time QA Example 7 – Database Validation

Suppose your test needs to validate whether an order exists in the database.

Should every test know:

```
Database URL
Username
Password
Connection pool
SQL driver
Connection opening
Query execution
Connection closing
```

No.

Instead:

```
class DatabaseHelper {

    async getOrder(orderId) {

        const connection =
            await this.connect();

        const result =
            await connection.query(
                `SELECT * FROM orders
                 WHERE id = ?`,
                [orderId]
            );

        return result;
    }
}
```

Test:

```
const order =
    await database.getOrder(12345);
```

The test doesn't care about the database implementation.

---

## 📸 Real-Time QA Example 8 – Screenshot Utility

Instead of repeatedly writing:

```
await page.screenshot({
    path: "screenshots/login.png",
    fullPage: true
});
```

create:

```
class ScreenshotHelper {

    async capture(page, testName) {

        await page.screenshot({
            path: `screenshots/${testName}.png`,
            fullPage: true
        });
    }
}
```

Use:

```
await screenshot.capture(
    page,
    "LoginFailure"
);
```

The test knows **what it wants** .

The helper knows **how to do it** .

That is abstraction.

---

## 📊 Real-Time QA Example 9 – Reporting

Suppose every test contains:

```
console.log("Test Started");

console.log("Step Passed");

console.log("Screenshot captured");

console.log("Test Completed");
```

Instead:

```
class TestReporter {

    start(testName) {
        console.log(
            `Starting Test: ${testName}`
        );
    }

    pass(step) {
        console.log(
            `PASS: ${step}`
        );
    }

    fail(step) {
        console.log(
            `FAIL: ${step}`
        );
    }
}
```

Now:

```
reporter.start("Login Test");

reporter.pass("Login successful");
```

Later you might replace console.log() with:

```
Allure
Extent Reports
Custom dashboard
Cloud logging service
```

The test cases don't need to change.

That's another huge advantage of abstraction.

---

## 🔄 Real-Time QA Example 10 – Browser Factory

Imagine your framework supports:

```
Chrome
Firefox
Edge
```

Tests shouldn't contain browser creation logic everywhere.

Instead:

```
class BrowserFactory {

    async launch(browserName) {

        switch(browserName) {

            case "chrome":
                return await chromium.launch();

            case "firefox":
                return await firefox.launch();

            case "edge":
                return await chromium.launch({
                    channel: "msedge"
                });

            default:
                throw new Error(
                    "Unsupported browser"
                );
        }
    }
}
```

Test:

```
const browser =
    await browserFactory.launch("chrome");
```

The browser creation complexity is hidden.

---

## ⏳ Real-Time QA Example 11 – Wait Utility

Automation engineers frequently deal with synchronization.

Instead of putting waits everywhere:

```
await element.waitFor({
    state: "visible",
    timeout: 10000
});
```

We can abstract it:

```
class WaitHelper {

    async waitUntilVisible(element) {

        await element.waitFor({
            state: "visible",
            timeout: 10000
        });
    }
}
```

Now:

```
await waitHelper.waitUntilVisible(
    loginButton
);
```

If tomorrow the waiting strategy changes, modify one place.

---

## 📝 Real-Time QA Example 12 – Test Data Generation

Suppose multiple tests require unique users.

Instead of writing:

```
const email =
    `tester${Date.now()}@example.com`;
```

everywhere, create:

```
class TestDataGenerator {

    generateEmail() {

        return `tester${Date.now()}@example.com`;
    }

    generateUsername() {

        return `user_${Date.now()}`;
    }
}
```

Tests can simply call:

```
const email =
    testData.generateEmail();
```

Again:

**The test asks for data.**

**The utility decides how to generate it.**

---

## 📂 Real-Time QA Example 13 – Reading Configuration

Imagine every test directly reads environment variables.

```
const baseURL =
    process.env.BASE_URL;

const username =
    process.env.USERNAME;

const password =
    process.env.PASSWORD;
```

Instead:

```
class Config {

    getBaseURL() {
        return process.env.BASE_URL;
    }

    getUsername() {
        return process.env.USERNAME;
    }

    getPassword() {
        return process.env.PASSWORD;
    }
}
```

Test:

```
await page.goto(
    config.getBaseURL()
);
```

Tomorrow configuration might come from:

```
.env
JSON
YAML
AWS Secrets Manager
Azure Key Vault
CI/CD variables
```

Your test cases don't need to know.

---

## 🌍 Real-Time Example 14 – Food Delivery Application

When we click:

```
Place Order
```

the application may internally:

```
Validate restaurant
Check availability
Calculate taxes
Apply coupons
Validate address
Process payment
Create order
Assign delivery partner
Notify restaurant
Notify customer
```

Yet the user interacts with only:

```
order.placeOrder();
```

Again:

**Simple interface → Complex internal implementation**

That's abstraction.

---

## 🏦 Real-Time Example 15 – Banking Application

User performs:

```
bank.transferMoney(
    "AccountA",
    "AccountB",
    5000
);
```

Internally:

```
Authenticate customer
Validate beneficiary
Check balance
Check transaction limit
Run fraud checks
Debit source account
Credit destination account
Create transaction record
Send SMS
Send email
Generate transaction ID
```

The customer shouldn't manage these steps.

They are abstracted.

---

## 🔥 Abstraction in a Real Automation Framework

A well-designed framework may expose methods like:

```
loginPage.login();

dashboard.openProfile();

cart.addProduct();

checkout.placeOrder();

api.createUser();

database.getOrder();

reporter.logPass();

screenshot.capture();

browser.launch();

config.getEnvironment();
```

Compare that with tests containing:

```
CSS selectors
XPath
HTTP headers
SQL queries
Authentication code
Browser configuration
Wait strategies
Logging configuration
Screenshot paths
Environment handling
```

Which framework would be easier to maintain?

Clearly the first one.

---

## 🏗️ What Good Abstraction Makes a Test Look Like

Consider this test:

```
test("Customer should purchase a product",
async () => {

    await loginPage.login(
        "customer@example.com",
        "Password123"
    );

    await productPage.searchProduct(
        "Laptop"
    );

    await cartPage.addProduct();

    await checkoutPage.placeOrder();

    await orderPage.verifyOrderSuccess();

});
```

Even someone who doesn't know Playwright can understand:

```
Login
Search Product
Add Product
Place Order
Verify Order
```

That is one of the goals of good test automation design.

---

## 💡 The Golden Rule I Learned Today

A test case should primarily describe:

## WHAT the user is doing

rather than:

## HOW the framework performs it

For example:

❌ Low-level test:

```
await page.locator("#username")
          .fill("admin");

await page.locator("#password")
          .fill("password");

await page.locator("#login")
          .click();
```

✅ Abstracted test:

```
await loginPage.login(
    "admin",
    "password"
);
```

Much cleaner.

---

## 🎯 Why Abstraction Matters for QA Engineers

### 1️⃣ Better Readability

```
checkout.placeOrder();
```

communicates more business meaning than 20 lines of locators.

### 2️⃣ Better Maintainability

Change implementation in one place instead of hundreds of tests.

### 3️⃣ Better Reusability

Common actions can be reused across test cases.

### 4️⃣ Lower Duplication

Repeated automation logic moves into reusable components.

### 5️⃣ Easier Framework Migration

Suppose implementation changes from Selenium to Playwright.

If business-level test methods are properly abstracted, large portions of test logic can remain conceptually unchanged.

### 6️⃣ Easier Team Collaboration

New automation engineers don't need to understand every low-level implementation immediately.

### 7️⃣ Scalable Framework Architecture

Large frameworks naturally develop abstraction layers around:

```
Pages
APIs
Databases
Configuration
Reporting
Browser management
Test data
Authentication
Utilities
```

---

## ⚠️ But Can We Overuse Abstraction?

Yes.

Consider:

```
doAction();

performOperation();

executeSomething();
```

These methods hide complexity but tell us nothing.

Good abstraction should hide implementation while still clearly expressing intent.

Better:

```
loginUser();

createCustomer();

placeOrder();

cancelBooking();

generateInvoice();
```

Abstraction should improve readability — not hide meaning.

---

## 🧩 Abstraction in JavaScript

JavaScript doesn't have traditional abstract classes exactly like languages such as Java.

But we can still implement abstraction through:

```
Classes
Functions
Modules
Private methods
Higher-level APIs
Interfaces through design conventions
Base classes
Page Objects
Service layers
Utility layers
```

For example:

```
class Payment {

    pay() {
        throw new Error(
            "pay() must be implemented"
        );
    }
}
```

Child classes provide implementations:

```
class CreditCardPayment
    extends Payment {

    pay() {
        console.log(
            "Payment through Credit Card"
        );
    }
}
```

```
class UPIPayment
    extends Payment {

    pay() {
        console.log(
            "Payment through UPI"
        );
    }
}
```

Usage:

```
const payment =
    new UPIPayment();

payment.pay();
```

This also combines concepts we learned previously:

✅ Inheritance

✅ Polymorphism

✅ Encapsulation

✅ Abstraction

That's how OOP concepts start working together.

---

## 🧪 One Complete QA Automation Example

Let's combine everything.

```
class BasePage {

    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        await locator.click();
    }

    async type(locator, text) {
        await locator.fill(text);
    }
}
```

Login page:

```
class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.username =
            page.locator("#username");

        this.password =
            page.locator("#password");

        this.loginButton =
            page.locator("#login");
    }

    async login(username, password) {

        await this.type(
            this.username,
            username
        );

        await this.type(
            this.password,
            password
        );

        await this.click(
            this.loginButton
        );
    }
}
```

Test:

```
const loginPage =
    new LoginPage(page);

await loginPage.login(
    "tester@example.com",
    "Password123"
);
```

The test doesn't need to know:

```
Which locators are used
How fill() works
How click() works
How elements are initialized
How Playwright communicates with the browser
```

It simply performs:

```
loginPage.login();
```

And that is abstraction in action.

---

## 🌟 My Biggest Takeaway from Day 14

Before learning abstraction deeply, a method like:

```
loginPage.login();
```

looked like just a reusable function.

Now I understand the design principle behind it.

The method creates a **boundary between business intent and technical implementation** .

That is incredibly important in automation frameworks.

A well-designed test should read almost like a business scenario:

```
login();

searchProduct();

addToCart();

checkout();

verifyOrder();
```

while the framework handles all the technical complexity underneath.

---

## 📌 Day 14 Learning Summary

Today I learned:

✅ What abstraction means in JavaScript

✅ Abstraction vs encapsulation

✅ How abstraction hides implementation complexity

✅ How Page Object Model uses abstraction

✅ API abstraction

✅ Database abstraction

✅ Browser abstraction

✅ Reporting abstraction

✅ Wait utilities

✅ Configuration abstraction

✅ Test-data abstraction

✅ Payment and banking examples

✅ How abstraction improves automation framework scalability

✅ Why tests should focus on**WHAT**rather than**HOW**

---

## 🔥 One Line to Remember

> **Encapsulation protects the internal details. Abstraction prevents consumers from needing to understand those details.**

And in QA automation:

> **Your test should describe the business flow. Your framework should handle the technical complexity.**

---

🚀**Day 14/100 Completed – JavaScript Abstraction**

Every day, JavaScript is starting to connect more clearly with the way real automation frameworks are designed.

Tomorrow, the journey continues with another concept and more real-world QA automation examples.

#100DaysOfJavaScript #JavaScript #JavaScriptLearning #Abstraction #ObjectOrientedProgramming #OOP #QAAutomation #SoftwareTesting #AutomationTesting #Playwright #Selenium #TestAutomation #PageObjectModel #APItesting #QualityEngineering #QAEngineer #LearningInPublic
