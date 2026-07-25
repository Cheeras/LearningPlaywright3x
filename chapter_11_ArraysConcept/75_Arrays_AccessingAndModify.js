//Accessing and modifying

let status = ["pass","fail","skip"];
console.log(status[0]);
console.log(status[1]);
console.log(status[2]);


console.log(status.at(-1));

console.log(status.at(-2));
console.log(status.at(-4));

//modify
console.log("Before modifying the Array");
console.log(status)
status[1] = "blocked"
console.log("After modifying the Array");
console.log(status)

console.log(status.length);