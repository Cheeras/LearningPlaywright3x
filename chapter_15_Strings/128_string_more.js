let str = " Hello, World! ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());

str.trimStart();
str.trimEnd();


//Replace

let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL","PASS");
msg.replaceAll("FAIL","PASS");
msg.replace(/FAIL/g,"PASS");


//concatenation

console.log("Hello" +" "+"World");
console.log("Hello".concat(" ","World"));
console.log(`${"Hello"} ${"World"}`);