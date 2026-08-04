let a = "Shankar";

if(true) {
    console.log(a);//ref
    let a = "Test";
}

//TDZ
//Temporal Dead Zone

//Global Scope
//a ="shankar";
//Enter the Block, Block scope
//a = TDZ (exist but not initialized)
//console.log(a)