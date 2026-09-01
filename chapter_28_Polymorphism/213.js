class BaseTest {
    setUp() {
        console.log("BaseTest: Open Browser");
    }
}

class APITest extends BaseTest {
    setUp() {
        console.log("APITest: Open Browser");
    }
}

let btest = new BaseTest();
let test = new APITest();
btest.setUp();
test.setUp();

//TS = JS + Rules