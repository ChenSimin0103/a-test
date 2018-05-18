/**
 * @param {number} num
 * @return {boolean}
 */
 
 // 思路：把所有的因数都依次除去，若最后结果是1，返回true
 
var isUgly = function(num) {
	var a = 2, b = 3, c = 5;
    if(num<1)
        return false
    num = divideAllFactor(num,a)
    num = divideAllFactor(num,b)
    num = divideAllFactor(num,c)
    return (num === 1)?true:false
};
function divideAllFactor(num,factor){
    while(num%factor === 0)
        num = num/factor
    return num
}