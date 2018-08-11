/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 简单的 思路简单：遍历数组时使用一个对象保存每个元素出现的次数，在处理这个对象即可

var majorityElement = function(nums) {
    var result = {}
    var re = []
    var len = nums.length
    for(var i=0;i<len;i++){
        if(result[nums[i]] === undefined)
            result[nums[i]] = 1
        else
            result[nums[i]] += 1
    }
    for(var i in result){
        if(result[i] > len/3)
            re.push(Number(i))
    }
    return re
};