//Nested Ternary Operator
let age = 26;
//age > 18 -> he will goa, else no
// drink > 25 yes, else no

let is_shankar_enjoy = age > 18 ? (age > 26 ? "Drink" : "No") : "No"

console.log(`can shankar drink ${is_shankar_enjoy}`);


let age1 = 12;

let ticketPrice =
    age1 < 5 ? "Free" :
    age1 <= 12 ? "₹100" :
    age1 <= 60 ? "₹200" :
    "₹150";

console.log(ticketPrice);

let score = 165;

let result =
    score >= 200 ? "Excellent Score" :
    score >= 170 ? "Competitive Score" :
    score >= 140 ? "Average Score" :
    "Below Average";

console.log(result);