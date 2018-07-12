// 一个讲究的数组
var arr = [11,123,456,789,99];

// 20年前这样遍历
for(i=0;i<arr.length;i++) {
    console.log(arr[i]);
}

// ES5中这样遍历 呵呵还用了箭头函数 缺陷：遍历过程不能中断，跳出
arr.forEach((value) => {
    console.log(value);
})

// ES6中有for-of循环 而不是for-in(用于遍历普通对象)
for(var value in arr) {
    console.log(value);
}

//总结：
