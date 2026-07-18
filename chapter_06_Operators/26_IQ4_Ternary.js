//template literal 

let responseTime = 1100;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached";

//Template literal
console.log(`Response time is ? - ${responseTime} - ${slaStatus}`)

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);