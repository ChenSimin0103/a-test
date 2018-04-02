// 问题描述：用nums这个数组描述一条街里所有房子里的钱数，一个强盗要抢钱，唯一的限制是不能抢两相邻的房子，问能抢到的钱的最大值
// 思路：1. 使用动态规划，i=0和i=1的情况确定，i=3以后，每次判断本次算入抢的结果后是否比不算入得到的最终结果大，如果大的话，本次算入，如果小，本次不算入，
	若本次算入，则还需判断上一次的结果是否已经算入，若上一次不算入，则这次直接加入，若上一次是算入状态，则要修改为不算入状态
	2. 设计一个二维数组来存储结果，每个子元素包括计算到当前元素所得到的最大值和一个表示当前元素是否是算入状态的布尔值

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length;
    var gain = [];
    if(len === 0)
        return 0
    for(i=0;i<len;i++){
        if(i===0) {
            gain[0]=[nums[0],true]
        }
        else if(i===1) {
            gain[1] = (nums[1]>=nums[0])?[nums[1],true]:[nums[0],false];
        }
        else {
            var prepregain = gain[i-2]
            var pregain = gain[i-1]
            if(gain[i-1][1] === false)
                gain[i] = [gain[i-1][0]+nums[i],true]
            else if(gain[i-1][1] === true)
                gain[i] = (gain[i-2][0]+nums[i]>=gain[i-1][0])?[gain[i-2][0]+nums[i],true]:[gain[i-1][0],false]
        }
                    console.log(gain) 
    }
    return gain[len-1][0]
};