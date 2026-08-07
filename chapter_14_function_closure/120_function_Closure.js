//Function Closure in JavaScript
/**
 * A closure happens when an inner function remembers and can access variables from its outerfunction
 * even after the outer function has finished executing
 * 
*/

//Basic syntax
function outerFunction() {
    let outerVariable = "Hello";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}

//calling
const result = outerFunction();
result();
//Here, outerFunction() has already completed, but innerFunction() still remembers
//outerVariable. This behaviour is called a closure

//Even though outerFunction() has finished, innerFunction remembers the variable 
//from its parent function, This memory is called a closure
