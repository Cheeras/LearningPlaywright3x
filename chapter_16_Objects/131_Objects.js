let a = { status : "pass"}
console.log(a.status);
console.log(a["status"]);

let a1 = { status: 'pass'};
console.log(a1.status);

//keys are case sensitive
let a2 = { status: "pass", Status: "fail"};
console.log(a2["status"]);
console.log(a2["Status"]);

console.log("=======================")
let a3 = {status: "pass"};
let b = a3; //copy the reference i.e both pointing to same object
b.status = "fail";
console.log(a3.status);//fail

/**
 * What's happening:
let a3 = {status: "pass"} — Creates an object in memory and stores its reference (memory address) in variable a3.

let b = a3 — This does not create a new copy of the object. Instead, b gets a copy of the reference (pointer) to the same object in memory. Now both a3 and b point to the exact same object.

b.status = "fail" — Modifies the object's status property through b. Since b and a3 share the same reference, this changes the underlying object.

console.log(a3.status) — Outputs "fail" because a3 is looking at the same mutated object.

Key takeaway:
Objects in JavaScript are assigned by reference, not by value. When you assign an object to another 
variable, both variables point to the same object in memory — any change through one variable 
is reflected through the other.

If you wanted an independent copy
 * 
 * 
*/

let c = { status: "pass"};
let d = { status: "pass"};
console.log("++++++++++++++++++++++");
console.log(c === d);//no

//this is json notation not object notation
//this is JSON not object notation
const t_js = {
"name" : "shankar",
"age" : 20
};

console.log(t_js)