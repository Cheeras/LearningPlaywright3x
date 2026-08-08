let url = "https://app.vwo.com?app=shankar";
console.log(url.replace(/app/g,"qa"));


//Splitting and joining

"pass,fail,skip".split(",");
"hello".split("");

//Template literal( Joining with format)

let parts = ["2024","03","07"];

let date = parts.join("-");
console.log(date);