var fs = require("fs");
var stream = fs.createReadStream("hahaha.txt");

var files = fs.readdirSync(process.cwd());
files.forEach(file => {
  if (/\.txt/.test(file)) {
    fs.watchFile(process.cwd() + "/" + file, () => {
      console.log("-" + file + "changed!");
    });
  }
});