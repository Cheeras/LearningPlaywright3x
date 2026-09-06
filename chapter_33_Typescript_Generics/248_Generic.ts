function getString(name: string): string {
    return name;
}

getString("Shankar");
//getString(123);//we can not pass becuase it is accepting String type as argument

function getFirstResult<T>(result: T[]): T {
    return result[0]!; // ! = non null assertion operator
}

let firstNumber = getFirstResult<number>([200,400,500]);
let firstString = getFirstResult<string>(["Login","Signup","Car"]);
let firstBoolean = getFirstResult<boolean>([true,false,true]);

console.log("First Code ",firstNumber);
console.log("First String ",firstString);
console.log("First Boolean ",firstBoolean);

