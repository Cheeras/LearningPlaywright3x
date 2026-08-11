let scores = [
    [85,90,89], //student 0 , 264
    [89,67,88], //student 1 , 244
    [67,56,76] //studen 2 , 199
]

let rowSum = scores.map(row => row.reduce((a,b) => a + b));
console.log(rowSum);


let suiteResults = [
    ["login-pass","register-pass","logout-pass"], // Auth suite
    ["search-pass","filer-fail","sort-pass"], // search suite
    ["checkout-fail","payment-fail","confirm-pass"] //Payment suite
];

for(let i = 0 ; i < suiteResults.length ; i++){
    for(let j = 0 ; j < suiteResults[i].length ; j++){
        if(suiteResults[i][j].includes("fail")){
            console.log(suiteResults[i][j]);
        }
    }
}