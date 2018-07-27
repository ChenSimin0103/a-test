/**
 * @param {number[]} nums
 * @return {number}
 */

// 153题与154题的区别只在数组是否有重复元素，一下这种简单的写法同时包容两种情况

var findMin = function(nums) {
  var len = nums.length;
  var temp = nums[0];
  for(var i=0;i<len;i++){
      if(nums[i]<temp)
          return nums[i];
  }
  return temp;
};