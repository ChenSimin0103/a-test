function state0() {
	return new Promise(function(resolve,reject) {
		console.log("ºìµÆÃğ " + "»ÆµÆÃğ " + "ÂÌµÆÉÁ")
		setTimeout(state1, 1000)
	})
}
function state1() {
	return new Promise(function(resolve,reject) {
		console.log("ºìµÆÃğ " + "»ÆµÆÉÁ " + "ÂÌµÆÉÁ")
		setTimeout(state2, 1000)
	})
}
function state2() {
	return new Promise(function(resolve,reject) {
		console.log("ºìµÆÉÁ " + "»ÆµÆÃğ " + "ÂÌµÆÉÁ")
		setTimeout(state3, 1000)
	})
}
function state3() {
	return new Promise(function(resolve,reject) {
		console.log("ºìµÆÃğ " + "»ÆµÆÉÁ " + "ÂÌµÆÉÁ")
		setTimeout(state4, 1000)
	})
}
function state4() {
	return new Promise(function(resolve,reject) {
		console.log("ºìµÆÃğ " + "»ÆµÆÃğ " + "ÂÌµÆÉÁ")
		setTimeout(state5, 1000)
	})
}
function state5() {
	return new Promise(function(resolve,reject) {
		console.log("ºìµÆÉÁ " + "»ÆµÆÉÁ " + "ÂÌµÆÉÁ")
		setTimeout(state0, 1000)
	})
}
var start = new Promise(function(resolve,reject){
	resolve()
})
start.then(state0)