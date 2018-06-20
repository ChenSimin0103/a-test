// 模块依赖
var http = require('http'),
  fs = require('fs');

// 创建服务器
var server = http.createServer(function(req, res) {
  if (
    'GET' == req.method &&
    './images' == req.url.substr(0, 7) &&
    '.jpg' == req.url.substr(-4)
  ) {
    // 检查文件是否存在（异步函数操作）
    fs.stat(__dirname + req.url, function(err, stat) {
      // 条件：如果没有找到 或 报错
      if (err || !stat.isFile()) {
        res.writeHead(404);
        res.end('Not Found');
        return;
      }
      serve(__dirname + req.url, 'application/jpg');
    });
  } else if ('GET' == req.method && '/' == req.url) {
    serve(__dirname + '/index.html', 'text/html');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }

  function serve(path, type) {
    res.writeHead(200, { 'Content-Type': type });
    fs.createReadStream(path).pipe(res);
  }

});

// 监听
server.listen(3000);
