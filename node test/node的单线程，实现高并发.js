var time = Date.now()
setTimeout(() => {
  console.log(Date.now() - time);
  for (var i = 0; i < 1000000000; i++) { }
}, 1000)
setTimeout(() => {
  console.log(Date.now() - time)
}, 2000);