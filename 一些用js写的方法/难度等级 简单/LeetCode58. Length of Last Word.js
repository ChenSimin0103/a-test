/**
 * @param {string} s
 * @return {number}
 */
 
 // 取最后一个单词的长度
 
var lengthOfLastWord = function(s) {
    var tmp = s.trim().split(' ')
    var len = tmp.length
    return tmp[len-1].split('').length
};