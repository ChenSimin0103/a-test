// 这个方法非常简单，不得不承认自己的水平还是很差，没有很好的分析问题
// 循环遍历每一步都计算出从本元素可以走到的最远元素位置（下标表示），并且每次判断当前位置是否小于之前计算得到的最远位置，若小于则退出，若大于等于则继续计算，直至到最后一个元素

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reachable = 0;
    for(let i = 0; i < nums.length; i++) {
        if (i > reachable) {
            return false;
        } else {
            reachable = Math.max(reachable, nums[i] + i);
        }
    }
    return true;
};