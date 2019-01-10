function ajax(context) {
  console.log(context);
}

function jieliu(fn, delay) {
  return function(args) {
    let self = this;
    let _args = args;
    clearTimeout(fn.id);
    fn.id = setTimeout(() => {
      ajax.call(self, _args);
    }, delay);
  };
}

let jieliuAjax = jieliu(ajax, 1000);

let input = document.getElementById('throttle');
input.addEventListener('keyup', e => {
  jieliuAjax(e.target.value);
  // ajax(e.target.value);
});
