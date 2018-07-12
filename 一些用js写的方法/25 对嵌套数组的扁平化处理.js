// 简单的递归思路，亮点在判断数组的元素是否仍是数组类型

var pros = function(arr) {
	var result = []
	getContent(arr,result)
	return result
}
var getContent = function(arr,result) {
	for(var i=0;i<arr.length;i++){
		if(arr[i] instanceof Array){
         getContent(arr[i],result);
       }else{
         result.push(arr[i]);
       }
	}
	return result
}
var a = [1,[2,[3],4],5]
pros(a)