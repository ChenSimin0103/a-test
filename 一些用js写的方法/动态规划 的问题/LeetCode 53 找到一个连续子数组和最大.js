/**
 * @param {number[]} nums
 * @return {number}
 */
 // ����ʹ�õĶ�̬�滮�ϼ�
 // �Ż��㣺�򲻺ô�������ͷ�������ʹ���˽϶������ж���䣬��ʵ��sum��maxSum����ֵΪ-infinity��ʡȥһЩ�ж��߼�
 
 
var maxSubArray = function(nums) {
    var sum = nums[0], maxSum = nums[0];
    for(i=1;i<nums.length;i++){
        if(nums[i]>0){
            if(sum<=0)
                sum = nums[i]
            else
                sum += nums[i]
            maxSum = Math.max(maxSum,sum)
        }
        else{
            if(sum<=0){
                sum = Math.max(sum,nums[i])
                maxSum = Math.max(maxSum,sum)
            }
            else{
                sum = (sum+nums[i]>0)?sum+nums[i]:0
            }
        }
        // console.log(sum,maxSum)
    }
    return maxSum
};