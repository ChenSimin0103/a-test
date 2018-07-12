/**
 * @param {number[]} prices
 * @return {number}
 */

 // 思路：简单的动态规划，将每一步都拆分（而不是最初想的把上涨段和下跌段拆分），每段都进行一次计算。每一步的买入价格都是上一步的价格，卖出价格是本步的价格 ，若该段获利则算入，不获利则不算入。
 
var maxProfit = function(prices) {
    var profit = 0;
    var last = prices[0];
    var buy = 0, sell = 0;
    for(i=1;i<prices.length;i++){
        if(prices[i]>last){
            buy = last;
            sell = prices[i];
            profit += sell-buy;
        }
        last = prices[i];
    }
    return profit;
};