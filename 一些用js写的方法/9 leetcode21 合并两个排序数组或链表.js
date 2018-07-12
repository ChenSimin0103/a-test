// @example l1=[1,2,4],l1=[1,3,4]  result: [1,1,2,3,4,4]
// 大小判断逻辑写的较复杂，应该有更好的方法


var merge = function(l1, l2) {
    // 预处理
    var temp = [];
    var len1 = l1.length, len2 = l2.length;
    var j = 0, k = 0;
    while(len1>0 || len2>0) {
        if(l1[j]<l2[k]){
            temp.push(l1[j]);
            j = (j===l1.length-1)?j:j+1;
            len1--;
        }else if(l1[j]>l2[k]) {
            temp.push(l2[k]);
            k = (k===l2.length-1)?k:k+1;
            len2--;
        }else if(l1[j]===l2[k]) {
            temp.push(l1[j],l2[k])
            j = (j===l1.length-1)?j:j+1;
            k = (k===l2.length-1)?k:k+1;
            len1--;
            len2--;
        }
    }
        return temp;
};