//For loop
//syntax
//for(initilization:condition:updation(increment/decrement))

//print 1 to 10 numbers
for(let i = 1; i<=10;i++){
    console.log(i);
}

//Is writing initialization is mandatory inside for syntax
//Ans: it is not mandatory we can write out side of the for loop as well

let j = 1;

for(;j<=10;j++){//it this valid syntax -- Yes this is valid syntax
    console.log(j);
}

//can we move condition to any where out of the for loop syntax
//need to find 

let k = 1;
for(;;k++){ //by default if you don't specify any condition it will take it as true in place of the condtion
    //it will be infinite loop
    //why it is infinite loop
    //we have not specified any condition here by default javascript will take it as true default
    //that is the reason it is infinite loop
    console.log(k)
}

let l = 1;
for(;false;l++){//if we specify false inplace of condition it won't go inside for loop forever
    console.log(l);
}

//can we specify the for loop with out updation (increment or decrement)
//ans is yes

let m = 1;
for(;;){//still it is infinite loop
    console.log(m);
    m++;
}

//missing updation
for(let i=1;i<=5;){
    console.log(i);
}