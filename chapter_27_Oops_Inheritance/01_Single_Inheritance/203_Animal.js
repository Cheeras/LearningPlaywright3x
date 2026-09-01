class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
     }
     sleep() {
        console.log(`${this.name} is sleeping.`);
     }
     foo() {
        console.log(`${this.name} is fooing.`); 
     }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    brak() {
        super.foo();
        console.log(`${this.name} is barking.`);
    }
}
let dog = new Dog("Buddy", "Golden Retriever");
dog.eat(); // Buddy is eating.
dog.sleep(); // Buddy is sleeping.
dog.brak(); // Buddy is fooing. Buddy is barking.
console.log(dog.breed); // Golden Retriever