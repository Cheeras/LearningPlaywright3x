//null coalescing operator
let a = null;
let val = a ?? "Shankar";//if a is null take the default value as "shankar"
console.log(val);

let api_respone = null;
let responsedata = api_respone ?? "{}";
console.log(responsedata);

let api_respone1 = "CHeerala";
let responsedata1 = api_respone1 ?? "{}";
console.log(responsedata1);
