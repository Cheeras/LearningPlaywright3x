function wrapResponse<T>(statuscode: number, data: T): { statusCode: number; data: T}{
    return { statusCode: statuscode , data};
}

let userResp = wrapResponse<string>(200,"admin");

console.log(userResp);

let flagResp = wrapResponse<boolean>(200,true);
console.log(flagResp);