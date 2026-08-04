console.log(greeting);
let greeting = "Hello!";
console.log(greeting);

//Behind the scenes:
//var greetin;            // hoisted with undefined
//console.log(greeting);  // undefined
//greeting = "Hello!"     // assignment take place
//console.log(greeting);

//Output is error
//ReferenceError: Cannot access 'greeting' before initialization