/**
 * @param {number[]} heights
 * @return {number}
 */

// 没有使用动态规划的思路：必包含某一项是能达到的最大面积，用时略长

var largestRectangleArea = function(heights) {
    var len = heights.length;
    var result = 0;
    for(i=0;i<len;i++) {
        var left = i==0?0:i-1;
        var right = i==len-1?len-1:i+1;
        while(left>=0){
            if(heights[left]<heights[i])
                break
            left--
        }
        while(right<=len-1) {
            if(heights[right]<heights[i])
                break
            right++
        }
        var area = (right-left-1)*heights[i]
        result = (area>result)?area:result
    }
    return result
};