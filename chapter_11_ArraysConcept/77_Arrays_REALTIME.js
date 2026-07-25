let browser = ["Chrome","firefox","safari","opera","edge"];
console.log(browser);
console.log(browser.length)

let popReturn = browser.pop();
console.log(popReturn);
console.log(browser);

let removed = browser.shift();
console.log(removed);
console.log(browser);

for(let i = 0; i < browser.length; i++){
    console.log(browser[i]);
    if(browser[i] === "opera"){
        console.log("Opera doesn't support Automation now!")
    }
}