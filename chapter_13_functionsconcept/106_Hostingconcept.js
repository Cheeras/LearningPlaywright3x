console.log(a);
var a = "Shankar";
console.log(a);

/**
 *  *********** Internal Memory creation ********
 * this is internal code called - Hoisting 
 * var a;
 * console.log(a);
 * var a = "shankar";
 * console.log(a);
 * 
*/

console.log(a);//undefined
var a = "shankar";
console.log(a);//changed

/**
 * Hoisting does NOT physically move your code
 * It is a mental model to understand how the
 *  JS engine handle declaration during application
 * 
 * 
*/