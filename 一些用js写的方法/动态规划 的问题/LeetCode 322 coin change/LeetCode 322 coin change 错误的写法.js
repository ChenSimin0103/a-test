/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 // 这种思路看似正确且简单，其实错的离谱，浪费了1个小时时间，正确的思路还是动态规划
 
 
var coinChange = function(coins, amount) {
    var result = -1
    coins.sort((a,b) => {return a-b})
    console.log(coins)
    for(var i=0;i<coins.length;i++){
        var subcoins = coins.slice(0,i+1)
        var subnum = exactlyDivide(subcoins, amount)
        result = (subnum===-1 || result===-1)?Math.max(result, subnum):Math.min(result, subnum)
    }
    return result
};

// 判断某值是否可由一个数组从大向小依次取余整除、若能，则可被组成，并返回个数
var exactlyDivide = function(coins, amount) {
    var len = coins.length
    var num = 0
    for(var i=len-1;i>=0;i--){
        if(amount%coins[i] === 0)
            return amount/coins[i] + num
        else {
            num += Math.floor(amount/coins[i])
            amount = amount%coins[i]
        }
    }
    return -1
}