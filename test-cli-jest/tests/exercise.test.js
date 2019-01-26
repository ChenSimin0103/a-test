const exer = require('../utils/exercise1');

// 测试fizzbuzz
describe('测试fizzbuzz函数：', () => {

  // const args = [null, undefined, NaN, '', false];
  // args.forEach(item => {
  //   expect(() => {
  //     exer.fizzBuzz(item);
  //   }).toThrow();
  // });

  it('输入不是数字是抛出错误', () => {
    expect(() => {exer.fizzBuzz('233')}).toThrow();
  });
  it('3和5的倍数显示 FizzBuzz', () => {
    expect(exer.fizzBuzz(30)).toBe('FizzBuzz');
  });
  it('仅3的倍数显示 Fizz', () => {
    expect(exer.fizzBuzz(27)).toBe('Fizz');
  });
  it('仅5的倍数显示 Buzz', () => {
    expect(exer.fizzBuzz(35)).toBe('Buzz');
  });
  it('既不是3和5的倍数显示 自身', () => {
    expect(exer.fizzBuzz(32)).toBe(32);
  });
});