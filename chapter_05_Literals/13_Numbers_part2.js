//1.NUMERIC SEPARATORS: Numeric separators are a feature introduced in ECMAScript 2021 (ES12) that allows you to use underscores (_) as separators in numeric literals for better readability. They can be used in integer and floating-point literals, but not at the beginning or end of the number, or next to a decimal point.

let million = 1_000_000; // 1 million
let pi = 3.14_15_92; // Pi with separators for readability
let binaryWithSeparators = 0b1010_1010; // Binary with separators
let hexWithSeparators = 0xFF_FF_FF; // Hexadecimal with separators
let octalWithSeparators = 0o12_34_56; // Octal with separators
let decimalWithSeparators = 123_456.789_012; // Decimal with separators
console.log("Million:", million);
console.log("Pi with separators:", pi);
console.log("Binary with separators:", binaryWithSeparators);
console.log("Hexadecimal with separators:", hexWithSeparators);
console.log("Octal with separators:", octalWithSeparators);
console.log("Decimal with separators:", decimalWithSeparators);


