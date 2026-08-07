//Searching and checking

let url = "https://staging.vwo.com/api/login?retry=true";

//includes
let isPresent = url.includes("staging");
console.log(isPresent);

url.includes("production");

//startsWith and endsWith

url.startsWith("https");
url.startsWith("https://");
url.endsWith("true");

//indexOf , lastIndexOf

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("notthere"));