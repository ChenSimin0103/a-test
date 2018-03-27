/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums==null || nums.length<3)
        return null
    var closet = Infinity;
    for(var i=0;i<nums.length-2;i++){
        for(var j=i+1;j<nums.length-1;j++){
            for(var k=j+1;k<nums.length;k++){
                if(Math.abs((nums[i]+nums[j]+nums[k])-target) < Math.abs(closet-target))
                    closet = nums[i]+nums[j]+nums[k];
            }
        }
    }
    return closet;
};