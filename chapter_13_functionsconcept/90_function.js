//with out function - repetition of logic
let score = 85;
let result = score >= 60 ? "pass" : "fail";
console.log(result);

let score1 = 45;
let result1 = score1 >= 60 ? "pass" : "fail";
console.log(result1);

//with function - no repetition of logic
//Defining a function to check the result based on score
function checkResult(score) {
    return score >= 60 ? "pass" : "fail";
}
//function calling
console.log(checkResult(85));
console.log(checkResult(45));