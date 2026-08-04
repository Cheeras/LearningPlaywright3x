//IIFE 
//Immediately Invoked function expression
//They don't need to be called

function name1(){
    console.log("Hello");
}

name1();

//IIFE

(function() {
    console.log("Anonymous function");
})();

(function() {
    console.log("Staging");
})();

//Arrow Crazy

(() => {
    console.log("Set up completed");
})();