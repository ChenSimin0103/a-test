// 模拟一个请求操作
function ajax(context) {
  console.log('ajax request ' + context);
}

//
let inputa = document.getElementById('unDebounce');

inputa.addEventListener('keyup', function(e) {
  ajax(e.target.value);
});

// 如此包装一下：防抖
function debounce(fn, delay) {
  return function(args) {
    let self = this;
    let _args = args;
    clearTimeout(fn.id);
    fn.id = setTimeout(function() {
      fn.call(self, _args);
    }, delay);
  };
}

let inputb = document.getElementById('debounce');
let debounceAjax = debounce(ajax, 500);
inputb.addEventListener('keyup', function(e) {
  debounceAjax(e.target.value);
});

// 节流 没看太懂
function throttle(fun, delay) {
  let last, deferTimer;
  return function(args) {
    let self = this;
    // 这个 arguments 从哪来？
    let _args = arguments;
    // +new Date() 相当于 ( new Date() ).valueOf()
    let now = +new Date();
    if (last && (now < last + delay)) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function() {
        last = now;
        fun.apply(self, _args);
      }, delay);
    } else {
      last = now;
      fun.apply(self, _args);
    }
  };
}

let throttleAjax = throttle(ajax, 1000);
let inputc = document.getElementById('throttle');
inputc.addEventListener('keyup', function(e) {
  throttleAjax(e.target.value);
});
