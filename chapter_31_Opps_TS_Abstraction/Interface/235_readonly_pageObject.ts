//readonly in the Page object class
interface BasePage {
    url: string;
    title: string;
}

interface LoginPage extends BasePage {
    readonly usernameField: string;
    readonly passwordField: string;
    readonly loginButton: string;
}

interface DashboardPage extends BasePage {
    readonly welcomeMessage: string;
    readonly logoutButton: string;
}

interface FreeTilePage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string
}

let loginPage12: LoginPage = {
    url: "/login",
    title: "Login Page",
    usernameField: "#username",
    passwordField: '#password',
    loginButton: "#login-btn"
}

let freeTrailPage: FreeTilePage = {
    url: "/free-trail",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit"
}

console.log("Login Page URL:", loginPage12.url);
console.log("Login Page Title:", loginPage12.title);

console.log("Free Trail Page URL",freeTrailPage.url);
console.log("Free Trail Page Title",freeTrailPage.title);
