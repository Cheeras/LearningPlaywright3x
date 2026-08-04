//normal function
function validateStatuCode(statusCode){
    if(statusCode >=100 && statusCode < 200){
        console.log("Informational");
    }else if(statusCode >= 200 && statusCode < 300){
        console.log("Success");
    }else if(statusCode >= 300 && statusCode < 400){
        console.log("Redirectional");
    }else if(statusCode >=400 && statusCode < 500){
        console.log("Client error");
    }else if(statusCode >=500 ){
        console.log("Server error");
    } else{
        console.log("Unknown error code")
    }
}


//with functino expression
const validateStatusCodeExp = function (statusCode) {
    if(statusCode >=100 && statusCode < 200){
        console.log("Informational");
    }else if(statusCode >= 200 && statusCode < 300){
        console.log("Success");
    }else if(statusCode >= 300 && statusCode < 400){
        console.log("Redirectional");
    }else if(statusCode >=400 && statusCode < 500){
        console.log("Client error");
    }else if(statusCode >=500 ){
        console.log("Server error");
    } else{
        console.log("Unknown error code")
    }
}

//with Arrow function
const validateStatusArrow = (statusCode) => {
    if(statusCode >=100 && statusCode < 200){
        console.log("Informational");
    }else if(statusCode >= 200 && statusCode < 300){
        console.log("Success");
    }else if(statusCode >= 300 && statusCode < 400){
        console.log("Redirectional");
    }else if(statusCode >=400 && statusCode < 500){
        console.log("Client error");
    }else if(statusCode >=500 ){
        console.log("Server error");
    } else{
        console.log("Unknown error code")
    }
}

//function calling
validateStatuCode(200);
validateStatusCodeExp(450);
validateStatusArrow(501);