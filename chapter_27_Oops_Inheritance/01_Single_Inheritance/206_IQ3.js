class TestCase {
    execute() {
        console.log("Running generic testcase");
    }
}

class UnitTest extends TestCase {   
    execute() {
        console.log("Running unit testcase - checking one function");
    }
}

class APITest extends TestCase {
    execute() {
        console.log("Running API testcase - sending HTTP requests");
    }
}

class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E testcase - opening browser");
    }
}

let tests = [new UnitTest(), new APITest(), new E2ETest()];
//tests.forEach(test => test.execute());
tests.forEach(function(test){
    test.execute();
} );