/**
 * @param {string} s
 * @return {number}
 */
 
 // ȡ���һ�����ʵĳ���
 
var lengthOfLastWord = function(s) {
    var tmp = s.trim().split(' ')
    var len = tmp.length
    return tmp[len-1].split('').length
};