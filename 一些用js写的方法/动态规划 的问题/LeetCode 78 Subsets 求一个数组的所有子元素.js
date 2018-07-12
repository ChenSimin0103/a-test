/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
 // ���˶�̬�滮��˼�룬��Ȼ��������������
 // ˼·��˵����ÿ����һ��Ͱ���Ԫ����֮ǰ���������������һ�飬�ǳ����صĹ��ɣ���ֵ��һ����������Ԫ�ؿ�ʼ
 // n��Ԫ�ص�������2��n�η���������
 
var subsets = function(nums) {
    let subsets = [[]]
    for(i=0;i<nums.length;i++){
        let len = subsets.length
        for(j=0;j<len;j++){
            subsets.push([...subsets[j],nums[i]])
        }
        // console.log(subsets)
    }
    return subsets
};