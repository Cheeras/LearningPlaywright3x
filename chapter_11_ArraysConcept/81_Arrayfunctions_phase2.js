//Array functions in javascript
let arr = [99,10,102,67,13,22];
console.log("printing the original array");
console.log(arr)

//Phase 2 - Extracting and combining arrays
//slice() - Copy part of an array
let copyArr = arr.slice(0,2)
console.log("printing an array after slice operation with positive index");
console.log(copyArr);

let copyArr2 = arr.slice(-1,undefined)
console.log("printing an array after slice operation with negative index");
console.log(copyArr2);

/**
 * Important Rules to Remember
✅ Original array is never modified.
✅ startIndex is inclusive.
✅ endIndex is exclusive.
✅ Negative indexes count from the end.
✅ undefined or omitted endIndex means copy until the end of the array.
✅ slice() always traverses from left to right.
✅ If startIndex >= endIndex, the result is an empty array ([]).
✅ slice() returns a shallow copy, not a deep copy.
*/

//splice() - Add/Remove/Replace elements
console.log("Array before any splice operations");
console.log(arr);

arr.splice(1,1);//meaning is goto 1st index start deleting 1 element

console.log("Array after splice operations");
console.log(arr);

arr.splice(1,2);//meaning goto 1st index start deleting 2 elements
console.log("Array after splice operations");
console.log(arr);

arr.splice(1,3,10,20,30);//i.e goto 1st index and remove 3 elements and add 3 elements 10,20,30

console.log(arr);





