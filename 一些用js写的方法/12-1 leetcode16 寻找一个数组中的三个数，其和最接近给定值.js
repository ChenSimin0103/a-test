/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 思路：分析了问题后想到的解法（不使用枚举，只用for循环一次），但有漏洞，一些测试用例通不过，也许以后可以改，逻辑如下：
1. 整体思想是只遍历一次nums，由前三个元素组成初始数组，并排序，此后的每一个新元素将被尝试替代初始数组的其中一个元素，可替换的条件是替换后新的数组之和更接近目标值（绝对值最小）
2. 要先对nums进行预处理，将其按照绝对值从大到小进行排序，因绝对值越小的数字影响越小，相当于先粗调，后精调
3. 新元素与替换数组中的三个元素进行大小比较，进行简单判断，可避免某些显而易见的替换后绝对值更大的情况

问题出在：没有全局思维？
  
var threeSumClosest = function(nums, target) {
    // 预处理：数组由大到小排序，越小的数字应越后进入替换流程
    nums = absOrder(nums);
console.log('nums='+nums)
    var len = nums.length;
    // 给定初始值
    var result = order([nums[0],nums[1],nums[2]]);
    var sum = nums[0]+nums[1]+nums[2];
    var newval,small,middle,large;
    for(var i=3;i<len;i++){
        newval = nums[i];
        small = result[0];
        middle = result[1];
        large = result[2];
        var re0 = abso(small,middle,large,target);
        var re1 = abso(newval,middle,large,target);
        var re2 = abso(small,newval,large,target);
        var re3 = abso(small,middle,newval,target);
        if(sum === target)
            return sum;
        if(sum > target){
            if(newval < small){
                if(re1 === Math.min(re0,re1,re2,re3))
                    result[0] = newval;
                else if(re2 === Math.min(re0,re1,re2,re3))
                    result[1] = newval;
                else if(re3 === Math.min(re0,re1,re2,re3))
                    result[2] = newval;
            }
            else if(newval>=small && newval<middle){
                if(re2 === Math.min(re0,re1,re2,re3))
                    result[1] = newval;
                else if(re3 === Math.min(re0,re1,re2,re3))
                    result[2] = newval;
            }
            else if(newval>=middle && newval<large){
                if(re3 === Math.min(re0,re1,re2,re3))
                    result[2] = newval;
            }
            else if(newval>=large){
                console.log('???')
            }
            else{
                console.log('error')
            }
        }
        else if(sum < target){
            if(newval > large){
                if(re1 === Math.min(re0,re1,re2,re3))
                    result[0] = newval;
                else if(re2 === Math.min(re0,re1,re2,re3))
                    result[1] = newval;
                else if(re3 === Math.min(re0,re1,re2,re3))
                    result[2] = newval;
            }
            else if(newval<=large && newval>middle){
                if(re1 === Math.min(re0,re1,re2,re3))
                    result[0] = newval;
                else if(re2 === Math.min(re0,re1,re2,re3))
                    result[1] = newval;
            }
            else if(newval<=middle && newval>small){
                if(re1 === Math.min(re0,re1,re2,re3))
                    result[0] = newval;
            }
        }
        sum = result[0]+result[1]+result[2];
        console.log(result)
    }
    return sum;
};
// 排序函数，传入值是一个数组，输出一个排序数组
var order = function(arr) {
	var temp;
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
// 按绝对值大小进行排序函数（由大到小），传入值是一个数组，输出一个排序数组
function absOrder(arr){
    var temp;
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(Math.abs(arr[i]) < Math.abs(arr[j])){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// 计算三个数的和与target的绝对值
var abso = function(a,b,c,target) {
    return Math.abs((a+b+c)-target)
}