//var is function scope
//var can allow to have redirection

var a = 10;
console.log(a);//10

function printSomeThing() {
    var a = 20;
    console.log(a);//20
    if(true){
        var a = 30;
        console.log(a);//30
    }
    console.log(a);//20 // it is not 20 it is 30 because 
}

//printSomeThing();

//let is Block scoped

let b = 22;//Global scope
console.log(b);//22

function printHello(){
    console.log("Welcome to Shankar Cheerala youtube channel");
    let b = 30; // Local Scope
    console.log(b);//30
    if(true){
        let b = 5;
        console.log(b);//5
    }
    console.log("let ->",b);//30
}

//calling fun
//printHello();

//let does not allow you to have re-declaration - in case of let redeclaration of 
// same variable is not allowed
// let aa = 10;
// let aa = 20;

// var allows you to re declare - Re declaration of same variable is allowed
// var aa = 10;
// var aa = 20;

//combination of let and var - Re declaration of same variable is not allowed
// let aa = 10;
// var aa = 20;

//combination of var and let - Re declaration of same variable is not allowed
// var aa = 10;
// let aa = 20;

const pi = 3.14;
console.log(pi);
//pi = 3.1423232;

//const is also block scoped
{
 const day = "Monday";
 if(true){
   const day = "Tuesday"
    console.log(day);
 }   
 console.log(day);
}

//Is redeclaration of same variable is allowed in case of const
//let's find out

// const month = "Jan";
// const month = "Feb";

/**
 * Note:
 * 
 * Re-declaration of same variable is allowed in case of var only but in case of the 
 * const and let we can not re declare the same variable it will 
 * give error saying "Identifier 'month' has already been declared"
 * 
 * 
*/

const aaa = [1,2,3];
aaa.push(10); 

console.log(aaa);