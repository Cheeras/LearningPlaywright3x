console.log(greeting);
var greeting = "Hello!";
console.log(greeting);

//Behind the scenes:
//var greetin;            // hoisted with undefined
//console.log(greeting);  // undefined
//greeting = "Hello!"     // assignment take place
//console.log(greeting);