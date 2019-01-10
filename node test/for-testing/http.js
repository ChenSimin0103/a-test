const http = require('http');

const server = http.createServer((req,res) => {
  console.log('req:' + req.url)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello');
});

server.listen(8000);
console.log('run in 8000');
