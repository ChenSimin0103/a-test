const events = require('events');
const util = require('util');

var Person = function(name = 233) {
  events.EventEmitter.call(this);
  this.name = name;
};

// 原型链继承
Person.prototype = new events.EventEmitter();
// 构造继承

// 添加至构造函数
// util.inherits(Person, events.EventEmitter);

var j = new Person('j');
var m = new Person('m');
var r = new Person('r');
var ff = new Person('ff')

var people = [j, m, r, ff];
people.forEach(person => {
  person.on('speak', msg => {
    console.log(person.name + ' said: ' + msg);
  });
});

r.emit('speak', 'fuck y');

// const myEnitter = new events.EventEmitter();

// myEnitter.on('me', msg => console.log(msg));

// myEnitter.emit('me', 'simin');

// console.log(myEnitter.name)
