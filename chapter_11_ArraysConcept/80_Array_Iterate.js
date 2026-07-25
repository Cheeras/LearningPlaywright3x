//Iterating the array elements
let tests = ["login","dashboard","checkout","search","payment"];

//Traditional for loop
console.log("Iterating array elements using traditional for loop");
for(let i = 0; i <= tests.length ;i++){
    console.log(tests[i]);
}

console.log("==============================");
//for .. of loop(cleanest for values)
console.log("Iterating array elements using the for of loop");
for(let test of tests){
    console.log(test)
}
console.log("==============================");
//for each loop (no return value)
console.log("Iterating array elements using forEach loop");
tests.forEach((test,index) => {
    console.log(`${index}:${test}`);
});
console.log("==============================");

let students = ["Deepak","Pramod","Sahil","Himanshu","Daveed"];
for(let st in students){
    console.log(st,"->",students[st]);
}
