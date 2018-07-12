/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// 按位累加，简单实现；要求空间复杂度底，所以每次累加都直接在原数组上进行修改

var getRow = function(rowIndex) {
    if(rowIndex === 0)
        return [1]
    
    var result = [1,1];
    for(var i=2;i<=rowIndex;i++){
        var len = result.length
        var temp = 0
        var increase = 0
        for(var i=0;i<len;i++){
            temp = result[i]
            result[i] += increase
            increase = temp
        }
        result.push(1)
    }
    
    return result
};