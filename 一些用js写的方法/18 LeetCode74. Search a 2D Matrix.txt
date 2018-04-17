/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 
// 简单的，以前见过的题目，只要从左下角或右上角开始即可
 
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0)
        return false
    var rowlen = matrix.length, collen = matrix[0].length
    var row = rowlen-1, col = 0;
    while(row>=0 && col<collen){
        if(matrix[row][col] === target)
            return true
        else if(matrix[row][col] > target)
            row--
        else if(matrix[row][col] < target)
            col++
        // console.log(row,col)
    }
    return false
};