
# 🚨 Day 17/100 – If You Don’t Understand this in JavaScript, Classes, Objects amp; Playwright Will Keep Confusing You!



You write this code:

class LoginPage {

    constructor(page) {
        this.page = page;
    }

}
Then you see:

this.page
and naturally start asking:

🤔 Who created this.page?

🤔 Where was this declared?

🤔 What exactly does this point to?

🤔 Why does this work inside classes?

🤔 Why does the same this behave differently inside arrow functions?

🤔 And why do almost every Playwright and WebdriverIO framework use this everywhere?

If you have ever had these questions, you are not alone.

🔥 Understanding this is one of those moments where JavaScript suddenly starts making much more sense.

Today, on Day 17 of my #100DaysOfJavaScript journey, I explored one of the most important concepts in JavaScript:

👉 The this Keyword
And as a QA Automation Engineer, this topic immediately connected JavaScript fundamentals with real automation framework design.

🔁 Quick Recap – Day 16
On Day 16, I learned about:

🔗 The Prototype Chain
I understood how JavaScript searches for properties and methods through an object's prototype.

Example:

const user = {

    login() {
        console.log("User logged in");
    }

};

const admin = Object.create(user);

admin.login();
Even though admin doesn't directly contain login(), JavaScript searches the prototype chain and finds it.

That helped me understand how inheritance works internally.

Today, I moved to another concept deeply connected with:

✅ Objects

✅ Methods

✅ Constructors

✅ Classes

✅ Inheritance

✅ Prototypes

✅ Callbacks

✅ Automation frameworks

And that concept is:

🔥 this
🧠 First Question: What Exactly Is this?
In simple terms:

this refers to the object associated with the current function execution.
But there is one rule that completely changes how we understand it:

🚨 this depends mainly on HOW the function is called.
Not simply where the function was written.

This is probably the most important sentence in today's learning.

1️⃣ Understanding this With a Simple Object
Let's start with a simple example.

const tester = {

    name: "Shankar",

    role: "QA Automation Engineer",

    showDetails() {

        console.log(this.name);
        console.log(this.role);

    }

};

tester.showDetails();
Output:

Shankar
QA Automation Engineer
Inside:

showDetails()
the value of:

this
is:

tester
So:

this.name
is essentially accessing:

tester.name
And:

this.role
accesses:

tester.role
🌍 A Simple Real-Life Analogy
Imagine two people introducing themselves.

Shankar says:

"My role is QA Automation Engineer."
Ravi says:

"My role is Developer."
The word:

"my"

changes depending on who is speaking.

JavaScript's:

this
works in a similar way.

Its value depends on the execution context.

2️⃣ Why Do We Need this?
You might ask:

Why not simply write:

tester.name
inside the method?

For example:

const tester = {

    name: "Shankar",

    showName() {

        console.log(tester.name);

    }

};
Yes, this works.

But now the method is tightly connected to:

tester
Using:

this.name
makes the method work based on whichever object is calling it.

That makes our code:

✅ Flexible

✅ Reusable

✅ Object-oriented

✅ Easier to maintain

3️⃣ Same Method, Different Objects
Consider:

const chrome = {

    browserName: "Chrome",

    launch() {
        console.log(`Launching ${this.browserName}`);
    }

};

const firefox = {

    browserName: "Firefox",

    launch() {
        console.log(`Launching ${this.browserName}`);
    }

};

chrome.launch();

firefox.launch();
Output:

Launching Chrome
Launching Firefox
When we call:

chrome.launch();
this refers to:

chrome
When we call:

firefox.launch();
this refers to:

firefox
That is the power of this.

4️⃣ Understanding this Inside a Class
Now let's move closer to real automation code.

class Browser {

    constructor(browserName) {

        this.browserName = browserName;

    }

    launch() {

        console.log(
            `Launching ${this.browserName}`
        );

    }

}

const chrome =
    new Browser("Chrome");

const firefox =
    new Browser("Firefox");

chrome.launch();

firefox.launch();
Output:

Launching Chrome
Launching Firefox
The important line is:

this.browserName = browserName;
Let's understand it clearly.

🤔 Where Did this.browserName Come From?
This is one question I had while learning JavaScript classes.

We never declared:

let browserName;
inside the object.

Still we write:

this.browserName = browserName;
How?

Because JavaScript allows object properties to be created dynamically.

When we write:

this.browserName = browserName;
we are saying:

Create a browserName property on the current object.
For:

const chrome =
    new Browser("Chrome");
the current object is:

chrome
Conceptually:

chrome.browserName = "Chrome";
For:

const firefox =
    new Browser("Firefox");
conceptually:

firefox.browserName = "Firefox";
5️⃣ What Does new Have to Do With this?
Consider:

const tester =
    new Tester("Shankar");
When JavaScript sees:

new Tester()
it essentially performs several steps.

At a high level:

Creates a new empty object.
Connects that object to the constructor's prototype.
Makes this point to the newly created object.
Executes the constructor.
Returns the new object.

Example:

function Tester(name) {

    this.name = name;

}

const tester =
    new Tester("Shankar");
Inside the constructor:

this.name = name;
means:

tester.name = "Shankar";
🔥 This Connects Directly With Day 16
Yesterday, I learned:

Prototype Chain
Today:

new + this
connects that learning.

When we create an object using:

new
JavaScript doesn't just create properties.

It also connects the object to the constructor's prototype.

So concepts like:

Objects
      ↓
Constructors
      ↓
this
      ↓
Prototype
      ↓
Prototype Chain
are all connected.

That was one of my biggest realizations today.

6️⃣ Real-Time QA Automation Example
Now let's see why this matters so much for automation engineers.

Imagine we build a Playwright Page Object.

class LoginPage {

    constructor(page) {

        this.page = page;

        this.username =
            page.locator("#username");

        this.password =
            page.locator("#password");

        this.loginButton =
            page.locator("#login");

    }

}
Look at:

this.page
this.username
this.password
this.loginButton
What are these?

They are properties belonging to the current LoginPage object.

Now we can write:

async login(username, password) {

    await this.username.fill(username);

    await this.password.fill(password);

    await this.loginButton.click();

}
This is exactly where JavaScript fundamentals start connecting with real automation framework development.

7️⃣ Full Playwright Page Object Example
class LoginPage {

    constructor(page) {

        this.page = page;

        this.usernameInput =
            page.locator("#username");

        this.passwordInput =
            page.locator("#password");

        this.loginButton =
            page.locator("#login");

    }

    async navigate() {

        await this.page.goto(
            "https://example.com/login"
        );

    }

    async enterUsername(username) {

        await this.usernameInput.fill(
            username
        );

    }

    async enterPassword(password) {

        await this.passwordInput.fill(
            password
        );

    }

    async clickLogin() {

        await this.loginButton.click();

    }

    async login(username, password) {

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickLogin();

    }

}
Then:

const loginPage =
    new LoginPage(page);

await loginPage.navigate();

await loginPage.login(
    "admin",
    "Test@123"
);
Now the code:

this.page
doesn't look mysterious anymore.

It represents the page property belonging to that particular LoginPage object.

8️⃣ What Happens With Multiple Page Objects?
Let's say:

const loginPage =
    new LoginPage(page1);

const adminLoginPage =
    new LoginPage(page2);
Now:

loginPage.page
can hold:

page1
while:

adminLoginPage.page
can hold:

page2
Same class.

Different objects.

Different state.

That's exactly why this is so useful.

9️⃣ this Inside a Regular Function
Now things get slightly interesting.

function showThis() {

    console.log(this);

}

showThis();
What is this here?

The answer depends on factors such as:

✅ Strict mode

✅ Browser environment

✅ Modules

✅ How the function is invoked

For example:

"use strict";

function showThis() {

    console.log(this);

}

showThis();
In strict mode, a plain function call gives:

undefined
for this.

This teaches us another important lesson:

🚨 this does NOT automatically mean the current function.
🔟 One of the Most Common JavaScript Bugs – Losing this
Consider:

const tester = {

    name: "Shankar",

    showName() {

        console.log(this.name);

    }

};

tester.showName();
Output:

Shankar
Everything looks good.

Now let's do this:

const displayName =
    tester.showName;

displayName();
Suddenly the expected object context is lost.

Why?

Earlier we had:

tester.showName();
Here JavaScript knows:

this = tester
But now:

displayName();
there is no tester object before the function call.

This is called:

🔥 Losing the this Context
1️⃣1️⃣ A Simple Rule That Helps Understand this
When you see:

object.method();
look at the object before the dot.

Example:

tester.showName();
Inside the method:

this
usually refers to:

tester
Another example:

loginPage.login();
Inside:

login()
this refers to:

loginPage
This rule makes many this problems easier to understand.

1️⃣2️⃣ this With Arrow Functions 🚨
Now comes one of the most important interview concepts.

Consider:

const tester = {

    name: "Shankar",

    showName: () => {

        console.log(this.name);

    }

};

tester.showName();
Many beginners expect:

Shankar
But that usually won't happen.

Why?

Because:

🚨 Arrow Functions Do NOT Have Their Own this
Instead, arrow functions inherit this from the surrounding lexical scope.

This behavior is called:

👉 Lexical this
Regular Function vs Arrow Function
Regular object method:

const tester = {

    name: "Shankar",

    showName() {

        console.log(this.name);

    }

};
Call:

tester.showName();
Here:

this
refers to:

tester
But with:

const tester = {

    name: "Shankar",

    showName: () => {

        console.log(this.name);

    }

};
the arrow function doesn't get:

tester
as its this.

Instead, it inherits this from the surrounding scope.

1️⃣3️⃣ Then Why Do We Use Arrow Functions So Much?
Because lexical this becomes extremely useful inside callbacks.

Example:

const testSuite = {

    suiteName: "Login Regression",

    execute() {

        const testCases = [

            "Valid Login",

            "Invalid Login",

            "Locked User"

        ];

        testCases.forEach((test) => {

            console.log(
                `${this.suiteName}: ${test}`
            );

        });

    }

};

testSuite.execute();
Output:

Login Regression: Valid Login
Login Regression: Invalid Login
Login Regression: Locked User
Why does:

this.suiteName
work?

Because the arrow function inside:

forEach()
inherits this from:

execute()
And when:

testSuite.execute();
is called:

this = testSuite
1️⃣4️⃣ Real-Time Automation Example
Imagine a test runner.

class TestRunner {

    constructor(environment) {

        this.environment =
            environment;

    }

    executeTests() {

        const tests = [

            "Login Test",

            "Checkout Test",

            "Payment Test"

        ];

        tests.forEach((test) => {

            console.log(
                `Executing ${test} on ${this.environment}`
            );

        });

    }

}

const runner =
    new TestRunner("QA");

runner.executeTests();
Output:

Executing Login Test on QA
Executing Checkout Test on QA
Executing Payment Test on QA
The arrow function keeps access to:

this.environment
from the surrounding class method.

1️⃣5️⃣ this Inside Browser Event Handlers
Consider:

<button id="loginButton">
    Login
</button> 
JavaScript:

const button =
    document.querySelector(
        "#loginButton"
    );

button.addEventListener(
    "click",
    function () {

        console.log(this);

    }
);
Inside a traditional event listener function:

this
typically refers to the element handling the event.

In this case:

button
But if we write:

button.addEventListener(
    "click",
    () => {

        console.log(this);

    }
);
the arrow function doesn't create its own this.

It inherits it from the surrounding scope.

Again:

🔥 Regular function → invocation-based this

🔥 Arrow function → lexical this

1️⃣6️⃣ Can We Manually Control this?
Yes.

JavaScript provides three important methods:

call()

apply()

bind()
These allow us to control the value of this.

1️⃣7️⃣ call() Example
function introduce() {

    console.log(
        `My name is ${this.name}`
    );

}

const tester = {

    name: "Shankar"

};

introduce.call(tester);
Output:

My name is Shankar
Here we explicitly tell JavaScript:

Use tester as this.
So:

this.name
becomes:

tester.name
1️⃣8️⃣ apply() Example
function executeTest(
    browser,
    environment
) {

    console.log(
        `${this.name} is testing on ${browser} in ${environment}`
    );

}

const tester = {

    name: "Shankar"

};

executeTest.apply(
    tester,
    ["Chrome", "QA"]
);
Output:

Shankar is testing on Chrome in QA
apply() works similarly to call().

The main difference:

call()
Arguments are passed separately.

executeTest.call(
    tester,
    "Chrome",
    "QA"
);
apply()
Arguments are passed as an array.

executeTest.apply(
    tester,
    ["Chrome", "QA"]
);
1️⃣9️⃣ bind() Example
bind() behaves slightly differently.

It does not execute the function immediately.

Instead, it returns a new function with a fixed this.

Example:

const tester = {

    name: "Shankar",

    showName() {

        console.log(this.name);

    }

};

const show =
    tester.showName.bind(tester);

show();
Output:

Shankar
Even though:

showName
was detached from:

tester
bind() preserves the correct this.

2️⃣0️⃣ Real Automation Problem – Losing this
Imagine:

class LoginPage {

    constructor(page) {

        this.page = page;

    }

    async login() {

        console.log(this.page);

    }

}
Normal call:

const loginPage =
    new LoginPage(page);

loginPage.login();
works because:

this = loginPage
But:

const login =
    loginPage.login;

login();
can lose the correct this.

One way to preserve it:

const login =
    loginPage.login.bind(loginPage);

login();
Now the function remains connected to:

loginPage
2️⃣1️⃣ this With Inheritance
Let's connect this with the topics from previous days.

class BasePage {

    constructor(page) {

        this.page = page;

    }

    async getTitle() {

        return await this.page.title();

    }

}
Child class:

class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.loginButton =
            page.locator("#login");

    }

    async clickLogin() {

        await this.loginButton.click();

    }

}
Now:

const loginPage =
    new LoginPage(page);
The object has access to:

this.page
from the parent constructor.

And:

this.loginButton
from the child constructor.

Now several JavaScript concepts connect together:

Class
  ↓
Constructor
  ↓
this
  ↓
Inheritance
  ↓
super()
  ↓
Prototype Chain
That's when JavaScript OOP starts becoming much clearer.

🧪 Real-Time Page Object Model Example
Imagine a complete automation flow:

class BasePage {

    constructor(page) {

        this.page = page;

    }

    async open(url) {

        await this.page.goto(url);

    }

}
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

    async login(user, pass) {

        await this.username.fill(user);

        await this.password.fill(pass);

        await this.loginButton.click();

    }

}
Test:

const loginPage =
    new LoginPage(page);

await loginPage.open(
    "https://example.com/login"
);

await loginPage.login(
    "admin",
    "Test@123"
);
Now when I look at:

this.page
or:

this.username
I understand exactly what is happening.

📌 this – Quick Cheat Sheet
ScenarioWhat is this?object.method()Usually the object calling the methodClass methodCurrent class instanceConstructor with newNewly created objectPlain regular functionDepends on invocation/modeArrow functionInherited lexical thiscall(object)Explicitly supplied objectapply(object)Explicitly supplied objectbind(object)Permanently bound object

🚨 Common Mistake #1
Using an arrow function as an object method when we need object-level this.

Avoid:

const user = {

    name: "Shankar",

    show: () => {

        console.log(this.name);

    }

};
Prefer:

const user = {

    name: "Shankar",

    show() {

        console.log(this.name);

    }

};
🚨 Common Mistake #2
Detaching a method.

const show =
    user.show;

show();
The original object context can be lost.

Possible solution:

const show =
    user.show.bind(user);
🚨 Common Mistake #3
Assuming:

this
always means the current object.

It does not.

The correct question is:

👉 How was this function called?
That often tells us what this represents.

🎯 Interview Question
What is the difference between this in regular functions and arrow functions?
Regular Function
Its this is generally determined by how the function is called.

Arrow Function
It doesn't create its own this.

Instead, it inherits this from the surrounding lexical scope.

🎯 Another Common Interview Question
Why do we use this inside constructors?
Because it allows us to create properties on the object currently being constructed.

Example:

class Employee {

    constructor(name, role) {

        this.name = name;

        this.role = role;

    }

}
Then:

const emp =
    new Employee(
        "Shankar",
        "QA Automation Engineer"
    );
creates an object with:

emp.name
emp.role
🚀 Why QA Automation Engineers Must Understand this
If you work with JavaScript or TypeScript automation, you will constantly encounter code like:

this.page

this.driver

this.browser

this.context

this.locator

this.apiClient

this.config

this.environment

this.username
Understanding this makes it much easier to understand and design:

🔥 Playwright Page Objects

🔥 WebdriverIO frameworks

🔥 Selenium JavaScript frameworks

🔥 BasePage implementations

🔥 API clients

🔥 Framework utilities

🔥 Reusable components

🔥 Object-oriented test frameworks

💡 My Biggest Takeaway From Day 17
Before learning this properly, when I saw:

this.page
I thought:

It is simply another way of accessing a variable.
But now I understand:

this.page
means:

Access the page property belonging to the current object instance.
And the biggest lesson for me today is:

🔥 Don't ask only, “Where is this function written?”
Ask:

🔥 “HOW is this function being called?”
That single question makes understanding this much easier.

🔗 Connecting My JavaScript Learning
Over the last few days, concepts that initially looked independent are now starting to connect:

Objects
   ↓
Classes
   ↓
Constructors
   ↓
Inheritance
   ↓
Polymorphism
   ↓
Prototypes
   ↓
Prototype Chain
   ↓
this
And these same concepts are directly visible when building real automation frameworks.

That's what makes this learning journey exciting.

I'm no longer learning JavaScript only to understand syntax.

I'm learning it to understand:

Why automation frameworks are designed the way they are.

✅ Day 17/100 Completed
Today I learned:

✔️ What this means

✔️ Why we need this

✔️ this inside objects

✔️ this inside classes

✔️ this inside constructors

✔️ How new affects this

✔️ Regular functions and this

✔️ Arrow functions and lexical this

✔️ How methods lose this

✔️ call()

✔️ apply()

✔️ bind()

✔️ this with inheritance

✔️ Real-time Playwright Page Object examples

✔️ Why this matters in automation frameworks

🚀 Day 17 of #100DaysOfJavaScript completed.

The deeper I go into JavaScript, the more I realize:

Learning syntax teaches you how to write code. Understanding concepts like this teaches you why the code works.
🔥 Next up:

Day 18 – call(), apply() and bind() Deep Dive: Taking Full Control of this in JavaScript

#100DaysOfJavaScript #JavaScript #JavaScriptLearning #LearningInPublic #QAAutomation #AutomationTesting #Playwright #Selenium #WebdriverIO #SoftwareTesting #TestAutomation #QualityEngineering #CodingJourney #JavaScriptDeveloper #QAEngineers
