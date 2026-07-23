//Level 3 - Advanced 
//Question 11 - Electricity Bill Calculation
//This is for flat rates
let numberOfUnits = 122;
let totalBill = 0;
if(numberOfUnits < 0){
    console.log("Invalid number of Units");
}else if(numberOfUnits <= 100){
    totalBill += (numberOfUnits*2);
}else if(numberOfUnits <= 200){
    totalBill += (numberOfUnits*3);
}else if(numberOfUnits <= 300){
    totalBill += (numberOfUnits*5);
}else {
    totalBill += (numberOfUnits*7);
}
console.log(`Total Current Bill is ${totalBill} for the number of units ${numberOfUnits}`);

//Real world - Current Billing
let numberUnits = 122;
let totalBill = 0;
if(numberUnits <0 ){
    console.log("Invalid Units");
}else if(numberUnits <= 100){
    totalBill = totalBill + (numberUnits*2);
}else if(numberUnits <=200){
    totalBill = totalBill +
                (100*2)+
                (numberUnits-100)*3;
}else if(numberUnits <= 300){
    totalBill = totalBill +
                (100*2)+
                (100*3)+
                (numberUnits-200)*5;
}else {
    totalBill = totalBill +
                (100*2)+
                (100*3)+
                (100*5)
                (numberUnits-300)*7;
}
console.log(`Total current Bill for the billing unit of ${numberUnits} is ${totalBill}`);

//Question 12 - BMI Calculator
let BMI = 22;
if( BMI <= 18.5){

}