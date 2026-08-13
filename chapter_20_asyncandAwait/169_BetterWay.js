function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser is Opened!");
    });
}

function goToLogin(){
    return new Promise(function(resolve){
        resolve("Login page is Loaded");
    });
}

function enterCredetials(){
    return new Promise(function(resolve){
        resolve("Please enter the Credentials");
    });
}

function clickLogin(){
    return new Promise(function(resolve){
        resolve("Login is Successfull");
    });
}

async function runLoginFlow() {
    let msg1 = await openBrowser();
    console.log("Step 1: ",msg1);

     let msg2 = await goToLogin();
    console.log("Step 2: ",msg2);

     let msg3 = await enterCredetials();
    console.log("Step 3: ",msg3);

     let msg4 = await clickLogin();
    console.log("Step 4: ",msg4);
    
}

runLoginFlow();



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