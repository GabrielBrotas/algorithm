/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 
https://leetcode.com/problems/surrounded-regions/
*/
 var solve = function(board) {
    if(board.length <= 2) return board
    /*
        nxm
        [
        ["X","O","X","X"],
        ["O","X","O","X"],
        ["X","O","X","O"],
        ["O","X","O","X"],
        ["X","O","X","O"],
        ["O","X","O","X"]
        ]
        
        [
        ["X","O","X","X"],
        ["O","X","X","X"],
        ["X","X","X","O"],
        ["O","X","X","X"],
        ["X","X","X","X"],
        ["X","X","X","X"]]
        
        O(nxm)
    */
    let rowsSize = board.length;
    let columnsSize = board[0].length;
    
    // check rows -> first and last column
    for(let i = 0; i < rowsSize; i++) {
        if(board[i][0] == "O") replaceEdgesNode(board, i, 0);
        if(board[i][columnsSize - 1] == "O") replaceEdgesNode(board, i, columnsSize - 1);
    }

    // check columns -> first and last row;
    for(let j = 0; j < columnsSize; j++) {
        if(board[0][j] == "O") replaceEdgesNode(board, 0, j);
        if(board[rowsSize - 1][j] == "O") replaceEdgesNode(board, rowsSize - 1, j);
    }
    
    for(let i = 0; i < rowsSize; i++) {
        for(let j = 0; j < columnsSize; j++) {
            if(board[i][j] == "O") board[i][j] = "X";
            else if(board[i][j] == "*") board[i][j] = "O"
        }
    }
    
    return board
};

const replaceEdgesNode = (board, row, column) => {
    const isRowInBoundaries = row >= 0 && row < board.length;
    const isColumnInBoundaries = column >= 0 && column < board[0].length;

    if(!isRowInBoundaries || !isColumnInBoundaries) return;
    if(!board[row] || !board[row][column]) return;
    
    if(board[row][column] == "X") return;
    board[row][column] = "*";
    
    if(board[row + 1] && board[row + 1][column] == "O") {
        replaceEdgesNode(board, row + 1, column)
    }
    
    if(board[row - 1] && board[row - 1][column] == "O") {
        replaceEdgesNode(board, row - 1, column)
    }
    
    if(board[row] && board[row][column + 1] == "O") {
        replaceEdgesNode(board, row, column + 1)
    }
    
    if(board[row] && board[row][column - 1] == "O") {
        replaceEdgesNode(board, row, column - 1)
    }
    
    return;   
}