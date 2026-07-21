let browser = "Brave12";

switch(browser){
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser - uses JavaScriptcore engine");
        break;
    default:
        console.log("Please pass correct browsername "+browser);
}