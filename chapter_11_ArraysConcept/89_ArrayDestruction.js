let [first, second, third] = [10, 20, 30];

console.log(first);
console.log(second);
console.log(third);

//Rest patter(...) - collects everything left over into a NEW array.
//Note: can not reuser first/second/third here, let can not be redeclared
// in the same scope 
let [a,b, ...rest] = [10,20,30,40,50];
console.log(a);
console.log(b);
console.log(rest);

//Default values - user only when the slot is undefined
let [x=1,y=2,z=99] = [10,20];

console.log(x,y,z);// 10,20,99

//skip  element with a hole, and swap without a temp variable
let[,,thirdonly] = [10,20,30];
console.log(thirdonly);

let p = 1,q=2 ;
[p,q] = [q,p];
console.log(p,q);