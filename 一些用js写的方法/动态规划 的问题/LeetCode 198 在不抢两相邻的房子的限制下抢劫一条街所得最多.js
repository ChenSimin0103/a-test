// ������������nums�����������һ���������з������Ǯ����һ��ǿ��Ҫ��Ǯ��Ψһ�������ǲ����������ڵķ��ӣ�����������Ǯ�����ֵ
// ˼·��1. ʹ�ö�̬�滮��i=0��i=1�����ȷ����i=3�Ժ�ÿ���жϱ����������Ľ�����Ƿ�Ȳ�����õ������ս���������Ļ����������룬���С�����β����룬
	���������룬�����ж���һ�εĽ���Ƿ��Ѿ����룬����һ�β����룬�����ֱ�Ӽ��룬����һ��������״̬����Ҫ�޸�Ϊ������״̬
	2. ���һ����ά�������洢�����ÿ����Ԫ�ذ������㵽��ǰԪ�����õ������ֵ��һ����ʾ��ǰԪ���Ƿ�������״̬�Ĳ���ֵ

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length;
    var gain = [];
    if(len === 0)
        return 0
    for(i=0;i<len;i++){
        if(i===0) {
            gain[0]=[nums[0],true]
        }
        else if(i===1) {
            gain[1] = (nums[1]>=nums[0])?[nums[1],true]:[nums[0],false];
        }
        else {
            var prepregain = gain[i-2]
            var pregain = gain[i-1]
            if(gain[i-1][1] === false)
                gain[i] = [gain[i-1][0]+nums[i],true]
            else if(gain[i-1][1] === true)
                gain[i] = (gain[i-2][0]+nums[i]>=gain[i-1][0])?[gain[i-2][0]+nums[i],true]:[gain[i-1][0],false]
        }
                    console.log(gain) 
    }
    return gain[len-1][0]
};