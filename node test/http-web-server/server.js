var http = require("http");
var qs = require('querystring');

http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        [
          '<form method="POST" action="/url">',
          "<h1>My Form</h1>",
          "<fieldset>",
          "<label> Personal Information </label>",
          "<p> Please Input Your Name: </p>",
          '<input type="text" name="name">',
          "<p><button>submit</button></p>",
          "</form>"
        ].join("")
      );
    } else if (req.url == "/url" && req.method == 'POST') {
      var body = '';
      req.on('data', (chunk)=>{
        body += chunk
      })
      req.on('end', ()=>{
        res.writeHead(200, { "Content-Type": "text/html" });
        // res.end("You send a <b>" + req.method + '</b> request');
        // res.end('<p>Countent-Type:' + req.headers['content-type'] + '</p>' + '<p>Data: </p>' + body + '</pre>')
        res.end('<p>Your name is <b>' + qs.parse(body).name + '</b></p>')
      })
    } else {
      // res.writeHead(404);
      res.end('404 Not Found');
    }
  })
  .listen(3000);

console.log("your application is running in localhost:3000");
