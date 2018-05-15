// import { stat, read } from "fs";

// 定义全局变量
var fs = require("fs");
var stdin = process.stdin;
var stdout = process.stdout;
var state = [];

// 从当前目录process.cwd()下，查找所有的文件与文件夹，回调的参数为err或数组files
fs.readdir(process.cwd(), (err, files) => {
  console.log("");

  // 判断是否一个文件都没有，虽然这是不可能的
  if (!files.length) {
    return console.log("  \033[31m No files ! \033[39m \n  ");
  }

  console.log("  选择你想查看的目录：\n");

  // 入口，从这里开始
  file(0);

  // 读取一个文件的属性，存于全局变量state中，并递归调用得到所有的文件属性
  function file(i) {
    var filename = files[i];
    // fs.stat 方法获取文件属性（是个对象？）
    fs.stat(__dirname + "/" + filename, (err, stat) => {
      state[i] = stat;
      if (stat.isDirectory()) {
        console.log("    " + i + " \033[36m" + filename + "/\033[39m");
      } else {
        console.log("    " + i + " \033[90m" + filename + "/\033[39m");
      }

      if (++i == files.length) {
        read();
      } else {
        file(i);
      }
    });
  }

  // 读取文件属性后的下一步工作，选择一个文件读取内容
  function read() {
    console.log("");
    stdout.write("      \033[33m 输入你的选择 \033[39m \n  ");
    // 等待用户输入
    stdin.resume();
    stdin.setEncoding("utf8");
    // 监听stdin的data事件，并回调
    stdin.on("data", option);
  }

  // 由输入的data通过fs.readFile读取文件内容，data为files的下标时有效
  // 需要对文件夹进行处理，选择文件夹后显示其子文件名而不是内容
  function option(data) {
    var filename = files[Number(data)];
    // 如果输入data错误，换成红色再显示一次
    if (!files[Number(data)]) {
      stdout.write("      \033[31m 输入你的选择 \033[39m \n  ");
    } else {
      stdin.pause();

      if (state[Number(data)].isDirectory()) {
        fs.readdir(__dirname + "/" + filename, (err, files) => {
          console.log('')
          console.log('    ( ' + file.length + 'files)')
          files.forEach((file) => {
            console.log('    -   ' + file)
          })
          console.log('')
        })
      } else {
        fs.readFile(__dirname + "/" + filename, "utf8", (err, data) => {
          console.log("");
          console.log(" \033[90m" + data.replace(/(.*)/g, "  $1") + "/\033[39m");
        });
      }
    }
  }
});
