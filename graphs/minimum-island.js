/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls.
W represents water and L represents land. 
The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2
test_01:
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

minimumIsland(grid); // -> 1
test_02:
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

minimumIsland(grid); // -> 9

https://structy.net/problems/minimum-island
*/
const minimumIsland = (grid) => {
  
    const visitedLands = new Set();
    let smallestLand = -1;
    
    for(row = 0; row < grid.length; row++) {
      for(column = 0; column < grid[row].length; column++) {
        const numberOfIsland = exploreIslands(grid, row, column, visitedLands)
        
        if(smallestLand == -1 && numberOfIsland > 0) {
          smallestLand = numberOfIsland;
          continue;
        }
        
        if(numberOfIsland < smallestLand && numberOfIsland > 0) {
          smallestLand = numberOfIsland;
          continue;
        }
        
      }
    }
    
    return smallestLand;
  };
  
  const exploreIslands = (grid, row, column, visitedLands) => {
    const isRowInBounds = 0 <= row && row < grid.length;
    const isColumnInBounds = 0 <= column && grid[row] && column < grid[row].length;
    let totalLands = 0
    
    if(!isRowInBounds || !isColumnInBounds) return 0;
    if(grid[row][column] == "W") return 0;
    
    const position = row + ',' + column;
    if(visitedLands.has(position)) return 0;
    visitedLands.add(position);
    totalLands++;
    
    totalLands += exploreIslands(grid, row + 1, column, visitedLands)
    totalLands += exploreIslands(grid, row - 1, column, visitedLands)
    totalLands += exploreIslands(grid, row, column + 1, visitedLands)
    totalLands += exploreIslands(grid, row, column - 1, visitedLands)
    
    return totalLands
    
  }
  
  
  module.exports = {
    minimumIsland
  };