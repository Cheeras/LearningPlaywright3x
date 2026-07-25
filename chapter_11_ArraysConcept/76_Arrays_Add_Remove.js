//Add and Remove
let arr = [1,2,3];
console.log("Before adding  the element to the Array");
console.log(arr)
console.log("exeuted the push operation from the array - Adding new element to the array at the end");
arr.push(4);//adding at the END of the array

console.log("After adding the element to the Array");
console.log(arr)

//Remove from the END
console.log("Before Removing the Array");
console.log(arr)
console.log("exeuted the pop operation from the array - removing element from the end of the array");
arr.pop();//Remove from the END
console.log("After removing element from  the Array");
console.log(arr)


arr.push(5,6);//we can push multiple elements end of the array
console.log(arr);

//Insert new element at the beginning of the array
arr.unshift(99);
console.log(arr);

arr.unshift(98,100);
console.log(arr);

//Remove the element from the beginning of the Array
arr.shift();
console.log(arr);
//[100,99,1,2,3,5,6]

arr.splice(2,1);
console.log(arr);

arr.splice(2,0,98);
console.log(arr);

arr.splice(2,1,95);
console.log(arr);

arr.splice(2,1,10,20);
console.log(arr);

arr.splice(2,95);
console.log(arr);