Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

/**
 * @param {array} height
 * @return {number}
 * @example [1,2,4,3]-->4
 */
 
 // 简单的遍历查找时间复杂度太高
 var maxArea = function(height) {
    var temp = 0;
    var least = 0;
    var contain = 0;
    for(var i=0;i<height.length-1;i++){
        for(var j=i+1;j<height.length;j++){
            least = height[i]>height[j]?height[j]:height[i];
            temp = least*(j-i);
            contain = contain>temp?contain:temp;
        }
    }
    return contain;
};