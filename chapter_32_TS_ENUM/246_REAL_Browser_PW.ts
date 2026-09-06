enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}

function launchBrowser(browser: Browser): void {
    switch(browser){
        case Browser.Chrome:
            console.log("Launching Chromium (Chrome V120)");
            break;
        case Browser.Firefox:
            console.log("Launching Gecko (Firefox V115)");
            break;
        case Browser.Safari:
            console.log("Launching Webkit (Safari V17)");
            break;
        case Browser.Edge:
            console.log("Launching Chromium (Chrome V120)");
            break;
        
    }
}
launchBrowser(Browser.Chrome);