function startGame() {
    let score  = 0;

    function getPoint() {
        score = score + 1;
        console.log(`Your score is: ${score}`);
    }
    return getPoint;
}

const play = startGame();
play(); //Your score is: 1
play(); //Your score is: 2
play(); //Your score is: 3
play(); //Your score is: 4

/**
 * Simple explanation
 * Think of score as  a number written in the games' notebook
 * startGame() create the notebook with score = 0
 * It gives the getPoint() function to play.
 * Every time play() runs, one point is added.
 * getPoint() remembers the old score 0 - 1 - 2 - 3 
 * 
 * This special ability of a function to rememeber an outside variable is called a closure
 * 
*/