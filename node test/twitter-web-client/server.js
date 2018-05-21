var qs = require('querystring')
require("http")
  .createServer((req, res) => {
    // res.writeHead(200);
    // res.end("Hello world!");
    var body = ''
    req.on('data',(chunk)=>{
      body += chunk
    })
    req.on('end',()=>{
      res.writeHead(200)
      res.end('receive done')
      console.log("\n got name: \033[90m" + qs.parse(body).name + "\033[39m\n")
    })
  })
  .listen(3000);
