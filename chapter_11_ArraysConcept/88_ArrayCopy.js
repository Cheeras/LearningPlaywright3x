//Array copy
// Original array will not chnage if you change the copy

let original = [1,2,3];
let copy1 = [...original];

console.log(original);
console.log(copy1);

let copy2 = original.slice();
console.log(copy2)

//Array from

let copy3 = Array.from(original);
console.log(copy3);

let copy4 = original.concat();

console.log(copy4);

console.log("==============================");
copy1.push(88);
console.log(original);
console.log(copy1);
