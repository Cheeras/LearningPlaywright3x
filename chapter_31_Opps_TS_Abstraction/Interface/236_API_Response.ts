//Interface are used in API Testing

interface APIResponse {
    statuscode: number;
    body: string;
    headers?: object;
    responseTime: number;
}

let responseData: APIResponse = {
    statuscode:  200,
    body: "{}",
    responseTime: 300
}

console.log("Status ",responseData.statuscode);
console.log("Body:",responseData.body);

let responseData2: APIResponse = {
    statuscode: 0,
    body: "",
    headers: {},
    responseTime: 0
}