let arr = [10,99,78,9,4,101,56];
let largest = -Infinity;
if(arr.length === 0){
    console.log("Array is empty");
    return;
}
for( let i = 1;i < arr.length; i++){
    if(arr[i] >= largest){
        largest = arr[i];
    }
}

console.log(largest);