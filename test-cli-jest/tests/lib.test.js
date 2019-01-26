const lib = require('../utils/lib');
const db = require('../utils/db')
const mail = require('../utils/mail')
// const jest = require('jest')

// // 测试函数
// describe('测试绝对值函数：', () => {
//   it('正数的绝对值是自身', () => {
//     const re = lib.absolute(10);
//     expect(re).toBe(10);
//   });

//   it('负数的绝对值是相反数', () => {
//     const re = lib.absolute(-10);
//     expect(re).toBe(10);
//   });

//   it('0的绝对值是自身', () => {
//     const re = lib.absolute(0);
//     expect(re).toBe(0);
//   });
// });

// // 测试数组
// describe('测试数组：', () => {
//   it('返回一个数组', () => {
//     const re = lib.getCurrencies();
//     expect(re).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']));
//   });
// });

// // 测试对象
// describe('测试对象：', () => {
//   it('应该返回对应的id', () => {
//     const re = lib.getProduct(1);
//     expect(re).toEqual({ id: 1, price: 10 });
//     // 或使用：
//     // expect(re).toMatchObject({})
//   });
// });

// // 测试异常
// describe('测试异常：', () => {
//   it('无姓名时抛出异常', () => {
//     // 用例
//     const args = [null, undefined, NaN, '', 0, false];
//     args.forEach(item => {
//       expect(() => {
//         lib.registerUser(item);
//       }).toThrow();
//     });
//   });
//   it('有姓名时返回对象', () => {
//     const re = lib.registerUser('simin');
//     expect(re).toMatchObject({ username: 'simin' });
//     expect(re.id).toBeGreaterThan(0);
//   });
// });

// 使用mock数据 测试数据库请求或网络请求
describe('测试访问数据库操作：', () => {
  // const 
  it('如果customer.points > 10，则有10%的折扣', () => {
    const order = {customerId: 1, totalPrice: 10}
    lib.applyDiscount(order)
    expect(order.totalPrice).toBe(9)
  })
})

describe('notifyCustomer: ', () => {
  it('', () => {
    // 因为对象类型是引用的方式，所以这里更改 mail 函数在调用的时候会生效
    // let mailSent = false
    // mail.send = function(email, message) {
    //   mailSent = true
    // }
    // lib.notifyCustomer({customerId: 1})
    // expect(mailSent).toBe(true)

    db.getCustomerSync = jest.fn().mockReturnValue({email: 'a'})
    mail.send = jest.fn()

    lib.notifyCustomer({customerId: 1})

    // 只要确认 mail.send 函数被调用即可，不关心返回值
    expect(mail.send).toHaveBeenCalled()
    // 查看 调用函数时 传入的参数
    expect(mail.send.mock.calls[0][0]).toBe('a')
    // 正则匹配：字符串里包含 order 字符串
    expect(mail.send.mock.calls[0][1]).toMatch(/order/)
  })
})