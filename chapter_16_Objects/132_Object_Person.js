const user = {
    // --- Basic Info (String, Number) ---
    name: "Rakesh",
    age: 65,
    email: "Rakesh@gmail.com",
    phone: "+91-9876543210",
    username: "rakesh_official",

    // --- Address (Nested Object) ---
    address: {
        street: "12th Main Road",
        city: "Bangalore",
        state: "Karnataka",
        pincode: 560001,
        country: "India",
        coordinates: {
            lat: 12.9716,
            lng: 77.5946
        }
    },

    // --- Hobbies (Array of Strings) ---
    hobbies: ["Cricket", "Chess", "Trekking", "Photography", "Reading"],

    // --- Skills (Array of Objects) ---
    skills: [
        { name: "JavaScript", level: "Expert" },
        { name: "Playwright", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Python", level: "Beginner" }
    ],

    // --- Education (Array of Objects) ---
    education: [
        {
            degree: "B.E. Computer Science",
            university: "VTU",
            year: 1982,
            grade: "First Class"
        },
        {
            degree: "M.Tech Software Engineering",
            university: "IISc Bangalore",
            year: 1985,
            grade: "Distinction"
        }
    ],

    // --- Work Experience (Array of Objects) ---
    workExperience: [
        { company: "TechCorp", role: "Software Engineer", years: 5 },
        { company: "InnoSoft", role: "Senior Developer", years: 8 },
        { company: "CloudBase", role: "Tech Lead", years: 12 }
    ],

    // --- Social Links (Object) ---
    social: {
        github: "https://github.com/rakesh-dev",
        linkedin: "https://linkedin.com/in/rakesh",
        twitter: "@rakesh_official"
    },

    // --- Boolean Flags ---
    isMarried: true,
    isEmployed: true,
    hasDrivingLicense: true,

    // --- Null / Undefined examples ---
    spouseName: "Sunita",
    middleName: null,        // explicitly no middle name
    profilePicture: undefined, // not uploaded yet

    // --- Date (as string) ---
    dateOfBirth: "1961-04-15",
    memberSince: "2000-01-01",

    // --- Function (Method) ---
    getFullName: function () {
        return `Rakesh ${this.middleName ?? ""} ${this.username}`.trim();
    },

    // --- Arrow Function (Method) ---
    getAgeInDays: () => {
        return 65 * 365; // simplified
    },

    // --- Function that returns a summary string ---
    getSummary: function () {
        return `${this.name}, ${this.age} years old, lives in ${this.address.city}. Skills: ${this.skills.map(s => s.name).join(", ")}.`;
    },

    // --- Nested function inside object ---
    contact: {
        primary: "Rakesh@gmail.com",
        secondary: "rakesh.work@yahoo.com",
        sendEmail: function (subject) {
            return `Sending email to ${this.primary} with subject: "${subject}"`;
        }
    }
};

// --- Testing the object ---
console.log("===== USER OBJECT =====");
//console.log(user);

console.log("\n===== ACCESSING PROPERTIES =====");
console.log("Name:", user.name);
console.log("City:", user.address.city);
console.log("First Hobby:", user.hobbies[0]);
console.log("Top Skill:", user.skills[0].name, "-", user.skills[0].level);
console.log("Latitude:", user.address.coordinates.lat);

console.log("\n===== CALLING METHODS =====");
console.log("Full Name:", user.getFullName());
console.log("Age in Days:", user.getAgeInDays());
console.log("Summary:", user.getSummary());
console.log(user.contact.sendEmail("Hello Rakesh!"));

console.log("\n===== CONST BEHAVIOUR =====");
// const prevents reassignment of the variable, NOT mutation of the object
// This is ALLOWED:
user.age = 66;
user.hobbies.push("Gardening");
user.address.city = "Mysore";
console.log("Updated age:", user.age);
console.log("Updated hobbies:", user.hobbies);
console.log("Updated city:", user.address.city);

// This would throw an ERROR (TypeError: Assignment to constant variable):
// user = { name: "New" }; // ❌ NOT allowed

console.log("\n✅ const only prevents variable reassignment, not object mutation.");
