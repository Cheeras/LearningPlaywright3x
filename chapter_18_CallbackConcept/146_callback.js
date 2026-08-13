function placeOrder(item,callback){
    console.log("Order placed.");
    callback();
}

//Defining the call back
function print() {
    console.log("Normal function - Done with the order");
}

//first way 
placeOrder("Burger",print);

// Second way - anonymous function
placeOrder("Burger",function(){
    console.log("Order is ready !, pick it up !");
})

//Thrid way - Arrow function

placeOrder("Burger", () => {
    console.log("Arrow function, I am from the Arrow function with out name! ")
})