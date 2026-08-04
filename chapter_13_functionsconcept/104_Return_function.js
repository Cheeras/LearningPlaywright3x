function getStatus(code){
    if(code >= 200 && code < 300) {
        return "Success";
    }else if(code >=300 && code < 400){
        return "Redirection";
    }
    else if(code >=400 && code < 500){
        return "Client error";
    }
    else if(code >=500){
        return "Internal server error";
    }
    else {
        return "Un Known";
    }
}

console.log(getStatus(200));
console.log(getStatus(300));
console.log(getStatus(500));

//Returning nothing --> undefined
function logTest(name){
    console.log(`Running: ${name}`);
    //no return statement
}

logTest("Hi this is a log");

function returnObject(){
    return [1,2,3,4,5];
    //return {"name : shankar"}//in case of objects
}