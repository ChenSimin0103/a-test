// 定义常量，便于维护
const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    // 初始化状态
    this.state = PENDING;
    // 成功的值
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;
    // 成功回调存放的数组
    this.onResolveCallbacks = [];
    // 失败回调存放的数组
    this.onRejectCallbacks = [];

    // 定义内部方法
    let resolve = value => {
      if (this.state === PENDING) {
        this.state = RESOLVED;
        this.value = value;
        this.onResolveCallbacks.forEach(fn => fn())
      }
    };

    let reject = reason => {
      if(this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason
        this.onRejectCallbacks.forEach(fn => fn())
      }
    };
    // 创建 Promise 时即开始执行此函数
    try {
      executor(resolve, reject);
    }
    catch(err) {
      reject(err)
    }
  }
  // 原型方法 .then
  then(onResolved, onRejected) {
    // onResolve,onRejected都是可选参数，如果他们不是函数，必须被忽略
    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
    // .then方法返回一个promise
    let promise2 = new MyPromise((resolve, reject) => {
      if(this.state === RESOLVED) {
        // resolvePromise函数，处理自己return的promise 和默认的 promise的关系
        // onFulfilled或onRejected不能同步被调用，必须异步调用(加入下一个event-loop)。我们就用setTimeout解决异步问题
        setTimeout(() => {
          try {
            let x = onResolved(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0)
      }

      if(this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0)
      }

      if (this.state === PENDING) {
        this.onResolveCallbacks.push(()=>{
          setTimeout(() => {
            try {
              let x = onResolved(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0)
        })
        this.onRejectCallbacks.push(()=>{
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0)
        })
      }
    })
    // 返回 promise ，完成链式调用
    return promise2
  }
  // 原型方法 .catch
  catch(fn) {
    return this.then(null, fn)
  }
  // 静态方法
  static resolve(val) {
    return new MyPromise((resolve, reject) => {
      resolve(val)
    })
  }
  static reject(val) {
    return new MyPromise((resolve, reject) => {
      reject(val)
    })    
  }
  static all(promises) {
    let arr = []
    let i = 0
    function processData(index, data) {
      arr[index] = data
      i++
      if(i == promises.length) {
        resolve(arr)
      }
    }
    return new MyPromise((resolve, reject) => {
      for(let i = 0;i < promises.length; i++) {
        promises[i].then(data => {
          processData(i, data)
        }, reject)
      }
    })
  }
  // 参数是一个数组
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for(let i = 0; i < promises.length; i++) {
        promises[i].then(resolve, reject)
      }
    })
  }
}

// resolvePromise函数，处理自己return的promise 和默认的 promise的关系
function resolvePromise(promise2, x, resolve, reject) {
  if(x === promise2) {
    return reject(new TypeError('检测到了死循环链使用！'))
  }
  let called;
  if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      // A+规定，声明then = x的then方法
      let then = x.then
      if(typeof then === 'function') {
        then.call(
          x, 
          // 成功回调
          y => {
            if(called) return
            called = true
            // resolve的结果依旧是promise 那就继续解析
            resolvePromise(promise2, y, resolve, reject)
          },
          // 失败回调
          err => {
            if(called) return
            called = true
            reject(err)
          }) 
        } else {
          resolve(x)
        }
      }
      catch(err) {
        if(called) return
        called = true
        reject(err)
      }
  } else {
    resolve(x)
  }
}



// 验证效果：使用 Promise-aplus-tests 插件
// Promise.defer = Promise.deferred = function () {
//   let dfd = {}
//   dfd.promise = new MyPromise((resolve,reject)=>{
//     dfd.resolve = resolve;
//     dfd.reject = reject;
//   });
//   return dfd;
// }
// module.exports = Promise;

// 使用一下
function getVal() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      const val = Math.random() < 0.5;
      val ? resolve(val) : reject(val);
    }, 1000);
  });
}
getVal()
  .then(msg => {console.log(msg)})
  .catch(err=>{console.log(err)})