//Question 1 – Mixed Increment
let a = 5;

let b = a++ + ++a + a++;

console.log(a);//8
console.log(b);//19

//Question 2 – Nested Expression
let x = 10;

let y = ++x + x++ + ++x;

console.log(x);//13
console.log(y);//35

//Question 3 - Three variables

let a = 2;
let b = 3;

let c = a++ + ++b + ++a + b++;

console.log(a);//4
console.log(b);//5
console.log(c);//14

//Question 4 – Assignment with Increment
let a = 5;

let b = a++;
let c = ++a;

console.log(a);//7
console.log(b);//5
console.log(c);//7

//Question 5 – Long Expression
let a = 1;

let result = ++a + a++ + ++a + a++;

console.log(result);//12
console.log(a);//5

//Question 6 – Multiple Variables
let x = 5;
let y = 8;

let z = x++ + ++y + ++x + y++;

console.log(x);//7
console.log(y);//10
console.log(z);//30

//Question 7 – Parentheses Challenge
let a = 10;

let b = (a++) + (++a) + (a++);

console.log(a);//13
console.log(b);//34

//Question 8 - Interview Level
let a = 2;

let b = a++ + ++a;
let c = ++a + a++;

console.log(a);//6
console.log(b);//6
console.log(c);//10

//Question 9 - Very Advanced
let a = 3;

let b = ++a + a++ + ++a + a++ + ++a;

console.log(a);//8
console.log(b);//28

//Question 10 - Expert Level
let a = 5;
let b = 2;

let c = ++a + b++ + a++ + ++b + ++a + b++;

console.log(a);//8
console.log(b);//5
console.log(c);//30

//🔥 Bonus Question (Tricky)
let a = 10;

console.log(a++ + a++ + ++a + ++a);//48

console.log(a);//14

//🔥🔥 Ultimate Challenge
let a = 1;
let b = 2;
let c = 3;

let d = a++ + ++b + c++ + ++a + b++ + ++c + a++ + ++b;

console.log(a);//4
console.log(b);//5
console.log(c);//5
console.log(d);//26

//⭐ Mega Challenge (FAANG-style)
let a = 5;
let b = 10;
let c = 15;

let result =
    a++ +
    ++b +
    c++ +
    ++a +
    b++ +
    ++c +
    a++ +
    ++b +
    c++ +
    ++a;

console.log(a);//9
console.log(b);//13
console.log(c);//18
console.log(result);//112
