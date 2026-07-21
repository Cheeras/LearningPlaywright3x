//Switch case
//Switch Case Expression - Number Most common
let day = 2;
switch(day){//here day is of type number
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
}

//since expression is number case type should be number

//Switch case express - String

let browserName = "Chrome";

switch(browserName){
    case "Chrome":
        console.log("Chrome Browser launched");
        break;
    case "FireFox":
        console.log("Firefox launched");
        break;
    case "Edge":
        console.log("Edge browser is launched");
        break;
    case "Opera":
        console.log("Opera browser launched");
        break;
    default:
        console.log("Invalid browser "+browserName);
}

//since switch case expression is String type then case type shoud be String

//Switch case Expression - boolean

let isLoggedIn = true;
switch(isLoggedIn){
    case true:
        console.log("Login successful");
        break;
    case false:
        console.log("Login failed please try again");
}

//Since Switch case expression is of boolean type then case type should be boolean

//Swithc case Expression - Character
//JavaScript doesn't have a separate char type like Java.
//A character is just a string of length 1.

let grade = "A";
switch (grade){
    case "A":
    console.log("Excellent");
    break;
    case "B":
    console.log("Good");
    break;
}

//Switch case expression - null
let value = null;
switch(value){
    case null:
        console.log(value);
        break;
}

//since Switch case expression is null case type should be null

//Switch case expression - undefined
let value;
switch(value){
    case undefined:
        console.log(value);
        break;
}

//Since switch case expression is undefined case type shold be undefined

//Switch case expression - Object

const person = { name: "Shankar"};
switch(person){
    case person:
        console.log("Same object");
        break;
}

//Since switch case expression is of type person then case type should be person

