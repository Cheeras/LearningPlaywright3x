//substring extraction

let  str = "Login_Test_Pass_001";

//slice(start,end) - negative indexes supported(start, end-1)

console.log(str.slice(0,5)); //(0,4) --> "Login"

console.log(str.slice(11));// start from 11 to end

console.log(str.slice(-3));

//substring(start,end) - no negative(treats as 0)

let subStr = str.substring(6,8);

console.log(subStr);

console.log(str.at(0));
console.log(str.at(-1));