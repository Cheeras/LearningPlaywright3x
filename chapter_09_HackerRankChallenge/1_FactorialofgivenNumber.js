function factorial(number){
    let factorial=1;
    if(number === 0){
        return 1;
    }
    while(number >= 1){
        factorial = factorial * number;
        number--; 
    }
    return factorial;
}

function main() {
    const n = 4;
    console.log(factorial(n));
}

main();