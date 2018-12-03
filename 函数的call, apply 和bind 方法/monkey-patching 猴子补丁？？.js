// monkey-patching 猴子补丁

// 原本的对象，带一个方法
var me = {
  name: function() {
    console.log('simin');
  },
};

// 使用这种做法，重写了对象的方法：方法不变，但执行前和执行后输出提示
function trace(o, m) {
  // 保存一份原方法
  var original = o[m];
  // 重写原方法
  o[m] = function() {
    console.log(new Date(), '开始执行', m);
    var result = original.apply(this, arguments);
    console.log(new Date(), '结束执行', m);
    return result;
  };
}
// 使用
trace(me, 'name');
// 方法已被重写
me.name();
