
/*
 * 功能：使用递归的方法创建一个内容等于下标的数组
 *	@input  len:Number arr:Array 
 *	@output [1,2,3,4,5]
 */

function createArray(len, arr) {
	if(len > 0){
		arr[--len] = len;
		createArray(len, arr);
	}
	return arr;
}

// 用例
createArray(100, [])
