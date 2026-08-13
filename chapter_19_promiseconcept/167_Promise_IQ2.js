Promise.resolve("Quick Win").then(function(msg){
    console.log(msg);
});

Promise.reject("Quik Loss").catch(function(err){
    console.log(err);
});

let test1 = Promise.resolve("Login: PASS");
let test2 = Promise.resolve("Search: PASS");
let test3 = Promise.resolve("Logout: PASS");

Promise.all([test1,test2,test3]).then(function(result){
    console.log(result);
});

let test4 = Promise.resolve("DashBoard: PASS");
let test5 = Promise.reject("AddUser: FAIL");
let test6 = Promise.resolve("DeleteUser: PASS");

Promise.all([test14,test5,test6]).then(function(result){
    console.log("All:",result);
}).catch(function(err) {
    console.log("Stopped: ",err);
});

Promise.allSettled([Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results){
    results.forEach(function (r){
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + "->" + val);
    })
})