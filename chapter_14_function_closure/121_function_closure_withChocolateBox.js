function createChocolateBox() {
    let chocolates = 3;

    function eatChocolate() {
        chocolates--;
        console.log(`Chocolates left: ${chocolates}`);
    }
    return eatChocolate;
}

const myBox = createChocolateBox();
myBox(); 
myBox();
myBox();
myBox();

/**
 * Simple meaning
 * 
 * The Outer function says
 * 
 * "Here is the eatChocolate function. It can also take my chocolates variable with it."
 * 
 * Even after createChocolateBox() finishes, eatChocolate() remembers how many chocolates remain.
 * 
 */