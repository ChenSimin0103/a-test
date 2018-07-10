/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 第一种思路：与第一个值比较决定比较的方向，从前往后或从后往前找
// 暂时认为排序是从小到大的顺序
// 注意几种特殊情况：数组为空或只有一个元素

var search = function(nums, target) {
    var len = nums.length;
    if(target >= nums[0]){
        for(var i = 0;i<len;i++){
            if(target == nums[i]){
                return i
            } else if(target < nums[i]){
                return -1
            }
        }
        return -1
    } else if(target < nums[0]) {
        for(var i=len-1;i>0;i--){
            if(target == nums[i]){
                return i
            } else if (target > nums[i]){
                return -1
            }
        }
        return -1
    } else {
        return -1
    }
};