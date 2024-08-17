/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    /*
        1 = land;
        0 = water;
        
        [
        [0,1,0,0],
        [1,1,1,0],
        [0,1,0,0],
        [1,1,0,0]
        ]
    */
    const visitedPlaces = new Set();
    
    let perimeter = 0;
    
    for(let row = 0; row < grid.length; row++) {
        for(let column = 0; column < grid[row].length; column++) {
            const islandPerimeter = exploreIslandPerimeter(grid, row, column, visitedPlaces);
            
            if(islandPerimeter > perimeter) perimeter = islandPerimeter;
        }
    }
    return perimeter;
};

const exploreIslandPerimeter = (grid, row, column, visitedPlaces) => {
    const isRowOnBoundaries = row >= 0 && row <= grid.length;
    const isColumnOnBoundaries = column >= 0 && column <= grid[0].length;

    if(!isRowOnBoundaries || !isColumnOnBoundaries) return 0;
    if(!grid[row] || !grid[row][column]) return 0;
    
    let position = row + ',' + column;
    if(visitedPlaces.has(position)) return 0;
    visitedPlaces.add(position)
    
    if(grid[row][column] == 0) return 0;
    
    let perimeterSize = 0;
    
    if(grid[row + 1] && grid[row + 1][column] == 1) {
        perimeterSize += exploreIslandPerimeter(grid, row + 1, column, visitedPlaces);
    } else perimeterSize++;
    
    if(grid[row - 1] && grid[row - 1][column] == 1) {
        perimeterSize += exploreIslandPerimeter(grid, row - 1, column, visitedPlaces);
    } else perimeterSize++;
    
    if(grid[row][column + 1] == 1) {
        perimeterSize += exploreIslandPerimeter(grid, row, column + 1, visitedPlaces);
    } else perimeterSize++;
    
    if(grid[row][column - 1] == 1) {
        perimeterSize += exploreIslandPerimeter(grid, row, column - 1, visitedPlaces);
    } else perimeterSize++;
    
    return perimeterSize;
    
}