/**
 * @param {number[][]} triangle
 * @return {number}
 */
 
 // 通项公式：sum[i][j] = Math.min(sum[i-1][j-1], sum[i-1][j]) + triangle[i][j]
 // 思考：有什么更好的初始化sum数组的方法，最好初始化全为0的数组
 
var minimumTotal = function(triangle) {
    var sum = triangle
    var rowNum = []
    for(var item of triangle){
        rowNum.push(item.length)
    }
    for(i=0;i<triangle.length;i++){
        for(j=0;j<rowNum[i];j++){
            if(i===0 && j===0)
                sum[i][j] = triangle[i][j]
            else if(j===0)
                sum[i][j] = sum[i-1][j] + triangle[i][j]
            else if(j===rowNum[i]-1)
                sum[i][j] = sum[i-1][j-1] + triangle[i][j]
            else
                sum[i][j] = Math.min(sum[i-1][j-1], sum[i-1][j]) + triangle[i][j]
        }
    }
    return Math.min(...sum[sum.length-1])
};