//Switch
//0- sunday 1- monday 2- Tuesday and so on
let day = 1;
switch(day){
    case 0:
        console.log("Sunday - Rest Day");
        //break;
    case 1:
        console.log("Monday - Sprint planning");
        //break;
    case 2:
        console.log("Tuesday - Development");
        break;
    case 3:
        console.log("Wednesday - Code review");
        break;
    case 4:
        console.log("Thursday - Deployment");
        break;
    case 5:
        console.log("Friday - Testing");
        break;
    case 6:
        console.log("Saturday - Rest Day");
        break;
    default:
        console.log("Invalid day");
}

