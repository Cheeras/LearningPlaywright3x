//Find the first occurrence inded of number with out using indexOf() method
let arr = [99,12,65,43,-23,87,34,-56,43,90];
let givenNumber = 43;
let index  = -1;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === givenNumber){
        index = i;
        break;
    }   
}

console.log("Index of", givenNumber, ":", index);
