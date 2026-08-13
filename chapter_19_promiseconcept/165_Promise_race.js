let fastServer = new Promise(function (resolve){
    setTimeout(function(){
        resolve("Fast 100 ms");
    }),100
});

let slowServer = new Promise(function (resolve){
    setTimeout(function(){
        resolve("Slow 500 ms");
    }),500
});


Promise.race([fastServer,slowServer]).then(function(winner){
    console.log("Winner is ",winner);
})
