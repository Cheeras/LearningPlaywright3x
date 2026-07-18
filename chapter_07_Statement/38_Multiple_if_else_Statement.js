let score = 78;

if(score >=90){
    console.log("Grade: A - Excellent");
}else if(score >=80 && score <90){
    console.log("Grade B - Good");
}else if(score >=70 && score <80){
    console.log("Grade C - Can do better");
}else if(score >=60 && score <70){
    console.log("Grade D - Needs improvement");
}else if(score >=50 && score <60){
    console.log("Grade E - Bring Parents");
}else {
    console.log("Better luck next time");
}

//Better version

let score = 78;

if (score >= 90) {
    console.log("Grade A - Excellent");
} else if (score >= 80) {
    console.log("Grade B - Good");
} else if (score >= 70) {
    console.log("Grade C - Can Do Better");
} else if (score >= 60) {
    console.log("Grade D - Needs Improvement");
} else if (score >= 50) {
    console.log("Grade E - Bring Parents");
} else {
    console.log("Grade F - Better Luck Next Time");
}

//more better version
let score = 78;
let grade;

if (score >= 90) {
    grade = "A - Excellent";
} else if (score >= 80) {
    grade = "B - Good";
} else if (score >= 70) {
    grade = "C - Can Do Better";
} else if (score >= 60) {
    grade = "D - Needs Improvement";
} else if (score >= 50) {
    grade = "E - Bring Parents";
} else {
    grade = "F - Better Luck Next Time";
}

console.log(`Grade: ${grade}`);

//Traingle Classifier 