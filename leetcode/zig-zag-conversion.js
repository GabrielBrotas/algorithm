/**
 * https://leetcode.com/problems/zigzag-conversion/submissions/
 * 
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(s.length <= 1) return s;
    if(numRows == 1) return s;
    
    let increment = 2 * (numRows - 1); // 2 * (3 - 1) = 4
    
    let res = '';
    
    for(let row = 0; row < numRows; row++) {
        
        for(let j = row; j < s.length; j+=increment) {
            res += s[j]
            
            let nextItemMiddlePos = increment + j - (2 * row)  // 
            if(isOnMiddleZigZagPos(row, numRows) && nextItemMiddlePos < s.length) {
                res += s[nextItemMiddlePos]
            }
        }
    }
    
    return res
};

function isOnMiddleZigZagPos(curRow, numRows) {
    return curRow > 0 && curRow < numRows -1
}
