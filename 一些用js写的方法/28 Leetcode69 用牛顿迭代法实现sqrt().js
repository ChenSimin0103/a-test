/**
 * @param {number} x
 * @return {number}
 */

// 实现方法有：二分查找法，牛顿迭代法
// 对于要求的sqrt(x), 迭代公式为 X1=(X0 + x/X0)/2 , 初始值的选取影响性能，这里选取的是x/2为初始迭代值

var mySqrt = function(x) {
    if(x===0)
        return 0
    var result = x/2;
    var tmp = x/2;
    var accu = Infinity;
    while(accu>0.001 || accu<-0.001) {
        tmp = (result + x/result)/2;
        accu = result - tmp;
        result = tmp;
    }
    return Math.floor(result)
};