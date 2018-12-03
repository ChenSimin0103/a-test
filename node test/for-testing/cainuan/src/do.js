console.log('开始处理');
const fs = require('fs');

const types = require('./cainuanji-err.js')

let result = ''

let code = Object.keys(types.allCode)

let name = types.allName

for(var i=0;i<code.length;i++){
  var group = Math.ceil(i/71)
  var temp = `${code[i]}_s: '${types.allSolution[i%71]}',\n`
  result += temp
}

// for(var keys of code){
//   // var temp = `err_${types.sourceCode[i]}: '${types.sourceCode[i]}',\n`
//   // result += temp
//   var temp = `${}`
// }





fs.writeFile('./result.js', result, function(err) {
  if (err) console.log('写文件操作失败');
  else console.log('写文件操作成功');
});

// for(var i in types.sourceCode) {
//   fs.writeFileSync('./message.txt','这是第一行');
// }