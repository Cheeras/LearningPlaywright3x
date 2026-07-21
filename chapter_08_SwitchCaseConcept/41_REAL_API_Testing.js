let responseCode = 404;
switch(responseCode) {
    case 200:
        console.log("Success 200 Okay");
        break;
    case 404:
        console.log("Resource not found - 404 Not found");
        break;
    default:
        console.log("No status code matched");
}