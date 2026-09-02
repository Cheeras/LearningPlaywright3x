class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
        return this.count;
    }

    display() {
        console.log(`Current Count: ${this.count}`);
        return this.count;
    }
}


new Counter().increment().increment().increment().display(); // Output: 1