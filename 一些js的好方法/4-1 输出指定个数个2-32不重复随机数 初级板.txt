var fun = function(n){
	var num
	var arr = []
	for(i=0;i<n;i++){
    	num = Math.round((Math.random()*30+2))
		if( arr.indexOf(num) > -1 ) i--
		else arr[i] = num
	}
 return arr.sort()
}
console.log(fun(7))