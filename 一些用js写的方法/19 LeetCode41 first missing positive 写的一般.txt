/**
 * @param {number[]} nums
 * @return {number}
 */
 
 // 没有想到巧妙的方法，只是将数组排序后过滤出比0大的元素，进行判断
 // 使用了数组的sort()和filter()方法，时间复杂度一般，反而是使用indexOf()方法从1开始检索，这种我一开始就认为不可取的方式，是运行时间最短的答案，hehe
 
var firstMissingPositive = function(nums) {
    nums = nums.sort((a,b) => {return a-b}).filter((x) => {return x>0})
    console.log(nums)
    var last=0
    for(i=0;i<nums.length;i++){
        if(last+1 === nums[i])
            last = nums[i]
        if(last+1 < nums[i])
            return last+1
    }
    return last+1
};