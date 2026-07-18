let environment = "Staging";
let baseURL  = environment === "Production" ?
            "https://exampl.com" :
            "https://stagging-api.example.com";

console.log(baseURL);