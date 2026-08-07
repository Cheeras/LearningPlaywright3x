function createPiggyBank() {
    let money = 0;

    function addMoney() {
        money += 10;
        console.log(`Money Saved: ${money}`);
    }
    return addMoney;
}

//calling the function
const myPiggyBank = createPiggyBank();
myPiggyBank(); // Money Saved: 10
myPiggyBank(); // Money Saved: 20
myPiggyBank(); // Money Saved: 30
myPiggyBank(); // Money Saved: 40

/**
 * Simple explanation
 * 
 * createPiggyBank() create a variable called money.
 * Initially, money is 0
 * It returns the addMoney() function
 * myPiggyBank stores the returned function
 * Every time stores the returned function
 * The function remembers the previous valur of money.
 * 
 * This ability to remember money is called a clousre
 * 
*/