let arr = [10, 12, 99, 32, 24, 8, 100];

let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(min);

let min1 = Math.min(...arr);

console.log(min1);