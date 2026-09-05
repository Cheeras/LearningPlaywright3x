interface TestConfig {
    browser: string;
    headless: boolean;
    baseURL: string;
    timeout?: number;
    retries?: number;
}

/**
 * Syntax of the Type Assertion
 * 
 * let localConfig : TestConfig = { ... }
 * 
 * let = keyword
 * localConfig = variable name
 * TestConfig = type annotation
 * { ... } object literal or value
 * 
 * 
 */
//Type Assertion or Type Annotaion with an Object Literal
let localConfig: TestConfig = {
    browser: "Chrome",
    headless: false,
    baseURL: "https://staging.app.com"
}

//Type Assertion or Type Annotaion with an Object Literal
let ciconfig : TestConfig = {
    browser: "Firefox",
    headless: false,
    baseURL: "http://localhost:3000",
    timeout: 10000,
    retries: 3
}

console.log("CI:", ciconfig.browser, "| timeout:",ciconfig.timeout);
console.log("Local:",localConfig.browser,"| timeout:",localConfig.timeout);