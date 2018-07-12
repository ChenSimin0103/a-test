/**
 * @param {number} n
 * @return {number[][]}
 */
// 这个方法效率很高 70ms以内
// 一个奇怪的问题，在LeetCode的编译窗口里虽然已经初始化了二维数组result，但result[0][0]=1 会报 cannot set property 0 of undefined 的错误？？ 

var generateMatrix = function(n) {
    // 初始化方阵
    var result = new Array()
    for(i=0;i<n;i++){
        result[i] = new Array()
        for(j=0;j<n;j++){
            result[i][j] = 1
        }
    }
    var i=1, row=0, col=0, index=n;
    // result[0][0] = 1
    while(i<=n*n && index>1){
        while(col<index-1 && i<n*n)
            result[row][++col] = ++i
        while(row<index-1 && i<n*n)
            result[++row][col] = ++i
        while(col>n-index && i<n*n)
            result[row][--col] = ++i
        while(row>n-index+1 && i<n*n)
            result[--row][col] = ++i
        index--
    }
    return result
};