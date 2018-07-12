/**
 * @param {number[][]} grid
 * @return {number}
 */
 
 // 这题理出通项公式，并判断一些特殊情况即可：s[i][j] = Math.min(s[i-1][j],s[i][j-1]) + grid[i][j]
 // 想不到运行速度竟然进了前10%，有点开心
 // 注意s数组是需要初始化的，而s=[]会出现第一维为空导致第二维无法赋值，s的大小预先定义好，这里使用s=grid 简单没有副作用
 
var minPathSum = function(grid) {
    var height = grid.length, width = grid[0].length;
    var s = grid;
    for(i=0;i<height;i++) {
        for(j=0;j<width;j++) {
            if(i===0 && j===0)
                s[i][j] = grid[i][j]
            else if (i===0)
                s[i][j] = s[i][j-1]+grid[i][j]
            else if (j===0)
                s[i][j] = s[i-1][j]+grid[i][j]
            else
                s[i][j] = Math.min(s[i-1][j],s[i][j-1]) + grid[i][j]
        }
    }
    return s[height-1][width-1]
};