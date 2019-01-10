// 创建一个秒表类。具有 开始，停止，清空计时动作(带错误处理和提示信息)，查看计时时长，时间单位ms
function Stopwatch() {
  // 闭包的方式保存时间，否则所有实例公用一个定时时间
  let defaultTime = 0;
  // 运行标志：0是停止，1是运行中
  let timeFlag = 0;
  let timeStart, timeEnd;
  // 开始方法
  this.start = function() {
    if (timeFlag === 1) {
      throw new Error('已经启动了秒表');
    }
    timeStart = Date.now();
    timeFlag = 1;
    console.log('秒表启动');
  };
  // 停止方法
  this.stop = function() {
    if (timeFlag === 0) {
      throw new Error('已经停止了秒表');
    }
    timeEnd = Date.now();
    timeFlag = 0;
    defaultTime = (timeEnd - timeStart) / 1000;
    console.log('秒表停止');
  };
  // 清零操作
  this.clear = function() {
    defaultTime = 0;
    console.log('时间已清除');
  };
  Object.defineProperty(this, 'duration', {
    get: function() {
      return defaultTime;
    },
  });
}

const myWatch = new Stopwatch();
const myWatch2 = new Stopwatch();
