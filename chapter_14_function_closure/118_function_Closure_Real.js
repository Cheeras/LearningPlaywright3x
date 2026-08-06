const { run } = require("node:test");

function maxRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts ++;
        if(attempts > max){
            return `${testName} exceeded  max retries ${max}`;
        }
        return `Attemp ${attempts}/${max} for ${testName}`;
    };
    return tryAgain;
}

let runTCRetry = maxRetryTracker(3);
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));