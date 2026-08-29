
# 🚀 Day 10/100: How JavaScript Classes Turn Repetitive Test Scripts into Scalable Automation Frameworks



Imagine you have written 100 Playwright tests.

Now, the login-page locator changes.

Without a proper framework, you may need to update the same locator in dozens of test scripts. One small application change can suddenly become a maintenance nightmare.

But what if the locator and login actions were defined in one reusable place?

That is where JavaScript Classes and Constructors become powerful.

They help us convert scattered test scripts into structured, reusable, and maintainable automation frameworks.

Welcome to Day 10 of my 100 Days of JavaScript Learning Challenge!

🔄 Quick Recap of Day 9
✅ JavaScript objects store related information as key-value pairs. ✅ Properties describe an object’s data. ✅ Methods define the actions an object can perform. ✅ Objects help organize test data, configurations, and API responses.

Today, let us take the next step and understand how classes can be used as blueprints for creating multiple objects.

What Is a JavaScript Class?
A class is a blueprint for creating objects.

Consider the blueprint of a house.

The blueprint defines:

How many rooms the house should have
Where the doors should be placed
How the house should be structured

Using the same blueprint, we can construct multiple houses.

Similarly, a JavaScript class defines the properties and methods that its objects should contain.

class Employee {
    displayDetails() {
        console.log("Employee details displayed");
    }
}
Here:

class is the JavaScript keyword used to create a class.
Employee is the class name.
displayDetails() is a method inside the class.

However, this is only a blueprint. To use it, we must create an object.

const employee1 = new Employee();

employee1.displayDetails();
Output:

Employee details displayed
The employee1 variable stores an object created from the Employee class.

What Is a Constructor?
A constructor is a special method inside a class.

It is called automatically whenever we create an object using the new keyword.

The constructor is mainly used to initialize an object’s properties.

class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    displayDetails() {
        console.log(`${this.name} works as a ${this.role}`);
    }
}

const employee1 = new Employee(
    "Shankar",
    "QA Automation Engineer"
);

employee1.displayDetails();
Output:

Shankar works as a QA Automation Engineer
When the following statement executes:

const employee1 = new Employee(
    "Shankar",
    "QA Automation Engineer"
);
JavaScript automatically calls:

constructor(name, role)
The values are assigned like this:

name = "Shankar";
role = "QA Automation Engineer";
The constructor then stores them inside the new object.

Understanding this.name = name
This is one of the most important—and initially confusing—statements in JavaScript classes:

this.name = name;
Although both sides contain name, they represent different things.

name
This is the parameter received by the constructor.

constructor(name)
this.name
This is a property belonging to the object currently being created.

this.name = name;
When we write:

const employee1 = new Employee("Shankar");
JavaScript effectively performs:

employee1.name = "Shankar";
We do not need to create this.name separately.

The following assignment automatically creates the property:

this.name = name;
What Does this Mean?
Inside a class, this refers to the current object.

Consider the following example:

class Employee {
    constructor(name) {
        this.name = name;
    }
}

const employee1 = new Employee("Shankar");
const employee2 = new Employee("Ravi");

console.log(employee1.name);
console.log(employee2.name);
Output:

Shankar
Ravi
When employee1 is created, this refers to employee1.

When employee2 is created, this refers to employee2.

Therefore, both objects maintain their own data independently.

What Does the new Keyword Do?
The new keyword performs several important operations:

It creates a new empty object.
It connects that object to the class.
It calls the constructor automatically.
It assigns values to the object’s properties.
It returns the newly created object.

const employee1 = new Employee(
    "Shankar",
    "QA Automation Engineer"
);
Without the new keyword, JavaScript will not create a class object correctly.

❌ Incorrect:

const employee1 = Employee("Shankar");
✅ Correct:

const employee1 = new Employee("Shankar");
Creating Multiple Objects from One Class
The biggest advantage of a class is reusability.

We can create any number of objects using the same class.

class TestUser {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    displayUser() {
        console.log(
            `${this.username} is registered as ${this.role}`
        );
    }
}

const adminUser = new TestUser(
    "admin@example.com",
    "Admin@123",
    "Admin"
);

const standardUser = new TestUser(
    "user@example.com",
    "User@123",
    "Standard User"
);

adminUser.displayUser();
standardUser.displayUser();
Output:

admin@example.com is registered as Admin
user@example.com is registered as Standard User
Here, both objects were created from the same class, but each object contains different data.

This is useful in automation testing when we need to test an application using different user roles.

Adding Methods to a Class
Properties store information.

Methods define what an object can do.

class Calculator {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    add() {
        return this.firstNumber + this.secondNumber;
    }

    subtract() {
        return this.firstNumber - this.secondNumber;
    }

    multiply() {
        return this.firstNumber * this.secondNumber;
    }
}

const calculator = new Calculator(20, 10);

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
Output:

30
10
200
The values are stored as object properties, while the calculations are performed through methods.

Real-Time Playwright Automation Example
One of the most common uses of JavaScript classes in automation testing is the Page Object Model, commonly called POM.

Suppose we have a login page containing:

Email field
Password field
Login button
Error message

Instead of writing these locators and actions inside every test, we can create a reusable LoginPage class.

class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = "#email";
        this.passwordInput = "#password";
        this.loginButton = "#login-button";
        this.errorMessage = ".error-message";
    }

    async navigate() {
        await this.page.goto(
            "https://example.com/login"
        );
    }

    async login(email, password) {
        await this.page.fill(
            this.emailInput,
            email
        );

        await this.page.fill(
            this.passwordInput,
            password
        );

        await this.page.click(
            this.loginButton
        );
    }

    async getErrorMessage() {
        return await this.page
            .locator(this.errorMessage)
            .textContent();
    }
}

export default LoginPage;
We can now use this class inside a Playwright test:

import { test, expect } from "@playwright/test";
import LoginPage from "./LoginPage.js";

test("Verify login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        "tester@example.com",
        "Password@123"
    );

    await expect(page).toHaveURL(
        /dashboard/
    );
});
Here:

LoginPage is the class or blueprint.
loginPage is the object created from the class.
page is received through the constructor.
Locators are stored as properties.
navigate() and login() are reusable methods.

If the login-button locator changes, we update it in only one place:

this.loginButton = "#new-login-button";
Every test using the class automatically uses the updated locator.

That is how classes improve automation-framework maintainability.

Another Example: Test Case Class
Classes can also help us represent test cases as structured objects.

class TestCase {
    constructor(id, title, priority, status) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.status = status;
    }

    displayTestCase() {
        console.log(`Test Case ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Priority: ${this.priority}`);
        console.log(`Status: ${this.status}`);
    }
}

const loginTest = new TestCase(
    "TC_001",
    "Verify login with valid credentials",
    "High",
    "Passed"
);

loginTest.displayTestCase();
Output:

Test Case ID: TC_001
Title: Verify login with valid credentials
Priority: High
Status: Passed
This approach can be used to organize test data, test results, API payloads, and reporting information.

Does JavaScript Support Constructor Overloading?
JavaScript does not support traditional constructor overloading like Java.

In Java, we can create multiple constructors with different parameters. In JavaScript, a class can contain only one constructor.

❌ This is not valid:

class User {
    constructor(name) {
        this.name = name;
    }

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
We can handle different requirements using default parameters:

class User {
    constructor(name, role = "Guest") {
        this.name = name;
        this.role = role;
    }
}

const user1 = new User("Shankar");

const user2 = new User(
    "Ravi",
    "Administrator"
);

console.log(user1);
console.log(user2);
Output:

User { name: "Shankar", role: "Guest" }

User { name: "Ravi", role: "Administrator" }
If the role is not provided, JavaScript uses "Guest" as the default value.

Class vs Object
ClassObjectA blueprint for creating objectsAn actual instance created from a classDefines properties and methodsContains actual property valuesCreated using the class keywordCreated using the new keywordCan be reused multiple timesRepresents one specific entityExample: LoginPageExample: loginPage

Common Beginner Mistakes

1. Forgetting the new keyword
   ❌ Incorrect:

const user = User("Shankar");
✅ Correct:

const user = new User("Shankar");
2. Forgetting this
❌ Incorrect:

constructor(name) {
    name = name;
}
This does not create an object property.

✅ Correct:

constructor(name) {
    this.name = name;
}
3. Creating multiple constructors
❌ Incorrect:

constructor(name) {}

constructor(name, role) {}
✅ Use one constructor with optional or default parameters:

constructor(name, role = "Guest") {
    this.name = name;
    this.role = role;
}
4. Calling a method without parentheses
❌ This only refers to the method:

employee.displayDetails;
✅ This calls the method:

employee.displayDetails();
Practice Challenge
Create a Browser class containing:

Browser name
Browser version
Headless execution status
A method called launchBrowser()

Expected usage:

const chrome = new Browser(
    "Chrome",
    "151",
    true
);

chrome.launchBrowser();
Expected output:

Launching Chrome version 151 in headless mode
As an additional challenge, create objects for Firefox and Microsoft Edge using the same class.

Key Takeaways
✅ A class is a reusable blueprint for creating objects. ✅ A constructor initializes an object’s properties. ✅ The constructor runs automatically when new is used. ✅ this refers to the current object. ✅ Methods describe the actions an object can perform. ✅ One class can create multiple independent objects. ✅ JavaScript does not support traditional constructor overloading. ✅ Classes form the foundation of the Playwright Page Object Model.

The real power of classes is not just cleaner syntax.

It is their ability to transform repetitive automation scripts into organized, reusable, and scalable frameworks.

📌 Day 10 completed: JavaScript Classes and Constructors

Next: Day 11 – Inheritance in JavaScript: How One Class Can Reuse Another Class

What was the most confusing concept when you first learned classes—constructor, this, or the new keyword?

Share your answer in the comments. Let us learn together! 🚀

#100DaysOfJavaScript #JavaScript #JavaScriptClasses #Constructor #OOP #Playwright #TestAutomation #QAAutomation #SoftwareTesting #PageObjectModel #LearningInPublic
