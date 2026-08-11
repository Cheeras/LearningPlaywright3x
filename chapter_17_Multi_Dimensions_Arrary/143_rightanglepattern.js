//n =3 
//1
//2 3
//4 5 6


//00
//10 11
//20 21 22

//out put 

//* s s
//* * s
//* * *

// s represnts space

let n = 3
for( let i = 0 ; i < n ; i ++){
    for(j = 0; j <= i; j++){
      
         process.stdout.write("*"+" ");
    }
      console.log();
}