//if at all if we want to use the function printNumber and sum function we need to export
//functions where they have created


import { printNumber, sum } from './176_importandexport.js'
//for default imports no need to user curly braces
//where as in case of non default we need to use curly braces
import squareIt, { Subraction } from './178_defaultimport.js';

printNumber();
console.log(sum());

squareIt();

Subraction();
