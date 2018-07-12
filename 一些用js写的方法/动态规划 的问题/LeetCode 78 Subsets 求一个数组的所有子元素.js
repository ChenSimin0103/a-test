/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
 // 用了动态规划的思想，虽然这是数组分类里的
 // 思路简单说就是每加入一项，就把新元素与之前的所有子数组组合一遍，非常朴素的规律，初值从一个空数组子元素开始
 // n个元素的数组有2的n次方个子数组
 
var subsets = function(nums) {
    let subsets = [[]]
    for(i=0;i<nums.length;i++){
        let len = subsets.length
        for(j=0;j<len;j++){
            subsets.push([...subsets[j],nums[i]])
        }
        // console.log(subsets)
    }
    return subsets
};