var upstairs = function(num){
	if(num === 1)
	return 1
	if(num === 2)
	return 2
	return upstairs(num-1) + upstairs(num-2)
}
upstairs(10)