class BaseTest {
    constructor(){
        console.log("Parent !");
    }
    setUp(){
        console.log("Base: Open Browser");
    }
    tearDown(){
        console.log("Base: Close Browser");
    }
}

class APITest extends BaseTest {

    constructor(){
        super();
        console.log("Child !");
    }
    setUp(){
        super.setUp();// UITest will help you to call your parent function. super() - constructor,
        // super.method() - method of parent class
        console.log("UI: maximize window");
    }
    tearDown() {
        console.log("UI: take screeshot");
        super.tearDown(); // UITest will help you to call your parent function. 
        // super() - constructor,
    }
}