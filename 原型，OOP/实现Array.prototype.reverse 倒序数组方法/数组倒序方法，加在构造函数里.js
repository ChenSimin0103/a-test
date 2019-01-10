function Arr(arr){
	this.content = arr
}
Arr.prototype = {
	reverse: function(arr){
		var len = arr.length
		var times = Math.floor(arr.length/2)
		for(var i=0;i<times;i+=1){
			var temp = arr[i]
			arr[i] = arr[len-1-i]
			arr[len-1-i] = temp
		}
		return arr
	}
}

Arr.prototype.reverse([1,2,3])
var arr = new Arr()
console.log(arr.reverse([1,2,3]))