let apiCall = new Promise(function(resolve,reject){
    resolve({status : 200, body : "User Data"});
});

apiCall.then((result) => {
    console.log(result);
    console.log(result.status);
    console.log(result.body);
});

//.then() runs ONLY when the promise resolves successfully