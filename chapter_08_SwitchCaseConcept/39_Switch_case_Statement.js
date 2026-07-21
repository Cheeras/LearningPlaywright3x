////Note
//in switch case statement if you are not writing the break statment
//after each case it will continueosly execute following case statements
//until you will find the break
//if there is no break fount it will execute all the case statement
//including default


//switch(expression)
//expression can be number,String,boolean,character,null and undefined
//object ref
//enum like constants
//java script compares the each case statement with strict comparision
//=== both type of the variable and variable value should be same
 

let day = 10;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tueday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thur");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}