/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * @example strStr('aabaa','baa') ---> 2 ; strStr('aaaaa','baa') --->-1
 */
 // �Ƿ��и��򵥵��ж��߼�����Ԥ��������Ҳ�����ˣ�
 
var strStr = function(haystack, needle) {
    var len = needle.length;
    // �����Զ��׼��������ֱ���ж�
    if(needle===""){
        return 0
    }
    if(needle.length > haystack.length){
        return -1
    }
    for(var i=0;i<haystack.length;i++){
        var index = i
        for(var j=0;j<needle.length;j++){
            if(needle.charAt(j) === haystack.charAt(index)){
                index++;
            }else {
                break;
            }
            if(j === needle.length-1){
                return i
            }
        }
    }
    return -1;
};