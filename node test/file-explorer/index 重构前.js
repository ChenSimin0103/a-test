var fs = require("fs");
var stdin  = process.stdin;
var stdout = process.stdout;

fs.readdir(process.cwd(), (err, files) => {
  console.log("");

  if (!files.length) {
    return console.log("  \033[31m No files ! \033[39m \n  ");
  }

  console.log("  选择你想查看的目录：\n");

  function file(i) {
    var filename = files[i];
    fs.stat(__dirname + "/" + filename, (err, stat) => {
      if (stat.isDirectory()) {
        console.log("    " + i + " \033[36m" + filename + "/\033[39m");
      } else {
        console.log("    " + i + " \033[90m" + filename + "/\033[39m");
      }

      i++;
      if (i == files.length) {
        console.log("");
        process.stdout.write("      \033[33m 输入你的选择 \033[39m \n  ");
        process.stdin.resume();
        process.stdin.setEncoding("utf8");
      } else {
        file(i);
      }
    });
  }

  file(0);
});
