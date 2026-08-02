let arr = [99,12,65,43,-23,87,34,-56,78,90];
let threshold = 50;
let greaterElements = [];

for (let i = 0; i < arr.length; i++){
    if (arr[i] > threshold){
        greaterElements.push(arr[i]);
    }   
}

console.log("Elements greater than", threshold, ":", greaterElements);
