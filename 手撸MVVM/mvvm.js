// create by csm in 180712
// 参考： https://github.com/honeydlp/mvvm/blob/master/vue_mvvm.html

function MVVM(opts) {
  this.data = opts.data;
  this.el = opts.el;

  var data = this.data;
  var me = this;
  var el = document.querySelector(this.el);

  // 观察
  observer(data, this);
  var dom = nodeToFragment(el, this);
  el.appendChild(dom);
}

// 将el内的元素，编译成fragment（碎片） dom片段
function nodeToFragment(node, vm) {
  var frag = document.createDocumentFragment();
  var child;
  // 这里这样写的原因：执行appendChild()方法后会移除这个节点，没有节点为其退出条件
  while (child = node.firstChild) {
    complie(child, vm);
    frag.appendChild(child);
  }
  return frag;
}

// 解析指令：{{}} ，模板字符串
function complie(node, vm) {
  var reg = /\{\{(.*)\}\}/;
  // 元素节点nodeType==1, 属性节点nodeType==2, 文本节点nodeType==3
  if (node.nodeType == 1) {
    var attrs = node.attributes;
    for (var i = 0; i < attrs.length; i++) {
      if (attrs[i].nodeName == 'v-model') {
        var name = attrs[i].nodeValue;
        node.addEventListener('input', function(e) {
          vm[name] = e.target.value;
        });
        node.value = vm[name];
        node.removeAttribute('v-model');
      }
    }
    new watch(vm, node, name, 'input');
  }
  if (node.nodeType == 3) {
    if (reg.test(node.nodeValue)) {
      var name = RegExp.$1;
      name = name.trim();
      nodeType = 'text';
      new watch(vm, node, name, 'text');
    }
  }
}

// 监听器
function watch(vm, node, name, nodeType) {
  Dep.target = this;
  this.name = name;
  this.node = node;
  this.vm = vm;
  this.nodeType = nodeType;
  this.update();
  Dep.target = null;
}
watch.prototype = {
  update: function(){
    this.get();
    if(this.nodeType == 'text'){
      this.node.nodeValue = this.value;
    }
    if(this.nodeType == 'input'){
      this.node.value = this.value;
    }
  },
  get: function(){
    this.value = this.vm[this.name];
  }
}

// 观察者 observer
function observer(data, vm){
  Object.keys(data).forEach(function(key){
    defineReactive(vm, key, data[key]);
  })
}
function defineReactive(vm, key, val){
  var dep = new Dep();
  Object.defineProperty(vm, key, {
    get: function(){
      if(Dep.target){
        dep.addSub(Dep.target);
      }
      return val;
    },
    set: function(newVal){
      if(newVal == val)
        return;
      val = newVal;
      dep.notify();
    }
  })
}

function Dep(){
  this.subs = [];
}
Dep.prototype = {
  addSub: function(sub){
    this.subs.push(sub);
  },
  notify: function(){
    this.subs.forEach(function(sub){
      sub.update();
    })
  }
}

var vm = new MVVM({
  el: '#app',
  data: {
    'msg': 'hello world 233',
  },
});