//one dimensional array
let fruites = ["apple", "mango", "Banana", "Pineapple"];//1 D array

console.log(fruites);
//1D array,list - duplicate elements
let results = ["pass","fail","pass"];

console.log(results);
//2D - Array of 
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let mad = [[1, 2, 3, 4]] //1X 4

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < grid.length; i++) {
    for (j = 0; j < grid.length; j++) {
        process.stdout.write(grid[i][j] + " ")//it is way to print out some thing with out new line
    }
    console.log();
}