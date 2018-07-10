/**
 * @param {string} s
 * @return {string[]}
 */
 
 // 给一个由数字组成的字符串，输出其所有可能的分割为IP地址的分割方式
 
var restoreIpAddresses = function(s) {
    var len = s.length;
    var result = [];
    var s1,s2,s3,s4;
    for(i=1;i<4;i++){
        for(j=1;j<4;j++){
            for(k=1;k<4;k++){
                if(i+j+k>len){
                    break;
                }
                s1 = s.slice(0,i);
                s2 = s.slice(i,i+j);
                s3 = s.slice(i+j,i+j+k);
                s4 = s.slice(i+j+k,len);
                // console.log(s1,s2,s3,s4)
                if(isIPNum(s1) && isIPNum(s2) && isIPNum(s3) && isIPNum(s4)){
                    var tmp = `${s1}.${s2}.${s3}.${s4}`;
                    result.push(tmp);
                }
            }
        }
    }
    return result
};
function isIPNum(str) {
    if( Number(str).toString()==str && Number(str)<256 && Number(str)>=0)
		return true
	else
		return false
}