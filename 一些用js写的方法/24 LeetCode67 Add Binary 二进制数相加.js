/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 
 // �򵥵����⣬˼·����һ�£�ת��Ϊ������в�������ת�����ַ��������д���е㳤
 // tips: ʹ��split('')�ָ��ַ���Ϊ�������Ԫ����Ϊ�ַ��������ʱû��ת��Ϊ���ֵ����˴���
 
var addBinary = function(a, b) {
    var result = []
    var tmp = 0
    var a = a.split('').reverse()
    var b = b.split('').reverse()
    var len = Math.max(a.length,b.length)
    // console.log(a,b)
    for(var i=0;i<len;i++){
        a[i] = (a[i] === undefined)?0:a[i]
        b[i] = (b[i] === undefined)?0:b[i]
        if(Number(a[i])+Number(b[i])+tmp === 3){
            result[i] = 1
            tmp = 1
        }else if(Number(a[i])+Number(b[i])+tmp === 2){
            result[i] = 0
            tmp = 1
        }else if(Number(a[i])+Number(b[i])+tmp === 1){
            result[i] = 1
            tmp = 0
        }else if(Number(a[i])+Number(b[i])+tmp === 0){
            result[i] = 0
            tmp = 0
        }
        // console.log(result)
    }
    if(tmp === 1)
        result.push(tmp)
    return result.reverse().join('')
};