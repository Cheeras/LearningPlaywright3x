//Type 4 - Function with parameter and with return value
//Example 1 - Real Time Scenario - Calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width; // Returns the area of the rectangle
}

// Calling the function and storing the return value in a variable
const length = 10;
const width = 5;
const area = calculateRectangleArea(length, width);
console.log("The area of the rectangle is: " + area);

//Example 2 - Real Time Scenario - Calculate the total price of items in a shopping cart
function calculateTax(price, taxRate) {
    return price * taxRate; // Returns the tax amount
}

//calling the function and storing the return value in a variable
const price = 100;
const taxRate = 0.08;
const taxAmount = calculateTax(price, taxRate);
console.log("The tax amount for the item is: " + taxAmount);

//Example 3 - Real Time Scenario - Calculate the final price after tax
function calculateFinalPrice(price, taxRate) {
    const taxAmount = calculateTax(price, taxRate); // Reusing the calculateTax function
    return price + taxAmount; // Returns the final price after adding tax
}