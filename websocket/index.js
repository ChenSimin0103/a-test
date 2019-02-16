const webSocketServer = require('ws').Server
const wss = new webSocketServer({port: 9900})

wss.on('connection', ws => {
  ws.on('message', msg => {
    console.log('receive: %s', msg);
  })
})