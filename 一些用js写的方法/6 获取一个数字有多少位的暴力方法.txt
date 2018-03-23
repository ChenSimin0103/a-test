// 获取一个数字有多少位的方法

// 黑科技？又不是不能用
var tab = [0,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000];
function numMod(x) {
    for(i=10;i>0;i--) {
        if(x>=tab[i])
            return i+1;
    };
}
numMod(1234567);

// hh，这是正常人的写法
function numMod(x) {
	return x.toString().length;
}