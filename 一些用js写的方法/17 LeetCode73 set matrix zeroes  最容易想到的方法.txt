/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 
 
var setZeroes = function(matrix) {
    var row = matrix.length;
    var col = matrix[0].length;
    var zeroRow = [], zeroCol = [];
    for(i=0;i<row;i++){
        for(j=0;j<col;j++){
            if(matrix[i][j] === 0){
                zeroRow.indexOf(i)===-1?zeroRow.push(i):void 0
                zeroCol.indexOf(j)===-1?zeroCol.push(j):void 0
            }
        }
    }
    // console.log(zeroRow,zeroCol)
    for(i=0;i<row;i++){
        for(j=0;j<col;j++){
            // console.log(zeroRow.indexOf(i), zeroCol.indexOf(j))
            
            if(zeroRow.indexOf(i)!==-1 || zeroCol.indexOf(j)!==-1){
                matrix[i][j] = 0
            }
        }
    }
    // console.log(matrix)
    // return matrix
}