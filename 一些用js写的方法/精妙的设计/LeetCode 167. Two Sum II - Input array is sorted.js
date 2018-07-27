/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 目标：返回一个排序数组中两项之和等于目标值的这两项的下标
// 此题的基本思路是对每一个数都去寻找和它相加等于结果的另一个数，第二种实现方法较巧妙

// 第一种方法 
var twoSum = function (numbers, target) {
  var len = numbers.length
  var index1 = 0
  var index2 = 0
  for (var i = len - 1; i >= 0; i -= 1) {
    index1 = i + 1
    var temp = target - numbers[i]
    var re = search(numbers, temp)
    if (re !== false)
      return [re + 1, index1]
  }

};
// 查找函数：在一个排序数组寻找一个数字，找到则返回下标，某项大于此数字时退出返回找不到
var search = function (arr, tar) {
  var len = arr.length
  for (var i = 0; i < len; i += 1) {
    if (arr[i] === tar)
      return i
    else if (arr[i] > tar)
      return false
  }
  return false
}

// 第二种方法：用一个数组把每次结果暂存起来，之后判断是否能用到（不用再次搜索）, 更快一些
// map对象：数组中每一位的值作为下标，下标作为值 得到的映射，目的是通过值的关系寻找数组下标的联系
var twoSum = function (numbers, target) {
  var len = numbers.length;
  var map = {};
  for (var i = 0; i < len; i += 1) {
    if (map[target - numbers[i]] !== undefined) {
      return [map[target - numbers[i]] + 1, i + 1]
    } else {
      map[numbers[i]] = i;
    }
  }
}