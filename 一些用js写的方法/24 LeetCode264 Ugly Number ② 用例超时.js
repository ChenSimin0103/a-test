/**
 * @param {number} n
 * @return {number}
 */

// ���Դ�����Ľṹ�����ƣ���Ϊ����ȥ�غ���������⣬��Ȼ��ʱ����AC������chrome��Ҳ��1�����ң���

var nthUglyNumber = function(n) {
    var result = [1,2,3,4,5]
    for(i=0;i<n;i++){
        var tmp = [result[i]*2,result[i]*3,result[i]*4,result[i]*5]
        result = [...new Set(result.concat(tmp))]
        result.sort((a,b) => {return a-b})
        // console.log(result)
    }
    return result[n-1]
};