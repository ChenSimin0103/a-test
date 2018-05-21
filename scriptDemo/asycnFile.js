// 这个脚本的缺陷：
// 1. 不知道修改了哪个文件（不能知道文件内部的变化），而是两边只要有不同名字的文件，就各复制一份给对方
// 我希望监控到文件内容的变化，并替换内容发生变化的文件（单向修改）
var fsSync = require('fs-sync');
var fs = require('fs');
var util = require("util");
var later = require("later");

//需要同步的文件夹路径
var path = {
    "pathOne": "./store/store1/",
    "pathTwo": "./store/store2/"
};

//需要同步的文件夹名称
var asyncDir = ["img"];

var dirFilesOne;
var dirFilesTwo;

//读取文件夹信息
function readDir(dirName){
    dirFilesOne = fs.readdirSync(path.pathOne + dirName);
    dirFilesTwo = fs.readdirSync(path.pathTwo + dirName);
}

//使用fs-sync模块拷贝文件信息
function useFileCopy(sourcePath,distPath,copyFiles) {
    for(var index in copyFiles){
        fsSync.copy(sourcePath+copyFiles[index],distPath+copyFiles[index])
    }
}

//统计需要同步的文件信息
function needCopyFiles(sourceFiles, distFiles) {
    var needCopyFiles = [];
    for (var index in sourceFiles) {
      // 在此需要添加文件内容改变逻辑
        if (distFiles.indexOf(sourceFiles[index]) == -1) {
            needCopyFiles.push(sourceFiles[index]);
            console.log("needAsyncFile-->"+sourceFiles[index]);
        }

    }
    return needCopyFiles;
}

//同步文件
function copyFile(dirName) {
    var sourcePath = path.pathOne + dirName +"/";
    var distPath = path.pathTwo + dirName +"/";

    readDir(dirName)
    useFileCopy(sourcePath,distPath,needCopyFiles(dirFilesOne,dirFilesTwo));

    readDir(dirName);
    useFileCopy(distPath,sourcePath,needCopyFiles(dirFilesTwo,dirFilesOne));
}

//for (var index in asyncDir) {
//    //console.log(asyncDir[index])
//    console.log(new Date() +" 执行同步--->"+asyncDir[index])
//    copyFile(asyncDir[index]);
//}

var sched = later.parse.recur().every(10).second(),
    t = later.setInterval(function() {
        for (var index in asyncDir) {
            //console.log(asyncDir[index])
            console.log(new Date() +" 执行同步--->"+asyncDir[index]);
            copyFile(asyncDir[index]);
        }
    }, sched);