
# 🚨 One Public Variable Can Break Your Entire Automation Framework!

## Day 13/100 — Encapsulation in JavaScript: Protecting Data and Building Reliable Automation Frameworks

Imagine that your automation framework stores the browser configuration like this:

```javascript
let browserName = "chrome";
```

Any part of the framework can modify it:

```javascript
browserName = "";
browserName = 123;
browserName = "unsupportedBrowser";
```

Now your tests start failing—but the actual reason is difficult to identify.

This is where **encapsulation** becomes valuable.

Encapsulation helps us protect important data, control how it is accessed, and prevent accidental changes from other parts of the application.

---

## 🔁 Quick Recap of Day 12

In Day 12, I learned about **polymorphism in JavaScript**.

* Different classes can provide different implementations of the same method.
* A common interface can work with Chrome, Firefox, and Edge objects.
* Method overriding helps make automation frameworks flexible.
* Polymorphism reduces browser-specific conditional logic in test scripts.

Today, let us explore another important object-oriented programming concept: **Encapsulation**.

---

# What Is Encapsulation?

Encapsulation means:

> Combining data and the methods that operate on that data inside a class while controlling access to internal details.

In simple terms, an object should protect its own data and decide how the outside world can interact with it.

Think about an ATM.

You can:

* Withdraw money
* Deposit money
* Check your balance

However, you cannot directly access the bank’s database and modify your account balance.

You must use the operations provided by the bank.

That is encapsulation.

---

# Why Do We Need Encapsulation?

Without encapsulation, any part of the program can directly modify important data.

This can result in:

* Invalid values
* Unexpected test failures
* Difficult debugging
* Security problems
* Tight coupling between classes
* Unmaintainable automation code

Encapsulation provides:

✅ Data protection
✅ Controlled access
✅ Input validation
✅ Better maintainability
✅ Easier debugging
✅ Reduced dependency between components
✅ Cleaner automation frameworks

---

# Public Properties in JavaScript

By default, properties created inside a JavaScript class are publicly accessible.

```javascript
class TestExecution {
    constructor(browserName, status) {
        this.browserName = browserName;
        this.status = status;
    }
}

const test = new TestExecution("Chrome", "Passed");

console.log(test.browserName);
console.log(test.status);
```

Output:

```text
Chrome
Passed
```

The properties can also be changed directly:

```javascript
test.browserName = "";
test.status = 123;

console.log(test);
```

JavaScript allows these modifications because the properties are public.

The object has no control over what values are assigned.

---

# Private Fields Using `#`

Modern JavaScript allows us to create truly private fields by using the `#` symbol.

```javascript
class TestExecution {
    #browserName;
    #status;

    constructor(browserName, status) {
        this.#browserName = browserName;
        this.#status = status;
    }

    displayResult() {
        console.log(
            `Browser: ${this.#browserName}, Status: ${this.#status}`
        );
    }
}

const test = new TestExecution("Chrome", "Passed");

test.displayResult();
```

Output:

```text
Browser: Chrome, Status: Passed
```

If we try to access a private field directly:

```javascript
console.log(test.#browserName);
```

JavaScript throws an error because `#browserName` can only be accessed from inside the class that declares it.

This protects the field from accidental modification.

---

# Public Versus Private Properties

| Public property                        | Private property                           |
| -------------------------------------- | ------------------------------------------ |
| Accessible from outside the class      | Accessible only inside the declaring class |
| Created using`this.property`         | Declared using`#property`                |
| Can be modified directly               | Cannot be modified directly                |
| Provides less control                  | Provides stronger data protection          |
| Suitable for openly shared information | Suitable for sensitive internal state      |

---

# What About the Underscore Convention?

You may see properties written like this:

```javascript
class User {
    constructor(name) {
        this._name = name;
    }
}
```

The underscore tells developers:

> “This property is intended for internal use.”

However, it does not make the property private.

The following code is still valid:

```javascript
const user = new User("Shankar");

user._name = "Changed Name";

console.log(user._name);
```

The underscore is only a naming convention.

For language-enforced privacy, use `#`.

---

# Getters and Setters

Private fields cannot be accessed directly from outside the class.

But sometimes we need to read or update them safely.

For this purpose, JavaScript provides:

* `get` to read a value
* `set` to update a value with validation

---

## Example: Encapsulating Test Configuration

```javascript
class TestConfig {
    #baseURL;
    #timeout;

    constructor(baseURL, timeout) {
        this.baseURL = baseURL;
        this.timeout = timeout;
    }

    get baseURL() {
        return this.#baseURL;
    }

    set baseURL(url) {
        if (
            typeof url !== "string" ||
            !url.startsWith("https://")
        ) {
            throw new Error(
                "Base URL must be a valid HTTPS URL"
            );
        }

        this.#baseURL = url;
    }

    get timeout() {
        return this.#timeout;
    }

    set timeout(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error(
                "Timeout must be a positive integer"
            );
        }

        this.#timeout = value;
    }
}

const config = new TestConfig(
    "https://test.example.com",
    30000
);

console.log(config.baseURL);
console.log(config.timeout);
```

Output:

```text
https://test.example.com
30000
```

Now let us try to assign an invalid URL:

```javascript
config.baseURL = "test.example.com";
```

Output:

```text
Error: Base URL must be a valid HTTPS URL
```

Let us try an invalid timeout:

```javascript
config.timeout = -5000;
```

Output:

```text
Error: Timeout must be a positive integer
```

The object does not blindly accept values.

It validates the data before updating its private fields.

---

# Why Use the Setter Inside the Constructor?

Notice this code:

```javascript
constructor(baseURL, timeout) {
    this.baseURL = baseURL;
    this.timeout = timeout;
}
```

The constructor uses the setters instead of directly assigning values:

```javascript
this.#baseURL = baseURL;
this.#timeout = timeout;
```

This ensures that validation is applied even when the object is created.

Without it, invalid data could enter the object through the constructor.

---

# Real-Time QA Automation Example

Page Object Model is a perfect example of encapsulation.

A test should know what action it wants to perform, but it should not need to know every locator or implementation detail.

Consider a Playwright login page:

```javascript
class LoginPage {
    #page;
    #usernameInput;
    #passwordInput;
    #loginButton;
    #errorMessage;

    constructor(page) {
        this.#page = page;
        this.#usernameInput =
            page.locator("#username");

        this.#passwordInput =
            page.locator("#password");

        this.#loginButton =
            page.locator("#login");

        this.#errorMessage =
            page.locator(".error-message");
    }

    async open() {
        await this.#page.goto(
            "https://app.example.com/login"
        );
    }

    async login(username, password) {
        if (!username || !password) {
            throw new Error(
                "Username and password are required"
            );
        }

        await this.#usernameInput.fill(username);
        await this.#passwordInput.fill(password);
        await this.#loginButton.click();
    }

    async getErrorMessage() {
        return await this.#errorMessage.textContent();
    }
}
```

The test can use the page object like this:

```javascript
const loginPage = new LoginPage(page);

await loginPage.open();
await loginPage.login(
    "tester@example.com",
    "Secure@123"
);
```

The test does not directly interact with:

* `#username`
* `#password`
* `#login`
* `.error-message`

Those locators remain private inside `LoginPage`.

The test interacts only through public methods such as:

```javascript
open()
login()
getErrorMessage()
```

This is encapsulation in a real automation framework.

---

# What Happens When a Locator Changes?

Suppose the development team changes:

```javascript
#login
```

to:

```javascript
button[type="submit"]
```

Only the `LoginPage` class needs to be updated:

```javascript
this.#loginButton =
    page.locator('button[type="submit"]');
```

The test remains unchanged:

```javascript
await loginPage.login(
    "tester@example.com",
    "Secure@123"
);
```

This is one of the biggest benefits of using encapsulation with the Page Object Model.

Implementation changes remain inside the class instead of affecting every test script.

---

# Encapsulation Is More Than Private Fields

Encapsulation does not mean making every field private.

It means exposing only what another component genuinely needs.

A well-encapsulated class provides:

* A simple public interface
* Protected internal data
* Validated updates
* Hidden implementation details
* Predictable behaviour

For example:

```javascript
class APIClient {
    #token;

    constructor(token) {
        if (!token) {
            throw new Error("API token is required");
        }

        this.#token = token;
    }

    async get(endpoint) {
        return fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${this.#token}`
            }
        });
    }
}
```

The calling test can make a request:

```javascript
const client = new APIClient("secure-token");

const response = await client.get(
    "https://api.example.com/users"
);
```

But it cannot directly access or modify the private token.

---

# Encapsulation in Selenium and Playwright Frameworks

In real automation projects, encapsulation can be applied to:

### Page Objects

Keep locators and page-level operations inside page classes.

### API Clients

Keep authentication headers, tokens, and request-building logic inside API utility classes.

### Test Configuration

Control browser names, URLs, timeouts, environments, and execution settings.

### Database Utilities

Hide connection details and expose only safe query methods.

### Reporting Utilities

Keep report creation, logging, screenshot attachment, and result publishing inside reusable components.

### Test Data Builders

Validate required fields before generating test data.

---

# Encapsulation and Security

Encapsulation can reduce accidental access to sensitive information, but private class fields should not be treated as complete security protection.

For example, never hardcode real credentials:

```javascript
const client = new APIClient("production-secret-token");
```

Sensitive values should be loaded securely through approved environment variables or secret-management systems.

Encapsulation protects the design of the object, but it does not replace proper secrets management.

---

# Common Mistakes to Avoid

## ❌ Making Everything Public

When every locator and configuration value is public, any test can modify the internal state.

## ❌ Making Everything Private

Excessive restriction can make a class difficult to use. Expose the operations that callers genuinely need.

## ❌ Using Getters and Setters Without Validation

This setter provides no additional control:

```javascript
set status(value) {
    this.#status = value;
}
```

A meaningful setter should validate or normalize the value.

## ❌ Exposing Private Data Through a Getter

A private field loses much of its protection if the getter returns mutable internal data directly.

## ❌ Hardcoding Sensitive Information

Private fields do not make hardcoded passwords or API tokens safe.

## ❌ Mixing Test Logic With Page Logic

Page classes should contain page interactions. Test assertions and business scenarios should remain clear in the test layer.

---

# Practical Exercise for Day 13

Create a class named `TestResult` with the following requirements:

* Private fields: `testName`, `status`, and `executionTime`
* Status must accept only `Passed`, `Failed`, or `Skipped`
* Execution time must be a non-negative number
* Provide getters for all three fields
* Provide controlled setters for status and execution time
* Add a method called `displayResult()`

Example usage:

```javascript
const result = new TestResult(
    "Valid Login Test",
    "Passed",
    1250
);

result.displayResult();

result.status = "Failed";
result.executionTime = 1500;

result.displayResult();
```

Expected output:

```text
Test: Valid Login Test
Status: Passed
Execution Time: 1250 ms

Test: Valid Login Test
Status: Failed
Execution Time: 1500 ms
```

Try passing invalid values and observe how the class protects its internal data.

---

# Key Takeaways

✅ Encapsulation combines data and related behaviour inside a class.

✅ JavaScript properties are public by default.

✅ The `#` syntax creates language-enforced private fields.

✅ An underscore is only a naming convention and does not provide privacy.

✅ Getters provide controlled read access.

✅ Setters provide controlled update access and validation.

✅ Page Object Model uses encapsulation to hide locators and implementation details.

✅ Encapsulation makes automation frameworks safer, cleaner, and easier to maintain.

---

A good automation framework should not expose every internal detail.

It should provide clear actions such as:

```javascript
login()
searchProduct()
placeOrder()
createUser()
getResponse()
```

while keeping locators, validations, tokens, and internal operations protected.

That is the real power of encapsulation:

> Hide complexity. Protect data. Expose meaningful behaviour.

🚀 **Day 13 of my 100 Days of JavaScript Learning Challenge completed!**

In Day 14, I will explore **Abstraction in JavaScript** and understand how QA engineers can hide complex implementation details behind simple, reusable interfaces.

💬 Where have you used encapsulation in your Selenium, Playwright, API, or Page Object Model framework?

#100DaysOfJavaScript #JavaScript #Encapsulation #OOP #ObjectOrientedProgramming #QAAutomation #Playwright #Selenium #TestAutomation #SoftwareTesting #QualityAssurance #LearningInPublic
