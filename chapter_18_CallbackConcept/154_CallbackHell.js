//Real QA scenario: E2E Login Flow app.vwo.com

function openBrowser(callback){
    console.log("Opening the browser");
    setTimeout(function() {
        console.log("Step 1 - browser starting....");
        callback();
    },500);
}

function gotoLoginPage(callback){
    setTimeout(function () {
        console.log("Step 2- Login page loaded");
        callback();
    },500);
}

function enterCredentials(callback){
    setTimeout(function () {
        console.log("Step 3: Credentials entered");
        callback();
    },500);
}

function clickLogin(callback) {
    setTimeout(function(){
        console.log("Step 4: Login button clicke");
        callback();
    },500);
}

// This is callback hell

openBrowser(function(){
    gotoLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test is Completed");
            })
        })
    })
})