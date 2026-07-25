let browser = ["Chrome","firefox","safari","opera","edge"];
console.log(browser);
console.log(browser.length)

//Seraching

//indedOf - returns first index, or -1 if not found

console.log(browser.indexOf("opera"));
console.log(browser.indexOf("Opera min"));
console.log(browser.lastIndexOf("safari"));
console.log(browser.lastIndexOf("mini"));

//include - return boolean

console.log(browser.includes("error"));
console.log(browser.includes("opera"));