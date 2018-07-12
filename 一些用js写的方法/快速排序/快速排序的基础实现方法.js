// 写完之后思考一个问题： 
//		1. 划分函数里i和j的自增自减条件为什么是 arr[j]>pivot, arr[i]<=pivot，相等的作用是什么
// 优化：
//		返回基准元素位置部分可以i和j不断比较，一次赋值

/**
 * @param {array,number,number} 原数组，第一位的index，最后一位的index
 * @return {array}              排序后的数组
 */
 
// 快排函数，采取分治法分解子问题，然后递归调用
function quickSort(arr, low, high) {
	var mid;
	if(low<high){
		// 返回基准元素位置
		mid = part(arr, low, high);
		quickSort(arr, low, mid-1);
		quickSort(arr, mid+1, high)
	}
	return arr
}
// 划分函数，返回基准元素所在的下标，这里使用数组第一位做基准元素起始位
function part(arr, low, high) {
	var i=low, j=high, pivot=arr[low], temp;
	while(i<j){
		while(i<j && arr[j]>pivot) 
			j--
		if(i<j){
			temp = arr[j]
			arr[j] = arr[i]
			arr[i] = temp
			i++ 
		}
		while(i<j && arr[i]<=pivot)
			i++
		if(i<j){
			temp = arr[j]
			arr[j] = arr[i]
			arr[i] = temp
			j--
		}
	}
	return i;
}