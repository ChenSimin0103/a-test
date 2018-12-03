// 一个表示负数的类，包含状态定义，加法，乘法，取模，求负，转换为字符串，检测相等，等方法

function Complex(real, imag) {
  // 确保两个实参都是数字
  if (isNaN(real) || isNaN(imag))
    throw new TypeError();
  this.r = real;
  this.i = imag;
}

// 加法
Complex.prototype.add = function (that) {
  return new Complex(this.r + that.r, this.i + that.i)
}

// 乘法
Complex.prototype.mul = function (that) {
  return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r)
}

// 取模
Complex.prototype.mag = function () {
  return Math.sqrt(this.r * this.r + this.i * this.i)
}

// 求负
Complex.prototype.neg = function () {
  return new Complex(-this.r, -this.i)
}

// 转为字符串
Complex.prototype.toString = function () {
  return `{${this.r},${this.i}}`
}

// 由字符串转换为Complex对象，使用正则匹配
Complex._format = /^\{([^,]+),([^}]+)\}$/
// 注意！这里是类的方法，不是实例的方法，所以这样定义，使用时：Complex.parse() , 而实例的方法使用时：var a = new Complex(); 
Complex.parse = function (str) {
  try {
    var m = Complex._format.exec(str)
    return new Complex(parseFloat(m[1]), parseFloat(m[2]))
  } catch (e) {
    throw new TypeError("不能将子字符串转为Complex对象")
  }
}

// 判断相等
Complex.prototype.equals = function (that) {
  return that !== null && this.constructor === Complex && this.r === that.r && this.i === that.i
}

// 一些常用的运算变量
// 零的定义
Complex.ZERO = new Complex(0, 0)
// 正负单位定义
Complex.ONE = new Complex(1, 0)
Complex.I = new Complex(0, 1)

// 简单使用：
var a = new Complex(3, 4)
var b = new Complex(1, -1)
a.add(b).toString()
Complex.parse(a.toString()).add(a.neg()).equals(Complex.ZERO)