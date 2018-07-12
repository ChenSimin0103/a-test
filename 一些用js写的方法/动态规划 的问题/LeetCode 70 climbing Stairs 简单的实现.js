/**
 * @param {number} n
 * @return {number}
 */
// 上楼梯问题，简单的思路是计算了一个斐波那契数列
// 为了方便理解，写下思路：当上到第n个台阶时，其只可能是从第n-2的台阶走2步或从n-1个台阶走1步到达，由n=3时递推，公式为：f(n)=f(n-2)+f(n-1)

var climbStairs = function(n) {
    if(n===0||n===1)
        return 1
    if(n===2)
        return 2
    var laststep=1,step=2,newstep;
    for(i=3;i<=n;i++){
        newstep = laststep + step
        laststep = step
        step = newstep
    }
    return step
};