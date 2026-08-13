function openBrowser() {
    return new Promise(function(resolve){
        // time 15, 10
        resolve("Browser has been opened!");
    })
}

function goToLogin(){
    return new Promise(function(resolve){
        resolve("Login page loaded");
    });
}

function enterCredentials(){
    return new Promise(function(resolve){
        resolve("Credentials are entered");
    });
}

function clickLogin(){
    return new Promise(function(resolve){
        resolve("Logged in successfully");
    });
}

openBrowser()
    .then(function(message){
        console.log("Step 1 :",message);
        return goToLogin();
    }).then(function(message){
        console.log("Step 2 :",message);
        return enterCredentials();
    }).then(function(message){
        console.log("Step 3 :",message);
        return clickLogin();
    }).then(function(message){
        console.log("Step 4 :",message);
    }).catch(function(error){
        console.log("Error : ",error);
    }).finally(function() {
        console.log("Done Execution!");
    })