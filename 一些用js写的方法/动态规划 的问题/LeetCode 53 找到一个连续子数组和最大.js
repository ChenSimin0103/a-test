/**
 * @param {number[]} nums
 * @return {number}
 */
 // 此题使用的动态规划较简单
 // 优化点：因不好处理负数开头的情况，使用了较多条件判断语句，其实给sum和maxSum赋初值为-infinity可省去一些判断逻辑
 
 
var maxSubArray = function(nums) {
    var sum = nums[0], maxSum = nums[0];
    for(i=1;i<nums.length;i++){
        if(nums[i]>0){
            if(sum<=0)
                sum = nums[i]
            else
                sum += nums[i]
            maxSum = Math.max(maxSum,sum)
        }
        else{
            if(sum<=0){
                sum = Math.max(sum,nums[i])
                maxSum = Math.max(maxSum,sum)
            }
            else{
                sum = (sum+nums[i]>0)?sum+nums[i]:0
            }
        }
        // console.log(sum,maxSum)
    }
    return maxSum
};