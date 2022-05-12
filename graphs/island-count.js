/*
Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. 
The function should return the number of islands on the grid.
An island is a vertically or horizontally connected region of land.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3

https://structy.net/problems/island-count
*/

// input -> [ [W, L, W,...] ]
// output -> number of island on the grid

const islandCount = (grid) => {
    if(grid.length == 0) return 0
    
    const visitedLands = new Set(); // O(1)
    let amountOfLands = 0;
    
    for(let row = 0; row < grid.length; row++) {
      for(let column = 0; column < grid[row].length; column++) {
        if(exploreLands(grid, row, column, visitedLands)) {
          amountOfLands++;
        }
      }
    }
    
    return amountOfLands
  };
  
  const exploreLands = (grid, row, column, visitedLands) => {
   
    const rowIsOnBounds = 0 <= row && row <= grid.length;
    const columnIsOnBounds = 0 <= column && column <= grid.length;
    
    if(!rowIsOnBounds || !columnIsOnBounds) return false;
    if(!grid[row] || !grid[column]) return false;
    
    if(grid[row][column] == "W") return false;
    
    const position = row + ',' + column;
    if(visitedLands.has(position)) return false;
    visitedLands.add(position);
    
    exploreLands(grid, row + 1, column, visitedLands)
    exploreLands(grid, row - 1, column, visitedLands)
    exploreLands(grid, row, column + 1, visitedLands)
    exploreLands(grid, row, column - 1, visitedLands)
  
    return true
  }
  