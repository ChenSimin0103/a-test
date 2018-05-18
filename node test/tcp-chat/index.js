// 模块依赖
var net = require("net");
// 追踪连接数计数器
var count = 0;
// 记录连接的用户名
var users = {};
var nickname

var server = net.createServer(conn => {
  conn.setEncoding('utf8');
  
  conn.write(
      "\n > welcome to \033[92m node-chat \033[39m" +
      "\n > " + count +"other people are connected at this time" +
      "\n > please enter your name and press enter: "
  );
  count++;



  conn.on('data', (data) => {
    data = data.replace('\r\n','')
    console.log(data)
    if(!nickname) {
      if(users[data]){
        conn.write("\033[93m nickname had been used! \033[39m")
        return
      }else {
        var nickname = data;
        users[nickname] = conn;
        for(var i in users){
          users[i].write("\033[90m >" + nickname + "joined the room\033[39m\n")
        }
      }
    }else {
      for(var i in users){
        if(i != nickname){
          users[i].write("\033[96m >" + nickname + "\033[39m" + data + "\n")
        }
      }
    }
  });
  conn.on('close',() => {
    count--
    delete users[nickname]
  });

  function broadcast (msg, exceptMyself){
    for(var i in users){
      if(!exceptMyself || i != nickname) {
        users[i].write(msg)
      }
    }
  }



});

server.listen(3000, () => {
  console.log("\033[96m   server listening on *:3000  \033[039m");
});

