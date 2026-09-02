class Environment {
    constructor(name = "staging" , port = 3000) {
        this.name = name;
        this.port = port;
    }
    getURL() {
        return `http://${this.name}:${this.port}`;
    }
}

let env1 = new Environment("production", 8080);
console.log(env1.getURL()); // Output: http://production:8080
let evn2 = new Environment();
console.log(evn2.getURL()); // Output: http://staging:3000
