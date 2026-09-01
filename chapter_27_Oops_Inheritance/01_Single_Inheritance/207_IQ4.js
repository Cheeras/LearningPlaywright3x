class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("verify: username field exists");
        console.log("verify: password field exists");
        console.log("verify: login button exists");
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log("verify: welcome message shown");
        console.log("verify: sidebar menu showns");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("verify: cart items displayed");
        console.log("verify: total amount calculated");
    }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()];
pages.forEach(function(page){
    page.verify();
    console.log("-------------------");
});

pages.forEach( page => page.verify() );