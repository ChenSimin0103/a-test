const net = require('net')

const myServer = net.createServer(socket => {
  socket.on('data', () => {
    socket.write('start')
  })
  socket.on('end', () => {
    socket.write('end, disconnect')
  })
  socket.write('some data')
})

myServer.listen(9000, () => {
  console.log('服务已创建');
})