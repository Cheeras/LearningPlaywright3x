let arr1 = [10,20,30,40,50];
let arr2 = [60,70,80,90,100];
let combinedArr = [];

for (let i = 0; i < arr1.length; i++) {
    combinedArr.push(arr1[i]);
}   

for (let i = 0; i < arr2.length; i++) {
    combinedArr.push(arr2[i]);
}   
console.log("Combined Array:", combinedArr);

for( const index in arr1){
    combinedArr.push(arr1[index]);
}

for( const index in arr2){
    combinedArr.push(arr2[index]);
}

console.log("Combined Array using for...in:", combinedArr);


//Using for...of loop
for( const value of arr1){
    combinedArr.push(value);
}   

for( const value of arr2){
    combinedArr.push(value);
}
console.log("Combined Array using for...of:", combinedArr);

//Using forEach() method
arr1.forEach(function(value){
    combinedArr.push(value);
});
arr2.forEach(function(value){
    combinedArr.push(value);
});
console.log("Combined Array using forEach:", combinedArr);