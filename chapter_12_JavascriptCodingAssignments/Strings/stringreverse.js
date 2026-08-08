let str = "Welcome";
console.log(str.length);
//length is 7
//index from 0 to 6(length-1)

let revString = "";
for(let i = str.length-1 ; i >= 0;i--){
    revString = revString + str.charAt(i);
}

console.log(revString);

