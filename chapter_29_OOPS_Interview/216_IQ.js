class Bug {
    constructor(title,severity,description){
        this.title = title;
        this.severity = severity;
        this.description = description; 
        
    }
    display(){
        console.log(`Title: ${this.title}`);
        console.log(`Severity: ${this.severity}`);
        console.log(`Description: ${this.description}`);
    }
}

let bug1 = new Bug("Login Issue", "High", "User unable to login with valid credentials.");
let bug2 = new Bug("UI Glitch", "Medium", "Alignment issue on the dashboard page.");    
bug1.display();
bug2.display();