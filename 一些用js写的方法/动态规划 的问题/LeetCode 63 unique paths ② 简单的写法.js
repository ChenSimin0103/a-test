/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 
// 加入障碍的概念，输入矩阵中障碍位置处的 obstacleGrid[i][j]===1，判断逻辑中只需将该处值修改为0，并且若障碍在边缘时，其后元素都给0，即可
// 其他与无障碍概念题目无异
 
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    for(i=0;i<m;i++){
        for(j=0;j<n;j++){
            if(obstacleGrid[i][j] === 1)
                obstacleGrid[i][j] = 0
            else if(i===0)
                obstacleGrid[i][j] = obstacleGrid[i][j-1]===0?0:1
            else if(j===0)
                obstacleGrid[i][j] = obstacleGrid[i-1][j]===0?0:1
            else 
                obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
        }
    }
    return obstacleGrid[m-1][n-1]
};