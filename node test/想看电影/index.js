const util = require('util');
const fetch = util.promisify(require('./fetch.js'));
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const config = require('./config.json');

(function(){
  Promise.all(fetchHandle())
    .then(d => parseHTML(d))
    .then(d => saveToFile(d));
})()

function fetchHandle(){
  let promiseList = [];
  for(let i=0;i<=config.pageMaxNum;i++){
    promiseList.push(fetch(getSourceURL(i)));
  }
  return promiseList;
}

// 获取每一页的url地址 爱奇艺上一共有30页
function getSourceURL(index){
  return `http://list.iqiyi.com/www/1/-------------11-${index}-1-iqiyi--.html`
}

// 解析fetch到的html数据，原始数据为字符串
function parseHTML(html){
  // jsdom 把字符串转化为dom
  const dom = new JSDOM(html);
  let alist = dom.window.document.querySelectorAll('div.site-piclist_pic > a');
  alist = Array.from(alist);
  return alist.map((a)=>{
    return {
      source: a.herf,
      title: a.title,
      url: `${config.parseURL}${a.href}`
    }
  });
}

function saveToFile(data){
  let str = JSON.stringify(data);
  fs.writeFile('./data.json', str, {flag: 'w+'}, (err)=>{
    if(err) console.log(err)
  })
}