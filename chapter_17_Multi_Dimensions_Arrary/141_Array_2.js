

let grid = [[10,20, 30],
[40, 50, 60],
[70, 80, 90]];

console.log(grid[0][0]);//10
console.log(grid[2][1]);//80
console.log(grid[1][2]);//60


//updating the 2D array elements
grid[0][0] = 99;
console.log(grid);
console.log(grid.length);// to get the number of rows here 3 no of rows

console.log(grid[0].length);//To get the number of columns in a row

console.log(grid[grid.length-1][grid[0].length-1]);//grir[2][2]//90
console.log(grid[2][2]);

let testMatrix = [
    ["Login", "pass",200],
    ["checkout","fail",404],
    ["serach","pass",180]
];

//traditional for loop
console.log("Regular for loop - index based");
for(let i = 0 ; i < testMatrix.length ;i++){
    for(let j =0 ;j < testMatrix[0].length;j++){
         process.stdout.write(testMatrix[i][j] + " ")
    }
    console.log();
}
console.log("-------------------");

//enhaced for loop
console.log("for loop using of");
for(let row of testMatrix){
    for(let cell of testMatrix){
        process.stdout.write(cell + " ");
    }
    console.log();
}
console.log("==========================");

//for each loop
console.log("Using for each loop");
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
})

