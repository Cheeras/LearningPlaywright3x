let checkAuth = Promise.resolve("Auth Okay");
let checkDB = Promise.resolve("DB Okay");
let checkCache = Promise.resolve("Chache Okay");

Promise.all([checkAuth,checkDB,checkCache]).then(function (results){
    console.log("All checks: ", results);
})

Promise.all([Promise.resolve("Auth Okay 1"),
            [Promise.reject("DB DOWN")],
            [Promise.resolve("Cache Okay")]
]).then(function(result) {
    console.log(result);
}).catch(function(error){
    console.log(error);
})