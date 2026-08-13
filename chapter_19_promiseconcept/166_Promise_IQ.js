let p = new Promise(function(resolve,reject){
    resolve(42);
});

p.then(function(value){
    console.log("Answer: ",value);
})

let p1 = new Promise(function(resolve,reject){
    reject("Something broke");
});

p1.catch(function(error){
    console.log("caught: ",error);
});

let p3 = Promise.resolve(5);

p3.then(function(value){
    return value * 10;
}).then(function(value){
    console.log("Result : ",value);
});

Promise.resolve(1)
    .then(function(val){
        console.log(val);
        return val + 10;
    })
    .then(function(val){
        console.log(val);
        return val + 10;
    })
    .then(function(val){
        console.log(val);
    });


Promise.resolve("start")
    .then(function(val){
        console.log(val);
        throw new Error("Broke at step 2");
    })
    .then(function(){
        console.log("This will NOT run");
    })
    .catch(function (error){
        console.log("Caught :",error.message);
    });

    Promise.reject("Test failed")
        .then(function (data){
            console.log("Data:", data);
        })
        .catch(function(err){
            console.log("Error: ",err);
        })
        .finally(function() {
            console.log("Cleanup Done");
        })