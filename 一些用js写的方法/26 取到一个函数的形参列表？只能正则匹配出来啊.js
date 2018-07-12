
// 定义这个函数
var fn = function(name,sex,todo) {
	console.log(name + " " + sex + " is going to " + todo )
}

// 取出一个函数形参的方法，正则匹配出function后小括号里的内容
var match = fn.toString().match(/function([^\(]*)\(([^\)]*)\)/);
var argNames = match[2].split(',');

// 试一试
console.log(argNames)