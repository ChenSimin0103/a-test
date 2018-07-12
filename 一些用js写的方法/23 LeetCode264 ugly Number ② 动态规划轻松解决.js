/**
 * @param {number} n
 * @return {number}
 */

// 挨个检测？好像挺蠢的
// 动态规划解决问题
var nthUglyNumber = function(n) {
    var dp = [1]
    var tmp = 0, n2 = 0, n3 = 0, n5 = 0
    for(i=1;i<n;i++){
        dp[i] = Math.min(dp[n2]*2, dp[n3]*3, dp[n5]*5)
        if(dp[i] === dp[n2]*2)
            n2++
        if(dp[i] === dp[n3]*3)
            n3++
        if(dp[i] === dp[n5]*5)
            n5++
    }
    return dp[n-1]
};