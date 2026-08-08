//String conversions

//to String
(200).toString();// "200"

true.toString();//"true"

Number("42");// 42

console.log(parseInt("42px"));
console.log(parseInt("3.14rem"));
let str = "hello";// Thing are immutable in nature in javascript
str[0] = "H";
console.log(str);

let upper = str.toUpperCase();
console.log(str);
console.log(upper);
