let str = "JavaScript";
let matchs = str.match(/[aeiou]/gi);
let count = matchs ? matchs.length : 0;
console.log(count); 