/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
 // 这种写法的问题是：1.枚举法浪费了时间，leetcode提交时超时 2.两个数组不能直接比较是否相等，这里使用转换成字符串后比较的方法
 
var threeSum = function(nums) {
    nums = nums.sort((a,b)=>{return a-b})
    var len = nums.length;
    var result = [];
    for(i=0;i<len-2;i++){
        for(j=i+1;j<len-1;j++){
            for(k=j+1;k<len;k++){
                if(nums[i]+nums[j]+nums[k] === 0){
                    var arr = [nums[i],nums[j],nums[k]].sort((a,b) => {return a-b});
                    (result.some((x) => {return x.toString() === arr.toString()}))?void 0:result.push(arr);
                }
            }
        }
    }
    return result;
};

// 20180328 改进的方法：主要是增加了一些显而易见的循环退出条件，减少了遍历的次数; k循环中由len-1位置向j+1位置靠拢
	条件：对于有序（从小到大）的数组result=[N1,N2,N3] 1.N1>0时退出i的循环 2.N3<0时退出k的循环 3.N1+N2+(N3)max<0时退出j的循环（进行判断下一个j） 4.(N1)min+N2+N3>0时退出k的循环

作用：最终在k循环里进行相等判断的目标数组少了很多，但leetcode仍然通不过
	
	/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=>{return a-b})
    var len = nums.length;
    var result = [];
    for(i=0;i<len-2;i++){
        if(nums[i]>0) break;
        for(j=i+1;j<len-1;j++){
            if(nums[i]+nums[j]>0) break;
            for(k=len-1;k>j;k--){
                if(nums[k]<0) break;
                if(nums[i]+nums[j]+nums[k]<0) break;
                if(nums[i]+nums[j]+nums[k] === 0){
                    var arr = [nums[i],nums[j],nums[k]].sort((a,b) => {return a-b});
                    (result.some((x) => {return x.toString() === arr.toString()}))?void 0:result.push(arr);
                }
            }
        }
    }
    return result;
};

// 20180329 改进的方法 想了一种判断机制：每次找到符合的组合时，存下此时k的下标，下一个j循环里k的初始值即从此处取，并且在下一个i循环时重置为len-1
	几个退出条件：1. nums[i]>0 ,退出i循环 2. nums[i]+nums[j]+nums[k]max<0 ,进入下一个j循环
					3. nums[i]+nums[j]+nums[k]min>0 ,退出j循环 4. nums[i]+nums[j]+nums[k]<0 ,退出k循环
	！！！MD，还是通不过，是不是js的排序函数和转成字符串比较的方法消耗的大量时间？

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=>{return a-b})
// console.log(nums)
    var len = nums.length;
    var result = [];
    var index = len-1;
    for(i=0;i<len-2;i++){
        index = len-1;
        if(nums[i]>0) break;
        for(j=i+1;j<len-1;j++){
            if(nums[i]+nums[j]+nums[j+1]>0) break;
            if(nums[i]+nums[j]+nums[len-1]<0) continue;
            for(k=index;k>j;k--){
                if(nums[i]+nums[j]+nums[k]<0) break;
                if(nums[i]+nums[j]+nums[k] === 0){
                    index = k;
                    var arr = [nums[i],nums[j],nums[k]].sort((a,b) => {return a-b});
                    (result.some((x) => {return x.toString() === arr.toString()}))?void 0:result.push(arr);
                }
            }
        }
    }
    return result;
};