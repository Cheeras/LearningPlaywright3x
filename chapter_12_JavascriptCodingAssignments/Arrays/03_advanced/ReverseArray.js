//Reverse array using 2 pointer swapping technique
function reverseArray(arr) {
    let start  = 0;
    let end  = arr.length - 1;
    while(start < end) {
        let temp  = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

//calling the function
let arr = [90,20,31,12,99,77];
let reversedArray = reverseArray(arr);
console.log("Reversed array:", reversedArray);

//can we write same thing in arrow function in javascript
const reverseArrayArrow = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
};

let arr2 = [90,20,31,12,99,77];
let reversedArray2 = reverseArray(arr2);
console.log("Reversed array 2:", reversedArray2);    