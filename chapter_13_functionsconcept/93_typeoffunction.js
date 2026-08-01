/**
 * 
 * no return type - no parameter
 * no return type - with parameter
 * return type - no parameter
 * return type - with parameter
 * 
 */

// no return type - no parameter
function noReturnNoParameter() {
    console.log("This function has no return type and no parameter.");
}

// no return type - with parameter
function noReturnWithParameter(name) { // name is called parameter
    console.log("Hello " + name + ", this function has no return type but has a parameter.");
}

// return type - no parameter
function returnNoParameter() {
    return "This function has a return type but no parameter.";
}

// return type - with parameter
function returnWithParameter(a, b) { // here a and b are called parameters
    return a + b;
}

// Calling the functions
noReturnNoParameter();
noReturnWithParameter("John");// John is called argument
console.log(returnNoParameter());
console.log(returnWithParameter(5, 10));// 5 and 10 are called arguments