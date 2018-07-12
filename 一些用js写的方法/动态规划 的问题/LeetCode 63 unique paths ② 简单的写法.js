/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 
// �����ϰ��ĸ������������ϰ�λ�ô��� obstacleGrid[i][j]===1���ж��߼���ֻ�轫�ô�ֵ�޸�Ϊ0���������ϰ��ڱ�Եʱ�����Ԫ�ض���0������
// ���������ϰ�������Ŀ����
 
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