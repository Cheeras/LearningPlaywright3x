//Q 13 - Leap year check
let year = 2016;
if(year < 0){
    console.log("Invalid year");
}else if((year % 4 === 0 && year % 100 !== 0 ) ||( year % 400 === 0)){
    console.log("Leap year");
}else {
    console.log("Not a leap year");
}