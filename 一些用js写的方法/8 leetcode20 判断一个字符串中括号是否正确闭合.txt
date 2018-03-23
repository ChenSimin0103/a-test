
/*
 * 功能：判断一个字符串中括号是否正确闭合，限于三种括号：'(',')','[',']','{','}'
 *	@input   String 
 *	@output  Boolean 
 *  @example '(){}[]'--true   '({}[])'--true  '([){]}'--false
 */
 
 // 思路：使用一个空数组存每个字符，每次存时与其最后一位比较，可配对闭合则删除数组最后一位，不可配对则添加至数组最后一位
 // 不足：是否有更好的判断括号是否配对的方法
 
 var valid = function(s) {
	// 预判断
	if(s.length === 0){
		return true;
	}
	var temp = [];
	for(var i=0;i<s.length;i++){
		if((temp[temp.length-1]==='(' && s.charAt(i)===')') || (temp[temp.length-1]==='[' && s.charAt(i)===']') || (temp[temp.length-1]==='{' && s.charAt(i)==='}')){
			temp.pop();
		}else {
			temp.push(s.charAt(i))
		}
	}
	// 判断数组为空是否有更好的方法？
	return temp.length===0?true:false;
 }