/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 
 // ���������Ƚ���ͬ��������ת�����ַ����Ƚϵķ�����д�ĺܲ�
 
var fourSum = function(nums, target) {
    nums = nums.sort((a,b) => {return a-b})
    // console.log(nums)
    var len = nums.length
    var result = []
    for(i=0;i<len-3;i++){
        for(j=i+1;j<len-2;j++){
            for(k=j+1;k<len-1;k++){
                for(l=k+1;l<len;l++){
                    console.log(i,j,k,l)
                    var temp = [nums[i],nums[j],nums[k],nums[l]]
                    if(nums[i]+nums[j]+nums[k]+nums[l] === target && !inResult(result,temp))
                        result.push([nums[i],nums[j],nums[k],nums[l]])
                }
            }
        }
    }
    return result
};
var inResult = function(result, temp){
    for(var item of result){
        if(item.toString() === temp.toString())
            return true
    }
    return false
};