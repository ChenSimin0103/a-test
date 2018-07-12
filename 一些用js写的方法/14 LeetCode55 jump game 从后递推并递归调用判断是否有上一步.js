/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
 
var canJump = function(nums) {
    var i=0,len=nums.length;
    var step = function(index) {
console.log(index)
        if(index === 0){
console.log(233)
			return true
		}
        for(i=index-1;i>=0;i--) {
            if(nums[i] >= index-i) {
                return step(i)
            }
        }
        return false
    }
    return step(len-1)
};