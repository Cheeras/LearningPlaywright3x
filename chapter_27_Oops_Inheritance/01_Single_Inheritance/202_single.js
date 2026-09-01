class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }
    open(){
        console.log(`Opening ${this.pageName} page`);
    }
    close(){
        console.log(`Closing ${this.pageName} page`);
    }
}

class LoginPage extends BasePage {

}

let page = new LoginPage("Login");
page.open();
page.close();