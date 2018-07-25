/**
 * @param {number[]} nums
 * @return {string[]}
 */

// 思路明确，不复杂

var summaryRanges = function(nums) {
  var len = nums.length;
  var result = [];
  var current = nums[0];
  var temp = nums[0];
  for(var i=1;i<=len;i++){
      if(nums[i] === current+1){
          current = nums[i];
      } else {
          if(current === temp){
              var msg = ""+current
              result.push(msg)
              current = nums[i]
              temp = nums[i]
          } else {
              var msg = temp + "->" + current;
              result.push(msg)
              current = nums[i]
              temp = nums[i]
          }
      }
  }
  return result
};