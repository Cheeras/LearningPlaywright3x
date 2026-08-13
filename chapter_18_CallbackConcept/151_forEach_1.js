let names = ["shankar","Sravya","Jeyadev Sai","Dharmik Sai"];

//iterate over the names using forEach loop with arrow function

names.forEach((name,index) =>{
    console.log(`Test ${name} at the ${index}`);
});

//using the forEach loop using the anonymous function

names.forEach(function(name,index){
    console.log(index+ " at the "+name);
})