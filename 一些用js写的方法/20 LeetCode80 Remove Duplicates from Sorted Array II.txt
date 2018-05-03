/**
 * @param {number[]} nums
 * @return {number}
 */
 思路：遍历数组，在数组上使用splice()方法直接进行修改，存下每次出现的值和出现次数做判断
 
var removeDuplicates = function(nums) {
    var tmp = nums[0], times = 1
    for(i=1;i<nums.length;i++){
        if(nums[i] === tmp){
            times++
            if(times > 2){
                nums.splice(i,1)
                times--
                i--
            }
        } else {
            tmp = nums[i]
            times = 1
        }
    }
    return nums.length
};