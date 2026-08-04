function add(a,b,c){
    return a + b + c;
}

let num = [1,2,3];
console.log(add(...num));


function hasError(...codes){
 return codes.some(c => c >=400);//some means atleast one value should match
}

let responseCodes = [200,201,404];
console.log(hasError(...responseCodes));//... means any number of parameters

let responseCodes2 = [200,201,400,500];
console.log(hasError(...responseCodes2));
