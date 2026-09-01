class BaseTest {
    setUp(){
        console.log("BaseTest Open Browser");
        }
} 
class APITest extends BaseTest {
    setUp(){
        console.log("APITest Open Browser");
    }
}

let test = new APITest();
test.setUp();