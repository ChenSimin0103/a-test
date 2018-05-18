var http = require('http')

http.createServer((req,res) => {

  console.log('----------start-----------')
  console.log(req.headers)

  res.writeHead(200, {'Content-Type': 'image/png'})
  var stream = require('fs').createReadStream(image.png)
  stream.on('data', (data) => {
    res.write(data)
  })
  stream.on('end', () => [
    res.end()
  ])
}).listen(3000)

console.log('your application is running in localhost:3000')