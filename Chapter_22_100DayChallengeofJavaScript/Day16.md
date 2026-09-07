
# 🚀 Day 16/100 – Learning JavaScript: Prototype Chain & Prototypal Inheritance



🚨 JavaScript Just Called a Method That DOESN’T Exist on the Object — So Where Did It Come From? 🤯
Imagine you are debugging an automation framework.

You see this:

loginPage.takeScreenshot();
You open the loginPage object and search for:

takeScreenshot()
But it is not there.

Still, JavaScript executes it successfully. 😲

So where did JavaScript find that method?

The answer is one of the most important concepts behind JavaScript's object model:

👉 The Prototype Chain

Yesterday, on Day 15, I learned about JavaScript Prototypes.

Today, I went one level deeper and understood how JavaScript actually uses prototypes to implement:

✅ Inheritance ✅ Method sharing ✅ Property lookup ✅ Method overriding ✅ Reusable objects ✅ Classes behind the scenes ✅ Scalable automation framework design

🔁 Quick Recap – What Did We Learn on Day 15?
Every JavaScript object can have another object associated with it called its prototype.

Instead of copying the same methods into every object, JavaScript allows multiple objects to access shared methods through prototypes.

For example:

function Tester(name) {
    this.name = name;
}

Tester.prototype.executeTest = function () {
    console.log(`${this.name} is executing the test`);
};

const tester1 = new Tester("Shankar");

tester1.executeTest();
Interestingly, executeTest() is not directly stored inside tester1.

It exists in:

Tester.prototype
Then how does:

tester1.executeTest();
work?

That's exactly where today's concept begins.

🧠 What Is the Prototype Chain?
Whenever we access a property or method on an object, JavaScript first checks the object itself.

If JavaScript doesn't find it there, it doesn't immediately throw an error.

Instead, JavaScript asks:

"Does this object's prototype contain it?"
If not, JavaScript checks the prototype's prototype.

Then the next prototype.

And so on.

This lookup continues until JavaScript reaches:

null
This entire lookup path is called the:

Prototype Chain
🔍 Simple Example
Consider this object:

const employee = {
    company: "ABC Technologies"
};

const tester = {
    name: "Shankar",
    role: "QA Automation Engineer"
};

Object.setPrototypeOf(tester, employee);
Now let's access:

console.log(tester.name);
Output:

Shankar
JavaScript finds name directly inside tester.

Easy.

Now try:

console.log(tester.company);
Output:

ABC Technologies
But look carefully.

company doesn't exist inside tester.

JavaScript internally performs something like:

Does tester contain company?

        ❌ No
          ↓
Check tester's prototype
          ↓
Does employee contain company?

        ✅ Yes
          ↓
Return "ABC Technologies"
That's prototype-chain lookup.

Conceptually:

tester
   ↓
employee
   ↓
Object.prototype
   ↓
null
🏢 Real-Time Example – Company Employee Hierarchy
Let's make it more realistic.

Suppose every employee in an organization has access to common company information.

const company = {
    companyName: "ABC Technologies",

    getCompanyName() {
        return this.companyName;
    }
};
Now we have an employee:

const employee = {
    employeeId: 101,
    department: "Engineering"
};

Object.setPrototypeOf(employee, company);
Then we create a QA engineer:

const qaEngineer = {
    name: "Shankar",
    skill: "Selenium"
};

Object.setPrototypeOf(qaEngineer, employee);
Now:

console.log(qaEngineer.name);
JavaScript finds it immediately.

But:

console.log(qaEngineer.department);
JavaScript searches:

qaEngineer ❌
    ↓
employee ✅
And:

console.log(qaEngineer.getCompanyName());
JavaScript searches:

qaEngineer ❌
    ↓
employee ❌
    ↓
company ✅
So our chain becomes:

qaEngineer
    ↓
employee
    ↓
company
    ↓
Object.prototype
    ↓
null
This is exactly why it's called a chain.

🔥 Real-Time QA Automation Example
Now let's connect this concept to something much closer to QA engineers.

Imagine you're building a UI automation framework.

Every page needs common functionality such as:

✅ Navigate to URL ✅ Click elements ✅ Take screenshots ✅ Wait for elements ✅ Refresh the page

Instead of writing these methods again inside every page object, we can create common functionality.

1️⃣ Base Page
const basePage = {

    openPage(url) {
        console.log(`Opening: ${url}`);
    },

    takeScreenshot() {
        console.log("Taking screenshot...");
    },

    waitForElement(element) {
        console.log(`Waiting for ${element}`);
    }
};
Now create a Login Page.

const loginPage = {

    login(username, password) {
        console.log(`Logging in as ${username}`);
    }
};

Object.setPrototypeOf(loginPage, basePage);
Now execute:

loginPage.login("admin", "password123");
JavaScript finds login() directly inside loginPage.

But what happens here?

loginPage.takeScreenshot();
There is no takeScreenshot() method inside loginPage.

JavaScript checks:

loginPage
    ↓
takeScreenshot()? ❌
    ↓
basePage
    ↓
takeScreenshot()? ✅
And executes it.

🚀 This Is Similar to Page Object Model Inheritance
Coming from Selenium/Java, we may create:

BasePage
   ↓
LoginPage
   ↓
DashboardPage
JavaScript can achieve similar behavior through its prototype system.

For example:

const dashboardPage = {

    verifyDashboard() {
        console.log("Dashboard displayed successfully");
    }
};

Object.setPrototypeOf(dashboardPage, loginPage);
Now:

dashboardPage.verifyDashboard();
Found directly.

And:

dashboardPage.login("admin", "password123");
JavaScript searches:

dashboardPage ❌
      ↓
loginPage ✅
And:

dashboardPage.takeScreenshot();
JavaScript searches:

dashboardPage ❌
      ↓
loginPage ❌
      ↓
basePage ✅
Our chain is now:

dashboardPage
      ↓
loginPage
      ↓
basePage
      ↓
Object.prototype
      ↓
null
That's prototypal inheritance in action. 🔥

🔍 How Can We Check an Object's Prototype?
Instead of guessing, JavaScript gives us:

Object.getPrototypeOf()
Example:

console.log(Object.getPrototypeOf(loginPage));
This returns the prototype associated with loginPage.

We can check:

console.log(
    Object.getPrototypeOf(loginPage) === basePage
);
Output:

true
🆚 prototype vs proto – Very Important!
This confused me initially because both words seem related.

But they are not exactly the same.

Consider:

function Browser(name) {
    this.name = name;
}
We can add a method:

Browser.prototype.launch = function () {
    console.log(`${this.name} browser launched`);
};
Then:

const chrome = new Browser("Chrome");
Now:

chrome.launch();
Works.

Why?

Because conceptually:

chrome
   ↓
Browser.prototype
   ↓
Object.prototype
   ↓
null
We can verify:

console.log(
    Object.getPrototypeOf(chrome) === Browser.prototype
);
Output:

true
💡 Easy Way to Remember
Think of:

Browser.prototype
as:

The object that instances created by Browser can inherit from.
While:

Object.getPrototypeOf(chrome)
means:

Give me the actual prototype of this particular chrome object.
You may also see:

chrome.__proto__
But modern JavaScript code should generally prefer:

Object.getPrototypeOf(chrome)
for inspection.

🔥 Real-Time Example – Browser Automation
Imagine we want every browser object to support common operations.

function Browser(name) {
    this.name = name;
}
Add common functionality:

Browser.prototype.launch = function () {
    console.log(`Launching ${this.name}`);
};

Browser.prototype.close = function () {
    console.log(`Closing ${this.name}`);
};
Create browsers:

const chrome = new Browser("Chrome");
const firefox = new Browser("Firefox");
const edge = new Browser("Edge");
Now:

chrome.launch();
firefox.launch();
edge.launch();
Output:

Launching Chrome
Launching Firefox
Launching Edge
The important point is:

We didn't create three separate copies of launch().

The method lives on:

Browser.prototype
and every browser instance can access it through the prototype chain.

That's efficient method sharing.

🎯 What Happens When Both Object and Prototype Have the Same Property?
This is where things get interesting.

Consider:

const baseTest = {

    timeout: 5000,

    execute() {
        console.log("Executing Base Test");
    }
};
Now:

const loginTest = {

    timeout: 10000
};

Object.setPrototypeOf(loginTest, baseTest);
Let's execute:

console.log(loginTest.timeout);
Output:

10000
Why didn't JavaScript return:

5000
Because JavaScript always checks the object itself first.

Lookup:

loginTest.timeout
       ↓
Found ✅

Stop searching.
This is called shadowing.

The object's own property shadows the property from its prototype.

🔥 Method Overriding Example
Let's take the same concept with methods.

const basePage = {

    takeScreenshot() {
        console.log("Taking standard screenshot");
    }
};
Now:

const failurePage = {

    takeScreenshot() {
        console.log("Taking screenshot with failure logs");
    }
};

Object.setPrototypeOf(failurePage, basePage);
Execute:

failurePage.takeScreenshot();
Output:

Taking screenshot with failure logs
JavaScript doesn't call the method from basePage.

Why?

Because it found takeScreenshot() directly inside failurePage.

This is similar to method overriding in OOP.

🧪 Another QA Example – API Testing Framework
Prototype inheritance isn't limited to UI automation.

Suppose we are building API testing utilities.

const apiClient = {

    sendRequest() {
        console.log("Sending HTTP request");
    },

    validateStatusCode() {
        console.log("Validating status code");
    }
};
Create a user API:

const userAPI = {

    createUser() {
        console.log("Creating user");
    }
};

Object.setPrototypeOf(userAPI, apiClient);
Now:

userAPI.createUser();

userAPI.sendRequest();

userAPI.validateStatusCode();
The API-specific functionality belongs to userAPI.

Common functionality comes from apiClient.

This separation improves:

✅ Reusability ✅ Maintainability ✅ Framework scalability ✅ Code organization

🤯 JavaScript Arrays Also Use Prototype Chains!
This was one of my favorite observations.

Consider:

const browsers = [
    "Chrome",
    "Firefox",
    "Edge"
];
We can execute:

browsers.push("Safari");
But did we define push() inside browsers?

No.

JavaScript finds it through:

browsers
    ↓
Array.prototype
    ↓
Object.prototype
    ↓
null
Methods such as:

push()
pop()
map()
filter()
reduce()
forEach()
slice()
come from:

Array.prototype
We can verify:

console.log(
    Object.getPrototypeOf(browsers) === Array.prototype
);
Output:

true
🔥 Strings Follow the Same Idea
Consider:

const browser = "Chrome";
Then:

console.log(browser.toUpperCase());
Output:

CHROME
We never created toUpperCase().

The JavaScript runtime gives us access to standard behavior associated with:

String.prototype
That's why understanding prototypes suddenly explains where many built-in JavaScript methods come from.

🧠 What Happens If JavaScript Can't Find the Property Anywhere?
Example:

const tester = {
    name: "Shankar"
};

console.log(tester.salary);
JavaScript searches:

tester
   ↓
Property not found ❌
   ↓
Object.prototype
   ↓
Property not found ❌
   ↓
null
Finally:

undefined
is returned.

🚨 Important: Missing Property vs Missing Method
If you access:

tester.salary
and it doesn't exist:

undefined
But if you execute:

tester.executeAutomation();
and the method doesn't exist anywhere in the prototype chain, you'll get an error similar to:

TypeError: tester.executeAutomation is not a function
This difference is very useful while debugging JavaScript and automation scripts.

🔎 Own Property vs Inherited Property
Suppose:

const basePage = {
    timeout: 5000
};

const loginPage = {
    pageName: "Login"
};

Object.setPrototypeOf(loginPage, basePage);
Then:

console.log(loginPage.pageName);
console.log(loginPage.timeout);
Both work.

But they aren't the same type of property.

Check:

console.log(
    Object.hasOwn(loginPage, "pageName")
);
Output:

true
And:

console.log(
    Object.hasOwn(loginPage, "timeout")
);
Output:

false
Because timeout is inherited from the prototype.

This distinction becomes very important when iterating through objects or building frameworks.

🏗️ How Does the class Syntax Fit Into This?
Consider:

class BasePage {

    openPage() {
        console.log("Opening page");
    }
}
Then:

class LoginPage extends BasePage {

    login() {
        console.log("Logging in");
    }
}
Create an object:

const loginPage = new LoginPage();
Execute:

loginPage.login();

loginPage.openPage();
It looks similar to Java or C# inheritance.

But JavaScript's underlying object model is still prototype-based.

Conceptually:

loginPage
    ↓
LoginPage.prototype
    ↓
BasePage.prototype
    ↓
Object.prototype
    ↓
null
That was an important realization for me:

JavaScript classes provide cleaner syntax, but prototype chains are still doing the inheritance work underneath.
🧪 QA Automation Framework Example Using Classes
Let's make this more realistic.

class BasePage {

    async navigate(url) {
        console.log(`Navigating to ${url}`);
    }

    async click(element) {
        console.log(`Clicking ${element}`);
    }

    async screenshot() {
        console.log("Taking screenshot");
    }
}
Login Page:

class LoginPage extends BasePage {

    async login(username, password) {

        console.log(
            `Logging in using ${username}`
        );
    }
}
Dashboard Page:

class DashboardPage extends BasePage {

    async verifyDashboard() {
        console.log(
            "Dashboard verification completed"
        );
    }
}
Now:

const login = new LoginPage();

await login.navigate(
    "https://example.com/login"
);

await login.login(
    "admin",
    "password123"
);

await login.screenshot();
The LoginPage doesn't define navigate() or screenshot().

JavaScript finds them through the prototype chain.

That's the connection between:

JavaScript fundamentals → OOP → Page Object Model → Automation framework design.

⚠️ One Important Performance Concept
Suppose we have a very long prototype chain.

object
 ↓
prototype1
 ↓
prototype2
 ↓
prototype3
 ↓
prototype4
 ↓
Object.prototype
 ↓
null
Whenever a property isn't found immediately, JavaScript may need to search further up the chain.

This is one reason good object design matters.

Just because prototype inheritance is possible doesn't mean we should create unnecessarily complicated inheritance hierarchies.

The same principle applies to automation frameworks:

Reusability is good. Excessive inheritance can make frameworks harder to understand and maintain.
Sometimes composition is better than creating deeply nested inheritance structures.

🎯 Prototype Chain in One Simple Analogy
Imagine asking your team for a Selenium utility.

You ask yourself first:

"Do I have this utility?"
No.

Then you ask your team lead.

No.

Then the automation architect.

Yes!

You use the utility.

JavaScript does something very similar:

Current Object
      ↓
Prototype
      ↓
Parent Prototype
      ↓
Object.prototype
      ↓
null
Once JavaScript finds the property or method, the search stops.

💡 What I Learned Today
Before understanding prototypes, JavaScript inheritance looked like magic.

Now it makes much more sense.

When JavaScript evaluates:

object.method()
it essentially asks:

1. Is method inside object?

YES → Execute it.

NO
 ↓

2. Is method inside object's prototype?

YES → Execute it.

NO
 ↓

3. Check next prototype.

 ↓

4. Continue until null.
   That search mechanism is the Prototype Chain.

🔥 The Biggest Takeaway From Day 16
Yesterday:

Prototype = Where shared behavior can live.

Today:

Prototype Chain = How JavaScript finds that shared behavior.

And prototypal inheritance enables objects to reuse behavior without duplicating everything.

Once this clicked, many JavaScript concepts started connecting:

✅ Objects ✅ Constructors ✅ new keyword ✅ Prototype ✅ Prototype Chain ✅ Inheritance ✅ Method overriding ✅ Classes ✅ extends ✅ Built-in Array methods ✅ Page Object Model design

JavaScript may look class-based when we use:

class
and:

extends
But underneath, its inheritance model is fundamentally driven by prototypes and prototype chains.

🚀 Day 16/100 Completed!
Every day of this JavaScript journey is helping me understand not just how to write JavaScript, but why JavaScript behaves the way it does.

And as a QA Automation Engineer, that's especially valuable when moving toward tools and frameworks such as:

✅ Playwright ✅ WebdriverIO ✅ Cypress ✅ Node.js-based testing frameworks ✅ API automation using JavaScript/TypeScript

Tomorrow, we go one step further. 🚀

💬 Question for JavaScript & QA Engineers
When designing an automation framework, which approach do you prefer?

Inheritance through BasePage → LoginPage → DashboardPage

or

Composition with reusable utility objects/services?

Would love to hear how you structure your frameworks.

#100DaysOfJavaScript #JavaScript #Day16 #PrototypeChain #Prototypes #PrototypalInheritance #JavaScriptLearning #QAAutomation #SoftwareTesting #AutomationTesting #Playwright #WebdriverIO #Cypress #Selenium #TestAutomation #QualityEngineering #LearningInPublic
