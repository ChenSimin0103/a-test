/**
 * @param {number[]} nums
 * @return {number}
 */
 
 此写法非常简单，是提交最多的答案，可能是某个比较权威的作者给出的
 
 分析其思路：从i=3开始，每次判断算入好还是不算入好，都有一个withCur和withoutCur量化，
	如果当前遍历的的nums[i]算入，更新当前withCur等于上次的withoutCur+nums[i]（因当前若算入，上次必定不算入）,
	如果当前遍历的的nums[i]不算入，更新当前withoutCur等于上次的withCur和withoutCur中较大的那个值（因当前若不算入，上次既可以算入，也可以不算入，但一般都会是上次算入的大吧？），
 
var rob = function(nums) {
    let withCur = 0;
    let withoutCur = 0;
   
    for (let i = 0; i < nums.length; i++) {
        let previousRobbedSum = withCur;
        
        withCur = withoutCur + nums[i];
        withoutCur = Math.max(previousRobbedSum, withoutCur);
    }
    
    return Math.max(withCur, withoutCur);
};