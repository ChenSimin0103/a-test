/**
 * @param {number} n
 * @return {number}
 */

// 尝试从最初的结构向后递推，因为数组去重和排序的问题，仍然超时不能AC，但在chrome里也就1秒左右？？

var nthUglyNumber = function(n) {
    var result = [1,2,3,4,5]
    for(i=0;i<n;i++){
        var tmp = [result[i]*2,result[i]*3,result[i]*4,result[i]*5]
        result = [...new Set(result.concat(tmp))]
        result.sort((a,b) => {return a-b})
        // console.log(result)
    }
    return result[n-1]
};