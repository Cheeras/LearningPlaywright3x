
# “Why Did the Login Test Fail When the Username Looked Correct?” The Answer Could Be a JavaScript String!



Day 08/100 – JavaScript Learning Challenge
Topic: JavaScript Strings
In automation testing, almost everything we validate is text:

Usernames and passwords
Page titles
Error messages
URLs
Button labels
API responses

Understanding JavaScript strings is therefore essential before learning Playwright.

Quick Recap of Day 7 – Arrays
Arrays store multiple values in a single variable.
We learned how to add, remove, access, and update array elements.
We explored array methods and looping techniques.
We used arrays to manage multiple test datasets efficiently.

What Is a String?
A string is a sequence of characters used to represent text.

let username = "Shankar";
let role = 'QA Automation Engineer';
let message = `Welcome, ${username}`;
JavaScript strings can be created using:

Single quotes: 'Hello'
Double quotes: "Hello"
Backticks: Hello

Backticks are especially useful when we need to insert variables into a string.

let testerName = "Shankar";
let experience = 12;

console.log(
    `${testerName} has ${experience} years of IT experience.`
);
Output:

Shankar has 12 years of IT experience.
This technique is called template literals or string interpolation.

1. Finding the Length of a String
   The length property returns the total number of characters, including spaces.

let password = "Test@123";

console.log(password.length);
Output:

8
Real-time testing example
Suppose a password must contain at least eight characters:

let password = "Test@12";

if (password.length >= 8) {
    console.log("Valid password length");
} else {
    console.log("Password must contain at least 8 characters");
}
2. Accessing Individual Characters
String characters use zero-based indexing.

let tool = "Playwright";

console.log(tool[0]);
console.log(tool[4]);
Output:

P
w
The first character is available at index 0.

To access the final character:

let tool = "Playwright";

console.log(tool[tool.length - 1]);
Output:

t
3. Strings Are Immutable
JavaScript strings cannot be modified directly.

let browser = "chrome";

browser[0] = "C";

console.log(browser);
Output:

chrome
The original string remains unchanged.

We must create or assign a new string:

browser = "Chrome";

console.log(browser);
4. Converting Text to Uppercase and Lowercase
let actualStatus = "PASSED";

console.log(actualStatus.toLowerCase());
Output:

passed
Real-time testing example
Applications may return the same text using different letter cases.

let expectedStatus = "success";
let actualStatus = "SUCCESS";

if (actualStatus.toLowerCase() === expectedStatus.toLowerCase()) {
    console.log("Test passed");
} else {
    console.log("Test failed");
}
This prevents test failures caused only by uppercase or lowercase differences.

5. Removing Unwanted Spaces with trim()
   The trim() method removes spaces from the beginning and end of a string.

let username = "   shankar@example.com   ";

console.log(username.trim());
Output:

shankar@example.com
Login validation example
let enteredEmail = "  tester@gmail.com ";
let expectedEmail = "tester@gmail.com";

if (enteredEmail.trim() === expectedEmail) {
    console.log("Email matched");
} else {
    console.log("Email did not match");
}
Hidden spaces are a common reason why seemingly correct test data fails.

Other useful methods are:

text.trimStart();
text.trimEnd();
6. Checking Whether Text Exists with includes()
The includes() method returns true when a string contains the specified text.

let errorMessage = "Invalid username or password";

console.log(errorMessage.includes("Invalid"));
Output:

true
Automation testing example
let actualMessage = "Login failed: Invalid password";

if (actualMessage.includes("Invalid password")) {
    console.log("Correct error message displayed");
} else {
    console.log("Unexpected error message displayed");
}
Remember that includes() is case-sensitive:

console.log("Login Failed".includes("failed"));
Output:

false
7. Checking the Beginning and End of a String
We can use startsWith() and endsWith().

let url = "https://example.com/dashboard";

console.log(url.startsWith("https"));
console.log(url.endsWith("dashboard"));
Output:

true
true
Real-time URL validation
let currentUrl = "https://example.com/dashboard";

if (
    currentUrl.startsWith("https://") &&
    currentUrl.endsWith("/dashboard")
) {
    console.log("User successfully reached the dashboard");
}
8. Extracting Part of a String with slice()
let testCaseId = "TC_LOGIN_001";

console.log(testCaseId.slice(0, 2));
console.log(testCaseId.slice(3, 8));
Output:

TC
LOGIN
The ending index is not included.

We can also use negative indexing:

let fileName = "report.pdf";

console.log(fileName.slice(-3));
Output:

pdf
9. Splitting a String into an Array
The split() method divides a string and returns an array.

let testData = "Chrome,Firefox,Edge";

let browsers = testData.split(",");

console.log(browsers);
Output:

["Chrome", "Firefox", "Edge"]
Data-driven testing example
let credentials = "tester@gmail.com:Test@123";

let [email, password] = credentials.split(":");

console.log(email);
console.log(password);
Output:

tester@gmail.com
Test@123
10. Replacing Text
The replace() method replaces the first matching value.

let message = "Test executed in Chrome";

let updatedMessage = message.replace("Chrome", "Firefox");

console.log(updatedMessage);
Output:

Test executed in Firefox
To replace every occurrence, use replaceAll():

let result = "failed,failed,passed";

console.log(result.replaceAll("failed", "retest"));
Output:

retest,retest,passed
11. Combining Strings
Strings can be combined using the + operator:

let firstName = "Shankar";
let lastName = "Cheerala";

let fullName = firstName + " " + lastName;

console.log(fullName);
A cleaner approach is to use template literals:

let fullName = `${firstName} ${lastName}`;

console.log(fullName);
Playwright Real-Time Example
Imagine that we need to validate a login error message:

const actualMessage = await page
    .locator("#error-message")
    .textContent();

const expectedMessage = "Invalid username or password";

if (
    actualMessage.trim().toLowerCase() ===
    expectedMessage.toLowerCase()
) {
    console.log("Error-message validation passed");
} else {
    console.log("Error-message validation failed");
}
Here we use:

textContent() to capture text from the webpage
trim() to remove unwanted spaces
toLowerCase() to avoid case-related mismatches
=== to compare the final values

A Playwright assertion can also be written as:

await expect(page.locator("#error-message"))
    .toHaveText("Invalid username or password");
Common Mistakes to Avoid
Comparing strings with different cases
"Success" === "success"; // false
Forgetting that spaces count as characters
" JavaScript ".length; // 12
Trying to modify a character directly
let text = "java";
text[0] = "J"; // Does not change the string
Forgetting that many string methods return new strings
let name = "shankar";

name.toUpperCase();

console.log(name); // shankar
Correct approach:

name = name.toUpperCase();

console.log(name); // SHANKAR
Practice Challenges
Reverse the string "Playwright" without using reverse().
Count the number of vowels in a string.
Check whether a string is a palindrome.
Find the first non-repeating character.
Count how many times each character appears.
Remove all spaces from a string.
Extract the domain name from an email address.
Validate whether a file name ends with .pdf.

Key Takeaway
Strings are not just simple text values. They are fundamental to UI validation, test-data handling, URL verification, API testing, error-message comparison, and browser automation.

A small difference in case, spacing, or formatting can make an automated test fail. Learning to clean, compare, extract, and transform strings helps us build more reliable automation scripts.

Next: Day 09 – JavaScript Objects: How Real-World Test Data Is Organized

#100DaysOfJavaScript #JavaScriptLearning #Day8 #JavaScriptStrings #Playwright #AutomationTesting #QAAutomation #SoftwareTesting #TestAutomation #LearningInPublic
