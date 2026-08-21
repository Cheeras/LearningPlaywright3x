//Give number is even or odd
let num = 0;
if( typeof num !== "number" || Number.isNaN(num)){
    console.log("Invalid Input")
}else if(Number.isInteger(num)){
    console.log("Please enter the whole number");
}
if( num % 2 === 0){
    console.log("Even");
}else {
    console.log("Odd")
}