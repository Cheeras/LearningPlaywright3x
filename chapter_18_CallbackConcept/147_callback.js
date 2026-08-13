function test(task, callMeWhenDone){
console.log("Hi start the Testcase");
callMeWhenDone();
}

function callBack(){
    console.log("Call me once you are done");
}

//calling the test function
//first way 
test("Open browser",callBack);

//second way - using anonymous function
test("open browser anonymous", function (){
    console.log("Call me once you are done - from anonymous way");
});

//third way - using the arrow function
test("open browser using arrow function",() => {
    console.log("Call me once you are done - from arrow function");
})

