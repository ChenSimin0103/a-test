var fun = function(n){
	// 取值范围提出来
	var min = 2
	var max = 32
	var amount = max-min
	// 输入校验 可能还需要 1.n是否存在校验 2.随机函数是否正常校验 
	if( !(Number.isInteger(n) && (n>=0&&n<=(amount+1))) ) return []
	//函数逻辑
	var num
	var arr = []
	for(i=0;i<n;i++){
    	num = Math.round((Math.random()*amount+min))
		if( arr.indexOf(num) > -1 ) i--
		else arr[i] = num
	}
 return arr
}
console.log(fun(15))
console.log(fun(15.55))