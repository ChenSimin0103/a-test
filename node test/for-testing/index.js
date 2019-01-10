const express = require('express');
//引入的是一个类
const Joi = require('joi')

const app = express();

// 添加中间件
app.use(express.json())

const me = [
  { id: 1, name: '111' },
  { id: 2, name: '222' },
  { id: 3, name: '333' },
];

function validateMyname(myName) {
  const schema = {
    name: Joi.string().min(3).require()
  }
}

app.get('/', (req, res) => {
  res.send('hello amiago');
});

app.get('/api/me', (req, res) => {
  res.send(me);
});

app.post('/api/me', (req,res)=>{
  const schema = {
    name: Joi.string().min(3).required()
  }

  const result = Joi.validate(req.body, schema)
  console.log(result)
  // const result


  // 验证输入：永远不要相信用户的输入
  if(result.error) return res.status(400).send(result.error)

  const temp = {
    id: me.length + 1,
    name: req.body.name
  }
  me.push(temp)
  res.send(temp)
})

app.get('/api/me/:id', (req, res) => {
  const myname = me.find(c => c.id === parseInt(req.params.id) );
  if(!myname) res.status(404).send('id not found')
  else res.send(myname)
});

app.put('/api/me/:id', (req,res)=>{
  // 404
  const myname = me.find(c => c.id === parseInt(req.params.id) );
  if(!myname) res.status(404).send('id not found')
  // 400
  const schema = {
    name: Joi.string().min(3).required()
  }
  const result = validateMyname(req.body)
  if(result.error){
    res.status(400).send(result.error.details[0].message)
    return;
  }
  myname.name = req.body.name
  res.send(myname)
})

app.delete('/api/me/:id', (req,res) => {
  // 先查找
  const myname = me.find(c => c.id === parseInt(req.params.id) );
  if(!myname) res.status(404).send('id not found')
  // console.log(myname)
  // 删除
  const index = me.indexOf(myname)
  me.splice(index, 1)

  res.send(myname)

})



// 使用环境变量
// const port = process.env.PORT || 3000;
const port = 8000;
app.listen(port);

console.log(`服务跑在${port}端口`);
