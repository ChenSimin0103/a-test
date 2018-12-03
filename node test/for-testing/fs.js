const fs = require('fs');

const msg = 'helo'

fs.mkdir('stuff',()=>{
  fs.readFile('me.txt', 'utf-8', (err, data)=>{
    fs.writeFile('./stuff/me.txt', msg)
  })
});
