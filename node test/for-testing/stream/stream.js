const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/read.txt' ,'utf-8');

myReadStream.on('data', chunk => {
  console.log('收到新的块数据');
  console.log(chunk);
});

file:///data/user/0/com.gree.greesmarthome/files/assets/Plugins/809030/control.html?mac=f4911e1ce69b&data={%22t%22:%22listT%22,%22total%22:0,%22index%22:0,%22list%22:[]}&functype=0&mainMac=#/ac-control
file:///data/user/0/com.gree.greesmarthome/files/assets/Plugins/809030/notify.html?mac=f4911e1ce69b&ext={%22data%22:{%22code%22:%22J7_2%22,%22evt%22:%223%22,%22t%22:%22error%22},%22mac%22:%22f4911e1ce69b%22,%22mid%22:%22809030%22}#/ac-control