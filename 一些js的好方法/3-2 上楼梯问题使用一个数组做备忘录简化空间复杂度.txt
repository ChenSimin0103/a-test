var upstairs = function(num,temp){
	var save = temp
	if(num === 1)
	return 1
	if(num === 2)
	return 2
	if(save['num'])
	return save['num']
	else
	var val = upstairs(num-1,save) + upstairs(num-2,save)
	save['num'] = val
	return save['num']
}
var save = {}
upstairs(10,save)