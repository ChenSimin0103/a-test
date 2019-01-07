// 只要 理解并按照 promise/A+ 规范即可

// 定义常量，便于维护
const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

// 定义promise ，传入参数为一个函数，
function MyPromise(fn) {
  // 代码可能会异步执行，需要能拿到正确的this，即这样做时，在任何位置调用此函数中的方法（通过函数引用而不是方法调用），都能拿到此实例
  const self = this;
  // 保存状态，只能变化一次
  self.state = PENDING;
  // 保存传递的值
  self.value = null;
  // 用于保存 then 和 catch 中的回调，在状态发生变化时才调用
  self.resolvedCallbacks = [];
  self.rejectedCallbacks = [];

  // 添加 resolve reject 函数
  function resolve(value) {
    // 只响应 PENDING 状态（状态之变化一次）
    if (self.state === PENDING) {
      self.state = RESOLVED;
      self.value = value;
      // 执行每个回调
      self.resolvedCallbacks.map(cb => cb(self.value));
    }
  }
  function reject(value) {
    // 只响应 PENDING 状态（状态之变化一次）
    if (self.state === PENDING) {
      self.state = REJECTED;
      self.value = value;
      // 执行每个回调
      self.rejectedCallbacks.map(cb => cb(self.value));
    }
  }

  // 在 Promise 声明时就开始执行传入 Promise 的要处理的函数
  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

// 原型方法
MyPromise.prototype.then = function(onResolved, onRejected) {
  const self = this;
  //根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
  onResolved = typeof onResolved === 'function' ? onResolved : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : r => r;

  if(self.state === RESOLVED) {
    return new MyPromise()
  }

  if(self.state === REJECTED) {
    return new MyPromise()
  }

  if(self.state === PENDING) {
    return new MyPromise()
  }

};
MyPromise.prototype.catch = function(onResolved, onRejected) {};
// 静态方法
MyPromise.resolve = function() {};
MyPromise.reject = function() {};
MyPromise.all = function() {};
MyPromise.race = function() {};

// 测试promise
function getVal() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      const val = Math.random() < 0.5;
      val ? resolve(val) : reject(val);
    }, 1000);
  });
}
getVal().then(msg => {
  console.log(msg);
});
