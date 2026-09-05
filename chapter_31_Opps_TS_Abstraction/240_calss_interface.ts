interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
}

class TestCase implements Executable {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    run(): void {
        console.log("[RUN] " + this.name);
    }
    getStatus(): string {
     return "PASS";
    }
    
}

let obj = new TestCase("TestLogin");
obj.run();
obj.getStatus();

