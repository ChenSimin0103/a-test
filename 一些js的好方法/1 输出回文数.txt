function fun(n,m){
	console.log(n)
	if(n < m){
		fun(n+1,m)
    	console.log(n)
    }
}
fun(2,7)