var DPforUpstairs = function(n){
	if(n === 0)
		return 0
	if(n === 1)
		return 1
	if(n === 2)
		return 2
	var temp = 0
	var a=1,b=2
	for(i=3;i<=n;i++){
		temp = a + b
		//console.log('temp='+temp)
		a = b
		//console.log('a='+a)
		b = temp
		//console.log('b='+b)
    }
	return temp
}
DPforUpstairs(10)