/**
 * @param {number} n
 * @return {string}
 */
 
 思路：转化为数组进行操作，从1到n，计算n次
 ---判断个数的方法写的不好，但还是ac了，时间长了一些
 
var countAndSay = function(n) {
    var result = [1]
    for(i=2;i<=n;i++){
        result = nextSeq(result)
        console.log(result)
    }
    return result.join('')
};
var nextSeq = function(result) {
    console.log(result)
    var len = result.length
    var tmp = result[len-1]
    var count = 0
    for(var i=len-1;i>=-1;i--){
		if(i === -1){
			result.splice(i+1,0,count)
			result.splice(i+2,count-1)
			continue
		}
        if(result[i] === tmp){
            count++
            continue
        } else {
            result.splice(i+1,0,count)
            result.splice(i+2,count-1)
            count = 1
            tmp = result[i]
        }
    }
    return result
}