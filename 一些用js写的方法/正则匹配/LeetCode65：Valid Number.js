/**
 * @param {string} s
 * @return {boolean}
 */
 // 1480��testing case����1400+����Щ����������ֱ�Զ�����֪�����׶Բ��ԣ�����ӵ�
 
var isNumber = function(s) {
    s = s.trim()
    console.log(s)
    var rule1 = /^[-|+]?[0-9]+$/
    var rule2 = /^[-|+]?[0-9]*[.]?[0-9]+$/
    var rule3 = /^[-|+]?[0-9]+[.]?[0-9]*$/
    var rule4 = /^[-|+]?[0-9]+[e]?[0-9]+$/
    var rule5 = /^[-|+]?[0-9]+[.]?[e-|e+]?[0-9]+$/
    var rule6 = /^[-|+]?[0-9]*[.]?[0-9]+[e-|e+]?[0-9]+$/
    return (rule1.test(s)) || (rule2.test(s)) || (rule3.test(s)) || (rule4.test(s)) || (rule5.test(s)) || (rule6.test(s))
};

// ͵���ķ�����ʹ��Number()�����ж��Ƿ�Ϊ����
