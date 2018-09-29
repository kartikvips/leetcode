var maxIncreaseKeepingSkyline = function (grid) {
    let top = topView(grid);
    let left = leftView(grid);
    let res = [];
    let sum = 0;
    for(let i = 0; i < grid.length; i++){
        let curr = [];
        for(let j = 0; j < grid[i].length; j++){
            if (top[j] <= left[i]){
                curr.push(top[j]);
                sum += (top[j] - grid[i][j]);
            } else {
                curr.push(left[i]);
                sum += left[i] - grid[i][j];
            }
        }
        res.push(curr);
    }
    return sum;
};

function leftView(grid){
    let res = [];
    for(let i = 0; i<grid.length; i++){
        res.push(Math.max(...grid[i]));
    }
    return res;
}

function topView(grid){
    let res = [];
    for(let i = 0; i < grid.length; i++){
        let max = grid[0][i];
        for(let j = 0; j < grid[i].length; j++){
            if (grid[j][i] > max){
                max = grid[j][i];
            }
        }
        res.push(max);
    }
    return res;
}

console.log(maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]));
// console.log(leftView([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]));
// console.log(topView([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]));