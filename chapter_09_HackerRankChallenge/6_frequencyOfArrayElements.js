let arr = [9,8,16,8,9,5,16];

/**
 * 
 * 5 appears 2 times
   3 appears 2 times
 * 
 * 
*/

let frequencyMap = new Map();

for(const num of arr){
     frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
}

for (const [key, value] of frequencyMap) {
  console.log(`${key} appears ${value} times`);
}
