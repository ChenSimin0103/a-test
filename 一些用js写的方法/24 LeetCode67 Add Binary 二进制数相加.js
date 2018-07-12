/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 
 // 简单的问题，思路大体一致：转换为数组进行操作，再转换回字符串输出，写的有点长
 // tips: 使用split('')分隔字符串为数组后其元素仍为字符串，相加时没有转换为数字导致了错误
 
var addBinary = function(a, b) {
    var result = []
    var tmp = 0
    var a = a.split('').reverse()
    var b = b.split('').reverse()
    var len = Math.max(a.length,b.length)
    // console.log(a,b)
    for(var i=0;i<len;i++){
        a[i] = (a[i] === undefined)?0:a[i]
        b[i] = (b[i] === undefined)?0:b[i]
        if(Number(a[i])+Number(b[i])+tmp === 3){
            result[i] = 1
            tmp = 1
        }else if(Number(a[i])+Number(b[i])+tmp === 2){
            result[i] = 0
            tmp = 1
        }else if(Number(a[i])+Number(b[i])+tmp === 1){
            result[i] = 1
            tmp = 0
        }else if(Number(a[i])+Number(b[i])+tmp === 0){
            result[i] = 0
            tmp = 0
        }
        // console.log(result)
    }
    if(tmp === 1)
        result.push(tmp)
    return result.reverse().join('')
};