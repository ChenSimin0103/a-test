var books = [
  "Game of thornte",
  "The billions"
]

function serveBooks() {
  var html = '<a>' + books.join('</a><br><a>') + '</a>'
  books = []
  return html
}

// var http = require("http")
// http.createServer(function (request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" })
//   response.end(serveBooks())
// }).listen(8888)

var http = require("http")
http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" })
  response.end('<h1>HELLO WORLD</h1>')
}).listen(8888)

console.log("server is running at http://127.0.0.1:8888")