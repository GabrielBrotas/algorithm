var uniquePathsWithObstacles = function(obstacleGrid) {
    /*
        BSF
        
        [
            [0, 0, 0, 0 ,0],
            [0, 1, 0, 0 ,1],
            [0, 0 ,0, 0 ,0],
        ]
    */
    
    let startRow = 0;
    let startColumn = 0;
    const numberOfPaths = explorePaths(obstacleGrid, startRow, startColumn)
    
    return numberOfPaths
};

const explorePaths = (obstacleGrid, row, column) => {
    const isRowOnBoundaries = row >= 0 && row < obstacleGrid.length;
    const isColumnOnBoundaries = column >= 0 && column < obstacleGrid[0].length;
    
    if(!isRowOnBoundaries || !isColumnOnBoundaries) return 0;
    if(!obstacleGrid[row] && !obstacleGrid[row][column]) return 0;
    
    if(obstacleGrid[row][column] == 1) return 0;
    
    if(row == obstacleGrid.length - 1 && column == obstacleGrid[0].length - 1) {
        return 1
    };
    
    let count = 0;
    
    if(obstacleGrid[row + 1] && obstacleGrid[row + 1][column] == 0) {
        count += explorePaths(obstacleGrid, row + 1, column);
    }
    
    if(obstacleGrid[row][column + 1] == 0) {
        count += explorePaths(obstacleGrid, row, column + 1);
    }

    return count;

}