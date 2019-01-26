// 只要 理解并按照 promise/A+ 规范即可

// 定义常量，便于维护
const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

// 定义promise ，传入参数为一个函数，
function MyPromise(fn) {
  this.state = PENDING;
  this.value = undefined;
  this.reason = undefined;
  this.onResolvedCallbacks = [];
  this.onRejectedCallbacls = [];

  // 不用self的话，就将内部方法写为箭头函数，改变作用域
  let self = this
  function resolve(value) {
    if (self.state === PENDING) {
      self.state = RESOLVED;
      self.value = value;
      self.onResolvedCallbacks.forEach(fn => fn());
    }
  }

  function reject(reason) {
    if (self.state === PENDING) {
      self.state = REJECTED;
      self.reason = reason;
      self.onRejectedCallbacls.forEach(fn => fn());
    }
  }

  try {
    fn(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

MyPromise.prototype.then = function(onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' ? onResolved : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
  let promise2 = new MyPromise((resolve, reject) => {
    if(this.state === RESOLVED) {
      setTimeout(() => {
        try {
          let x = onResolved(this.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    }
    
    if(this.state === REJECTED) {
      setTimeout(() => {
        try {
          let x = onRejected(this.reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    }

    if(this.state === PENDING) {
      this.onResolvedCallbacks.push(() => {
        setTimeout(() => {
          try {
            let x = onResolved(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      })

      this.onRejectedCallbacls.push(() => {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch(e) {
            reject(e)
          }
        }, 0)
      })

    }
  })
  return promise2
};

// onResolve 为 null 时，在 .then 里直接跑进catch
MyPromise.prototype.catch = function(fn) {
  return this.then(null, fn)
}


// resolvePromise 函数
function resolvePromise(promise2, x, resolve, reject) {
  if(x === promise2) {
    return reject(new TypeError('检测到了死循环链使用！'))
  }
  let called
  if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if(typeof then === 'function') {
        then.call(
          x,
          y => {
            if(called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          err => {
            if(called) return
            called = true
            reject(err)
          }
        )
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

// 其他静态方法
MyPromise.resolve = function(val) {
  return new MyPromise((resolve, reject) => {
    resolve(val)
  })
}
MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason)
  })
}
// 传入一个包含多个promise对象的数组
// 实现原理：将所有的promise都开始执行，并在每个promise的.then方法里将结果存入结果数组，并记忆次数，
// 当总数等于原数组的长度时，意味着全部处理完毕，返回结果数组（resolve(arr)）
MyPromise.all = function(promises) {
  let arr = []
  let i = 0
  function processData(index, data) {
    arr[index] = data
    i++
    if(i === promises.length) {
      resolve(arr)
    }
  }
  return new MyPromise((resolve, reject) => {
    for(let i = 0;i<promises.length; i++) {
      promises[i].then(data => {
        processData(i, data)
      }, reject)
    }
  })
}
// 实现原理：将所有的promise都开始执行，任意一个执行成功即算完成
MyPromise.race = function(promises) {
  return new MyPromise((resolve, reject) => {
    for(let i = 0; i<promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
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