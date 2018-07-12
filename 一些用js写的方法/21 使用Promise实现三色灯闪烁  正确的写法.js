// ¡¡µ∆∫Ø ˝
function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}

function red() {
  console.log("red");
}
// øÿ÷∆√ø’µµ∆…¡À∏
function flash(cb, time){
	return new Promise(function executor(resolve,reject) {
		setTimeout(() => {
			cb(),resolve()
		},time)
	})
}
// øÿ÷∆…¡À∏À≥–Ú
function control() {
	Promise.resolve()
	.then(function() {
		return flash(red, 3000)
	})
	.then(function() {
		return flash(green, 1000)	
	})
	.then(function() {
		return flash(yellow, 2000)
	})
	.then(function() {
		control()
	})
}
control()