// var mybuffer = new Buffer('==ii1j2i3h1i23h', 'base64');
// console.log(mybuffer);
// require('fs').writeFile('logo.png', mybuffer)
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/from.txt', {
  highWaterMark: 3,
});
myReadStream.setEncoding('utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/to.txt');
var data = '';
myReadStream.on('data', chunk => {
  data += chunk;
});
myReadStream.on('end', () => {
  myWriteStream.write(data, 'UTF8');
  // console.log(data);
});

// var server = http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     myReadStream.pipe('1234567');
//   })
//   .listen(8888);

console.log('running in 8888');

// myReadStream.pipe(myWriteStream)
