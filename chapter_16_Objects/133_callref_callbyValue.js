//call by ref and call by value

let a = 10;
let b = a;//call by value
b = 99;
console.log(a);
console.log(b);

a = 90;
console.log(a);
console.log(b);

console.log("---------------------");
//Object - copied by REFERENCE , call by ref
//Reference - Object,array, function

let obj1 = { val : 10};
let obj2 = obj1;
obj2.val =99;
console.log(obj1.val);