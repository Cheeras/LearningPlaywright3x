let num = [10,99,12,88,45];
let result = num.find(ele => ele > 20);
console.log(result)

//find Index
let index = num.findIndex(ind => ind >20);
console.log(index);

console.log(num.findLast( n => n > 20));//45
console.log(num.findLastIndex( n => n > 20));//4