let arr = [99,12,65,43,-23,87,34,-56,43,90];
let givenNumber = 43;
let count = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === givenNumber){
        count++;
    }   
}

console.log("Count of", givenNumber, ":", count);
