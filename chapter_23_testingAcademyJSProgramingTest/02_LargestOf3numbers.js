//Q 11 - Largest of 3 numbers
let a = 45, b = 45, c = 4;

if(a === b && a === c){
    console.log("All are equal");
} else if( a === b && a > c){
    console.log("A and B are larger");
}else if( b === c && b > a){
    console.log("B and C are larger");
}else if( a === c && a > b){
    console.log("A and C are larger");
}
else if(a > b && a > c){
    console.log("A is larger ",a);
}else if(b > a && b > c){
    console.log("B is larger ",b);
}else {
    console.log("C is larger",c);
}