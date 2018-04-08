/**
 * @param {number[]} prices
 * @return {number}
 */
 
 // 这题很简单，初始问题是2个元素，前一个为buy，后一个为sell，从第三个元素之后，判断该值是否小于buy，若小可存temp，
 // 只要之后有元素使得prices[i]-temp取得一个更大的profit时，用buy=temp,sell=prices[i]，直至循环结束
 // 注意：循环是从第二个元素开始，因为此元素也可作为buy来使用
 
var maxProfit = function(prices) {
    var buy = prices[0], sell = prices[1];
    var profit = (sell>buy)?sell-buy:0;
    var temp = prices[0];
    for(i=1;i<prices.length;i++) {
        if(prices[i]<temp)
            temp = prices[i]
        if((prices[i]-temp)>profit){
            buy = temp;
            sell = prices[i];
        }
        profit = (sell>buy)?sell-buy:0;
    }
    return profit;
};