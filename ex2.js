let grid = [
    ['X', 'a', 'x', 'z', 'X'],
    ['X', 'a', 'x', 'z', 'X'],
    ['X', 'a', 'x', 'z', 'X'],
    ['X', 'a', 'x', 'z', 'X'],
    ['X', 'a', 'x', 'z', 'X']
]
let count = 0
function ex2(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'X') {
                console.log('X in row:', i, "and in colum: ", j)
                count++
            }
        }
    }
    return count;
}
console.log(ex2(grid))
