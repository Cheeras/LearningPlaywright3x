//Q 12 - Smallest of 3 numbers
let a = 45, b = 45, c = 23;

if(a === b && a === c){
    console.log("All are equal");
} else if( a === b && a < c){
    console.log("A and B are smaller");
}else if( b === c && b < a){
    console.log("B and C are Smaller");
}else if( a === c && a < b){
    console.log("A and C are Smaller");
}
else if(a < b && a < c){
    console.log("A is Smaller ",a);
}else if(b < a && b < c){
    console.log("B is Smaller ",b);
}else {
    console.log("C is Smaller",c);
}