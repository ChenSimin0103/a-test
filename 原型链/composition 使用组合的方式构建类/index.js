console.log('start');

// 好的组合胜过继承 继承最好只有一层
// 使用mixin 的方式
const canEat = {
    eat: function () {
        this.hunger--
        console.log();
    }
}
const canWalk = {
    walk: function () {
        console.log('walking');
    }
}
const canSwim = {
    swim: function () {
        console.log('swim');
    }
}
// 这是重点，组合的实现方式 组合出一个对象的原型对象，并使该对象继承

function Person() { }

// Object.assign(Person.prototype, canEat, canWalk, canSwim)
mixin(Person.prototype, canEat, canWalk)

const me = new Person()
console.log(me);

// 抽象出来的方法
function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}