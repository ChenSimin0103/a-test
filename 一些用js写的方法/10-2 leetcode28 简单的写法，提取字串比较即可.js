/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 // 使用subStr()提取字串比较即可，使用charAt()单独比较每个字符的写法不好
 
var strStr = function(haystack, needle) {
    var len1 = haystack.length;
    var len2 = needle.length;
    for(var i=0;i<=len1-len2;i++){
        if(haystack.substr(i,len2) === needle)
            return i;
    }
    return -1;
};