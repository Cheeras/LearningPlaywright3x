
# 🚀 Day 09/100 – JavaScript Objects: The Backbone of Real-World Automation Test Data

Imagine your automation test needs to handle a user with:

* Name
* Email
* Password
* Role
* Account status
* Browser preference
* Address
* Permissions

Would you create a separate variable for every piece of information?

```javascript
let name = "Shankar";
let email = "shankar@test.com";
let password = "Admin@123";
let role = "Admin";
let status = "Active";
```

You *can*.

But as the application grows, managing hundreds of individual variables quickly becomes difficult.

This is exactly where **JavaScript Objects** become powerful.

As part of my **#100DaysOfJavaScript** learning journey, today I explored one of the most important concepts for anyone planning to work with **Playwright, API Testing, JSON, test automation frameworks, and real-world JavaScript applications**.

## 📌 JavaScript Objects

Before jumping into Objects, here is a quick recap of **Day 08 – JavaScript Strings**.

Yesterday, I learned:

✅ Creating and accessing strings
✅ String indexing
✅ String properties and methods
✅ `length`, `includes()`, `substring()`, `slice()`
✅ `toUpperCase()` and `toLowerCase()`
✅ String manipulation techniques

Today, let's understand how JavaScript represents **real-world data**.

---

# 🔹 What is a JavaScript Object?

A JavaScript Object is a collection of **key-value pairs**.

For example, consider a user in an application.

```javascript
const user = {
    name: "Shankar",
    email: "shankar@test.com",
    role: "Admin",
    experience: 12,
    active: true
};
```

Here:

```text
name       → "Shankar"
email      → "shankar@test.com"
role       → "Admin"
experience → 12
active     → true
```

The left side represents the **property/key**.

The right side represents the **value**.

Instead of maintaining five separate variables, all information related to the user is grouped together.

That's exactly how we model real-world entities.

For example:

```text
User
Employee
Product
Test Case
API Response
Browser Configuration
Environment Configuration
```

All of them can naturally be represented using JavaScript objects.

---

# 🔹 Accessing Object Properties

There are two common ways to access an object's properties.

## 1️⃣ Dot Notation

```javascript
console.log(user.name);
console.log(user.email);
console.log(user.role);
```

Output:

```text
Shankar
shankar@test.com
Admin
```

Dot notation is the most common and readable approach.

---

## 2️⃣ Bracket Notation

We can also access properties using:

```javascript
console.log(user["name"]);
console.log(user["email"]);
```

Output:

```text
Shankar
shankar@test.com
```

You might wonder:

**If dot notation is easier, why do we need bracket notation?**

Because bracket notation becomes extremely useful when property names are dynamic.

Consider:

```javascript
const propertyName = "email";

console.log(user[propertyName]);
```

Output:

```text
shankar@test.com
```

Here JavaScript evaluates the value stored inside `propertyName`.

Effectively:

```javascript
user[propertyName]
```

becomes:

```javascript
user["email"]
```

---

# 🔥 Real-Time Automation Example – Dynamic Validation

Imagine your automation framework receives the property that needs to be validated dynamically.

```javascript
const user = {
    username: "admin",
    role: "Administrator",
    status: "Active"
};

const fieldToValidate = "status";

console.log(user[fieldToValidate]);
```

Output:

```text
Active
```

This pattern can be very useful when creating **data-driven automation frameworks**.

---

# 🔹 When is Bracket Notation Mandatory?

Consider this object:

```javascript
const employee = {
    name: "Shankar",
    "employee id": 101
};
```

We can access:

```javascript
console.log(employee.name);
```

But this is invalid:

```javascript
employee.employee id
```

Because the property contains a space.

Instead, we need:

```javascript
console.log(employee["employee id"]);
```

So a simple rule is:

```text
Normal property name
        ↓
   Dot notation

Dynamic property / special characters
        ↓
  Bracket notation
```

---

# 🔹 Adding New Properties to an Object

JavaScript objects are dynamic.

We can create an object first:

```javascript
const tester = {
    name: "Shankar",
    role: "QA Automation Engineer"
};
```

Then add another property later.

```javascript
tester.experience = 12;
```

Now:

```javascript
console.log(tester);
```

Output:

```javascript
{
    name: "Shankar",
    role: "QA Automation Engineer",
    experience: 12
}
```

Notice something interesting.

We never declared:

```javascript
experience
```

when creating the object.

JavaScript allows us to add properties dynamically.

---

# 🔹 Updating Object Properties

Suppose our test execution starts with:

```javascript
const testCase = {
    id: "TC001",
    scenario: "Verify valid login",
    status: "Not Executed"
};
```

After execution, the test passes.

We can update the status:

```javascript
testCase.status = "Passed";
```

Now:

```javascript
console.log(testCase.status);
```

Output:

```text
Passed
```

This is a very realistic automation scenario.

A test object could move through states like:

```text
Not Executed
      ↓
Running
      ↓
Passed / Failed
```

---

# 🔹 Deleting Object Properties

JavaScript provides the `delete` keyword.

```javascript
const user = {
    username: "admin",
    password: "Admin@123",
    temporaryToken: "XYZ123"
};

delete user.temporaryToken;

console.log(user);
```

Output:

```javascript
{
    username: "admin",
    password: "Admin@123"
}
```

---

# 🔹 Objects Can Store Different Data Types

An object isn't restricted to one data type.

Consider a test execution object:

```javascript
const testExecution = {

    testCaseId: "TC101",

    responseTime: 1200,

    passed: true,

    errorMessage: null,

    browsers: ["Chrome", "Firefox", "Edge"]

};
```

Here we have:

```text
testCaseId    → String

responseTime  → Number

passed        → Boolean

errorMessage  → Null

browsers      → Array
```

One object can therefore represent very complex information.

---

# 🔥 Real-Time Example – Automation Test Configuration

Imagine we're developing a Playwright automation framework.

Instead of maintaining multiple variables:

```javascript
let browser = "Chrome";
let baseURL = "https://example.com";
let timeout = 30000;
let headless = true;
```

We can create a configuration object.

```javascript
const config = {

    browser: "Chrome",

    baseURL: "https://example.com",

    timeout: 30000,

    headless: true

};
```

Now our framework can access:

```javascript
console.log(config.browser);

console.log(config.baseURL);

console.log(config.timeout);
```

This makes our configuration much easier to organize.

---

# 🔹 Nested Objects

Objects can contain other objects.

This concept is extremely important when working with **API responses and JSON**.

Consider:

```javascript
const user = {

    name: "Shankar",

    role: "QA Engineer",

    address: {

        city: "Hyderabad",

        state: "Telangana",

        country: "India"

    }

};
```

Here `address` itself is another object.

To access the city:

```javascript
console.log(user.address.city);
```

Output:

```text
Hyderabad
```

Think about the hierarchy:

```text
user
 ↓
address
 ↓
city
```

Therefore:

```javascript
user.address.city
```

---

# 🔥 Real-Time API Testing Example

Imagine an API returns the following JSON-style response:

```javascript
const responseData = {

    status: 200,

    message: "User retrieved successfully",

    data: {

        id: 101,

        name: "Shankar",

        role: "QA Automation Engineer",

        active: true,

        address: {

            city: "Hyderabad",

            country: "India"

        }

    }

};
```

Suppose we want to validate the HTTP status.

```javascript
console.log(responseData.status);
```

Output:

```text
200
```

Validate the user's role:

```javascript
console.log(responseData.data.role);
```

Output:

```text
QA Automation Engineer
```

Validate the city:

```javascript
console.log(responseData.data.address.city);
```

Output:

```text
Hyderabad
```

This is exactly why understanding nested objects is essential before moving deeply into **API automation**.

---

# 🔹 Arrays Inside Objects

Objects can contain arrays.

Example:

```javascript
const automationTester = {

    name: "Shankar",

    skills: [
        "Selenium",
        "Playwright",
        "JavaScript",
        "API Testing"
    ]

};
```

To access Playwright:

```javascript
console.log(automationTester.skills[1]);
```

Output:

```text
Playwright
```

Because array indexing starts from `0`.

```text
0 → Selenium
1 → Playwright
2 → JavaScript
3 → API Testing
```

---

# 🔥 Real-Time Example – Browser Configuration

Imagine our automation framework supports multiple browsers.

```javascript
const testConfig = {

    environment: "QA",

    browsers: [
        "Chrome",
        "Firefox",
        "Edge"
    ]

};
```

We can access:

```javascript
console.log(testConfig.browsers[0]);
```

Output:

```text
Chrome
```

Or iterate through them:

```javascript
for (const browser of testConfig.browsers) {

    console.log(`Running tests on ${browser}`);

}
```

Output:

```text
Running tests on Chrome

Running tests on Firefox

Running tests on Edge
```

Now Objects and Arrays start working together.

---

# 🔹 Objects Inside Arrays

This structure is extremely common in test automation.

Consider multiple application users.

```javascript
const users = [

    {
        username: "admin@test.com",
        password: "Admin@123",
        role: "Admin"
    },

    {
        username: "tester@test.com",
        password: "Tester@123",
        role: "Tester"
    },

    {
        username: "developer@test.com",
        password: "Developer@123",
        role: "Developer"
    }

];
```

To get the second user's role:

```javascript
console.log(users[1].role);
```

Output:

```text
Tester
```

Let's break it down.

```javascript
users[1]
```

returns:

```javascript
{
    username: "tester@test.com",
    password: "Tester@123",
    role: "Tester"
}
```

Then:

```javascript
users[1].role
```

returns:

```text
Tester
```

---

# 🔥 Real-Time Playwright Example – Data-Driven Login Testing

Now let's connect everything with a practical automation scenario.

Suppose we want to test multiple login users.

```javascript
const users = [

    {
        username: "admin@test.com",
        password: "Admin@123",
        expectedResult: "success"
    },

    {
        username: "wrong@test.com",
        password: "Wrong@123",
        expectedResult: "failure"
    }

];
```

We could run our tests using:

```javascript
for (const user of users) {

    await page.fill("#email", user.username);

    await page.fill("#password", user.password);

    await page.click("#login");

    console.log(user.expectedResult);

}
```

Now the automation logic remains the same.

Only test data changes.

This is the foundation of **data-driven testing**.

Instead of writing separate tests with hard-coded data, we store our test data as objects.

---

# 🔹 Object Methods

Objects can contain functions as values.

When a function belongs to an object, we commonly call it a **method**.

Example:

```javascript
const calculator = {

    add: function(a, b) {

        return a + b;

    }

};
```

Calling the method:

```javascript
console.log(calculator.add(10, 20));
```

Output:

```text
30
```

---

# 🔥 Real-Time Automation Example

Consider a simple browser object.

```javascript
const browser = {

    name: "Chrome",

    launch: function() {

        console.log("Launching Chrome browser");

    }

};
```

Calling:

```javascript
browser.launch();
```

Output:

```text
Launching Chrome browser
```

This introduces an important idea:

An object can contain both:

```text
Properties → Data

Methods → Behaviour
```

For example:

```text
Browser Object
│
├── name
├── version
├── headless
│
├── launch()
├── close()
└── refresh()
```

This concept becomes even more important when we start learning **JavaScript Classes**.

---

# 🔹 Understanding `this`

Consider:

```javascript
const tester = {

    name: "Shankar",

    role: "QA Automation Engineer",

    displayProfile: function() {

        console.log(this.name);

        console.log(this.role);

    }

};
```

Call:

```javascript
tester.displayProfile();
```

Output:

```text
Shankar
QA Automation Engineer
```

Here:

```javascript
this.name
```

means:

> Access the `name` property belonging to the current object.

In this example:

```javascript
this
```

refers to:

```javascript
tester
```

Therefore:

```javascript
this.name
```

behaves like:

```javascript
tester.name
```

Understanding `this` becomes extremely important when we move into:

```text
Objects
   ↓
Constructors
   ↓
Classes
   ↓
Page Object Model
```

---

# 🔹 Looping Through an Object Using `for...in`

Suppose:

```javascript
const tester = {

    name: "Shankar",

    role: "Automation Engineer",

    tool: "Playwright",

    language: "JavaScript"

};
```

We can loop through all properties.

```javascript
for (const key in tester) {

    console.log(key);

}
```

Output:

```text
name
role
tool
language
```

What if we want values also?

```javascript
for (const key in tester) {

    console.log(key, tester[key]);

}
```

Output:

```text
name Shankar
role Automation Engineer
tool Playwright
language JavaScript
```

Notice something important.

We used:

```javascript
tester[key]
```

not:

```javascript
tester.key
```

Because `key` is a variable.

During each iteration:

```text
key = "name"

key = "role"

key = "tool"

key = "language"
```

Bracket notation allows JavaScript to dynamically evaluate those property names.

---

# 🔹 Object.keys()

`Object.keys()` returns all property names.

```javascript
const user = {

    name: "Shankar",

    role: "Tester",

    experience: 12

};

console.log(Object.keys(user));
```

Output:

```javascript
["name", "role", "experience"]
```

---

# 🔹 Object.values()

`Object.values()` returns all property values.

```javascript
console.log(Object.values(user));
```

Output:

```javascript
["Shankar", "Tester", 12]
```

---

# 🔹 Object.entries()

`Object.entries()` returns both keys and values.

```javascript
console.log(Object.entries(user));
```

Output:

```javascript
[
    ["name", "Shankar"],
    ["role", "Tester"],
    ["experience", 12]
]
```

This can be useful when iterating through test configurations and test data.

---

# 🔥 One Important Concept – Objects are Reference Types

Consider this example carefully.

```javascript
const user1 = {

    name: "Shankar"

};

const user2 = user1;
```

Now modify:

```javascript
user2.name = "John";
```

What will this print?

```javascript
console.log(user1.name);
```

You might expect:

```text
Shankar
```

But the output is:

```text
John
```

Why?

Because:

```javascript
const user2 = user1;
```

doesn't create a completely independent object.

Both variables refer to the **same object in memory**.

Conceptually:

```text
user1 ────────┐
              │
              ↓
        { name: "John" }
              ↑
              │
user2 ────────┘
```

So changing the object using `user2` is visible through `user1` as well.

This concept becomes very important when we later explore:

```text
Spread Operator
Shallow Copy
Deep Copy
Object.assign()
Structured Clone
```

---

# 🚀 Complete Real-Time Automation Example

Now let's combine everything.

Imagine we are building an automation framework for a login application.

Our test data might look like:

```javascript
const testData = {

    environment: {

        name: "QA",

        baseURL: "https://example.com/login"

    },

    browsers: [

        "Chrome",

        "Firefox"

    ],

    users: {

        validUser: {

            email: "admin@test.com",

            password: "Admin@123",

            expectedResult: "Dashboard"

        },

        invalidUser: {

            email: "wrong@test.com",

            password: "Wrong@123",

            expectedResult: "Invalid credentials"

        }

    }

};
```

Now our Playwright test can use:

```javascript
await page.goto(testData.environment.baseURL);
```

Login using valid user:

```javascript
await page.fill(
    "#email",
    testData.users.validUser.email
);

await page.fill(
    "#password",
    testData.users.validUser.password
);

await page.click("#login");
```

Validate expected result:

```javascript
console.log(
    testData.users.validUser.expectedResult
);
```

The object hierarchy looks like:

```text
testData
│
├── environment
│      ├── name
│      └── baseURL
│
├── browsers
│      ├── Chrome
│      └── Firefox
│
└── users
       │
       ├── validUser
       │      ├── email
       │      ├── password
       │      └── expectedResult
       │
       └── invalidUser
              ├── email
              ├── password
              └── expectedResult
```

This is where JavaScript Objects stop looking like just another programming concept.

They become the foundation for organizing a **real automation framework**.

---

# 🎯 Where Will an Automation Tester Use Objects?

Objects appear almost everywhere.

✅ **API Responses**

```javascript
response.data.user.name
```

✅ **Test Data**

```javascript
testData.validUser.email
```

✅ **Environment Configuration**

```javascript
config.qa.baseURL
```

✅ **Browser Configuration**

```javascript
config.browser.headless
```

✅ **Page Objects**

```javascript
loginPage.login()
```

✅ **JSON Files**

```javascript
{
    "username": "admin",
    "role": "Admin"
}
```

✅ **Playwright Fixtures**

Objects are extensively used when configuring and sharing test fixtures.

✅ **API Request Payloads**

For example:

```javascript
const requestBody = {

    name: "Shankar",

    role: "QA Engineer",

    active: true

};
```

Then it can be sent as part of an API request.

---

# 🧠 Day 09 Practice Challenge

Try solving these problems without looking at the solution.

1️⃣ Create an `employee` object containing:

```text
Name
Employee ID
Role
Salary
```

2️⃣ Add a new `department` property.

3️⃣ Update the salary.

4️⃣ Delete one property.

5️⃣ Create an object containing three browsers.

6️⃣ Create a nested object containing:

```text
User
 └── Address
      ├── City
      ├── State
      └── Country
```

7️⃣ Create three test users using an **Array of Objects**.

8️⃣ Print all properties using `for...in`.

9️⃣ Print keys using:

```javascript
Object.keys()
```

🔟 Print values using:

```javascript
Object.values()
```

---

# 💡 My Biggest Takeaway from Day 09

Before learning Objects, we usually think about data individually:

```text
username
password
role
status
browser
```

After understanding Objects, we start thinking about data structurally:

```javascript
const user = {

    username: "admin@test.com",

    password: "Admin@123",

    role: "Admin",

    status: "Active"

};
```

And this way of thinking becomes extremely important when working with:

**JavaScript → JSON → APIs → Playwright → Automation Frameworks**

The biggest takeaway for me is:

> **Arrays help us manage collections of data, while Objects help us represent real-world entities. Combining Arrays + Objects gives us the data structures used throughout modern automation frameworks.**

Tomorrow, I will continue with another important JavaScript concept and connect it with practical automation testing examples.

🚀 **Day 09/100 completed!**

#100DaysOfJavaScript #JavaScript #JavaScriptLearning #AutomationTesting #QAEngineering #QAAutomation #Playwright #PlaywrightTesting #APITesting #SoftwareTesting #TestAutomation #SDET #QualityEngineering #LearningInPublic
