/**
 * @param {number[]} nums
 * @return {number}
 */

// 简单思路，一遍过，效率稍低（排名40%）不知道什么原因？？

var removeDuplicates = function(nums) {
  var len = nums.length
  var temp = nums[0]
  for(var i=1;i<len;){
      len = nums.length
      if(nums[i] === temp){
          nums.splice(i,1)
      }else {
          temp = nums[i]
          i+=1
      }
  }
  return nums.length
};