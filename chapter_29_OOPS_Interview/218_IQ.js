class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    greet() {
        console.log(`Hello, ${this.name}! Your role is ${this.role}.`);
    }
}

let user1 = new User("Alice", "alice@example.com", "Admin");
let user2 = new User("Bob", "bob@example.com", "User");
user1.greet(); // Output: Hello, Alice! Your role is Admin.
user2.greet(); // Output: Hello, Bob! Your role is User.