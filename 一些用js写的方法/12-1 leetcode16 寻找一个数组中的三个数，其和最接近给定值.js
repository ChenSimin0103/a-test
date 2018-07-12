/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 ˼·��������������뵽�Ľⷨ����ʹ��ö�٣�ֻ��forѭ��һ�Σ�������©����һЩ��������ͨ������Ҳ���Ժ���Ըģ��߼����£�
1. ����˼����ֻ����һ��nums����ǰ����Ԫ����ɳ�ʼ���飬�����򣬴˺��ÿһ����Ԫ�ؽ������������ʼ���������һ��Ԫ�أ����滻���������滻���µ�����֮�͸��ӽ�Ŀ��ֵ������ֵ��С��
2. Ҫ�ȶ�nums����Ԥ�������䰴�վ���ֵ�Ӵ�С�������������ֵԽС������Ӱ��ԽС���൱���ȴֵ����󾫵�
3. ��Ԫ�����滻�����е�����Ԫ�ؽ��д�С�Ƚϣ����м��жϣ��ɱ���ĳЩ�Զ��׼����滻�����ֵ��������

������ڣ�û��ȫ��˼ά��
  
var threeSumClosest = function(nums, target) {
    // Ԥ���������ɴ�С����ԽС������ӦԽ������滻����
    nums = absOrder(nums);
console.log('nums='+nums)
    var len = nums.length;
    // ������ʼֵ
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
// ������������ֵ��һ�����飬���һ����������
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
// ������ֵ��С�������������ɴ�С��������ֵ��һ�����飬���һ����������
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
// �����������ĺ���target�ľ���ֵ
var abso = function(a,b,c,target) {
    return Math.abs((a+b+c)-target)
}