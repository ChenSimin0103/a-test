/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 
// 联想到上楼梯问题，其实是一样的思路  递归实现可能很麻烦
// 某些情况下定义二维数组却不给初值时会报错
 
var uniquePaths = function(m, n) {
    var matrix = new Array(m)
    for(i=0;i<m;i++){
        matrix[i] = new Array(n)
        for(j=0;j<n;j++){
            matrix[i][j] = 0
        }
    }
    for(i=0;i<m;i++){
        for(j=0;j<n;j++){
            if(i===0 || j===0)
                matrix[i][j] = 1
            else
                matrix[i][j] = matrix[i-1][j] + matrix[i][j-1]
        }
    }
    return matrix[m-1][n-1]  
};