function buildEndPoint(base: string, endpoint: string) {
    return base + endpoint;
}

function isSuccessCode(code: number) {
    return code >= 200 && code < 300;
}

function logTestStep(step: string): void {
    console.log("[step]" + step);
}

console.log(buildEndPoint("https://api.example.com", "/users")); // Output: https://api.example.com/users
console.log(isSuccessCode(200)); // Output: true
console.log(isSuccessCode(404)); // Output: false
logTestStep("Starting API test"); // Output: [step]Starting API test    