enum HTTPMethod {
    Geto = "GET",
    Posto = "POST",
    Puto = "PUT",
    deleto = "DELETE"
}

function sendRequest(method: HTTPMethod, endpoint: string): void{
    console.log(method+ " " +endpoint +" -> 200 Ok");
}

sendRequest(HTTPMethod.Geto,"/api/users");
sendRequest(HTTPMethod.Posto,"/api/users");
sendRequest(HTTPMethod.Puto,"/api/users");