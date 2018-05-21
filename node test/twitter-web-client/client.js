var qs = require('querystring')

function send(theName){
  require('http').request({
    host: '127.0.0.1',
    port: '3000',
    url: '/',
    method: 'POST'
  },(res) => {
    var body = ''
    res.setEncoding('utf8')
    // res.on('data', (chunk) => {
    //   body += chunk
    // })
  
    res.on('end', () => {
      console.log("\n We got: \033[96m Request complete  \033[39m\n")
      process.stdout.write('\n your name:')
    })
  }).end(qs.stringify({name: theName}))
}

process.stdout.write('\n your name: ')
process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', (name)=>{
  send(name.replace('\n', ''))
})
