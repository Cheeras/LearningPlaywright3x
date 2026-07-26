//Array functions in javascript
let arr = [99,10,102,67,13,22];

//Phase 1 - Basic Array Operations 
//push() - Add element at end
console.log("Printing the Array before adding element at the end of the array -- using push()" 
    ,"method - push() method will return new lenght of the array after adding elements to the array");
console.log(arr);
let newlength = arr.push(98);
console.log(newlength);

console.log("Printing the array after push operation ");
console.log(arr);

/**
 * Notes for push() function
 * - It will add element at end of the array
 * - return the newlenght of the array after adding the element into array
 * - can push one or multiple elements into array
 * 
*/

//pop() - Remove last element 

console.log("Remove last element using pop() operation and pop() will return the removed element");
let removeElement = arr.pop();
console.log("Removed element from the array is ",removeElement);
console.log("Printing the array after pop operation ");
console.log(arr);

/**
 * Notes for pop() function
 * - It will remove element at end of the array
 * - return the removed element
 * 
*/

//unshift - Add element at the beginning 

console.log("Add element at the beginning of the array using unshift() and return the newlength of the array same like push() operation");
arr.unshift(100);
arr.unshift(29,39);
console.log("Printing the array after unshift operation ");
console.log(arr);

/**
 * Notes for unshift() function
 * - It will add element at beginning of the array
 * - return the newlenght of the array after adding the element into array
 * - we can add one or multiple elements into array at the beginning
 * 
*/


//shift - Remove element at the first/beginning 

console.log("Remove element at the beginning of the array using shift() and return the removed element");
arr.shift();
console.log("Printing the array after shift operation ");
console.log(arr);

/**
 * Notes for shift() function
 * - It will remove element at beginning of the array
 * - return the removed elememnt 
 * 
*/

//at() - Access array elements using postive or negative indexes

console.log("Printing the array elements using index - at() function");
console.log(arr.at(0));
console.log(arr.at(1));
console.log(arr.at(2));
console.log(arr.at(9));//un like in java we will not get ArrayIndexOutOfBounceException - we will get undefined
console.log(arr.at(-2));
console.log(arr.at(-4));
console.log(arr.at(-9));

/**
 * Notes for at() function
 * - will return the element located at specified index
 * - we can access both positive(farward direction starting from zero),negative(back ward direction) index and zero index
 * 
*/

console.log(arr);
arr.push(39);
console.log(arr);

//index() - return the first occurance of index of the element
console.log(arr.indexOf(39));
//lastIndex() - return the last index of the element
console.log(arr.lastIndexOf(39));

//includes() - check whether given value exists in array

console.log(arr.includes(13));
console.log(arr.includes(1));

console.log(arr.includes(67,5));

/**
 * Notes() - includes() fucntion
 * - return true if search element present other wise false
 * - we start search the element from the specified index as well 
*/
