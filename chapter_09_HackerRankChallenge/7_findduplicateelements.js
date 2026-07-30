let arr = [9,8,16,8,9,5];

let dup = [];

// //with normal for loop
// for(let i = 0 ;i < arr.length; i++){
//     for(let j = i+1;j< arr.length;j++){
//         if(arr[i] === arr[j] && !dup.includes(arr[i])){
//             dup.push(arr[i]);
//         }
//     }
// }

//console.log(dup);
//with for loop with in 
// for(let i in arr){
//     for(let j in arr){
//         if( (i !== j) && arr[i] === arr[j] && !dup.includes(arr[i])){
//             dup.push(arr[i]);
//         }
//     }
// }

// console.log(dup);
//for loop of
for (const i of arr) {
    let count = 0;

    for (const j of arr) {
        if (i === j) {
            count++;
        }
    }

    if (count > 1 && !dup.includes(i)) {
        dup.push(i);
    }
}

console.log(dup);


