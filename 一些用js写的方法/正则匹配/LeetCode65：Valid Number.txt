/**
 * @param {string} s
 * @return {boolean}
 */
 // 1480个testing case过了1400+，有些测试用例简直脑洞，不知道到底对不对，此题坑爹
 
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

// 偷懒的方法：使用Number()方法判断是否为数字
