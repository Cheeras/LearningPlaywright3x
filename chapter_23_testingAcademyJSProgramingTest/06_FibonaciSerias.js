//fibanacci Series
//0 1 1 2 3 5 8 
let n = 7;
let arr = [];
let n1 = 0;
let n2 = 1;
arr.push(n1);
arr.push(n2);
console.log(arr.length);
while(arr.length < n){
    let next = n1 + n2;
    arr.push(next);
    n1 = n2;
    n2= next;
}

console.log(arr);