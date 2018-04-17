/**
 * @param {number[]} nums
 * @return {number}
 */

 // 思路：nums数组中每一位其实都有一个对应的最小步数step，目的是求得最后一位的step，每一位可到达的最远距离记作reach，在step不变时，reach总被较大的替代；
	reachstep表示step步时可到达的最远距离，当i>reachstep时，即现有步数已不能到达i处，此时给step++，使用目前最大的reach代替reachstep,
	这种动态规划思想极巧妙
	另：因问题限制中假定都可以到达终点，故无法判断不能到达终点的情况

var jump = function(nums) {
    var step = 0
    var reach = 0
    var reachstep = 0
    for(i=0;i<nums.length;i++){
        if(i > reachstep){
            step++
            reachstep = reach
        }
        reach = (i+nums[i])>reach?i+nums[i]:reach
    }
    return step
};