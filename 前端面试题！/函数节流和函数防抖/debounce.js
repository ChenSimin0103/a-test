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
function throttle(fn, cycle) {
  let start = +Date.now()
  let now
  let timer
  return function () {
    now = +Date.now()
    clearTimeout(timer)
    // 注意 Date 拿到的是毫秒
    if(now - start >= cycle) {
      fn.apply(this, arguments)
      start = now
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, cycle)
    }
  }
}


let throttleAjax = throttle(ajax, 1000);
let inputc = document.getElementById('throttle');
inputc.addEventListener('keyup', function(e) {
  throttleAjax(e.target.value);
});
