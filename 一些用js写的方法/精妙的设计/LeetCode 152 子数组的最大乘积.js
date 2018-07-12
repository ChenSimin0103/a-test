/**
 * @param {number[]} nums
 * @return {number}
 */
 
// 这种思路非常神奇，又简单，应该找出这一类思路的通用描述方法/模型？？

// 分析：定义两个数字分别存储乘到某个位置的最大值和最小值，极值会因为符号而相互转换正负，所以极大值和极小值都是有用的
// 也可通过动态规划来实现：定义 dp[i,j] 为从i到j的最大乘积，递推关系为：dp[i,j]=dp[i,j-1]*nums[j]

var maxProduct = function(nums) {
    var len = nums.length
    if(len === 0)
        return null
    if(len === 1)
        return nums[0]
    
    var max = nums[0]
    var maxprev = nums[0]
    var minprev = nums[0]
    for(var i=1;i<len;i++){
        var a = maxprev * nums[i]
        var b = minprev * nums[i]
        maxprev = Math.max(a, b, nums[i])
        minprev = Math.min(a, b, nums[i])
        max = Math.max(maxprev, max)
    }
    return max
};