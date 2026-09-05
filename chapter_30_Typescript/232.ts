function infiniteLoop(): never {
    while (true) {
        console.log("This function never returns.");
    } 
}
//never - function never returns ( throws or infinite loop)

function throwError(message: string): never {
    throw new Error(message);
}