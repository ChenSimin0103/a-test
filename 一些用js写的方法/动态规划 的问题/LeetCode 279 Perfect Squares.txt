/**
 * @param {number} n
 * @return {number}
 */
 
 // 我想的是一种较直观的动态规划方法，即遇到平方数置为1，非平方数则遍历其所有组合找到最小值（因其组合的元素在之前都已算出并存了下来）
 // 但仍有一种更高级的动态规划方法，运行速度更快，也是嵌套两个for循环，难道是我用了Number和Math的方法影响了速度？？
 
var numSquares = function(n) {
    var record = [0]
    for(i=1;i<=n;i++){
        if(Number.isInteger(Math.sqrt(i))){
            record[i] = 1
        }
        else{
            record[i] = Infinity
            for(j=1;j<=Math.floor(i/2);j++){
                record[i] = Math.min(record[i],record[j]+record[i-j])
            }
        }
    }
    return record[n]
};

// 更快，但难懂的方法
const numSquares = n => {
    const mins = Array(n + 1).fill(Infinity);
    mins[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            mins[i] = Math.min(mins[i], mins[i - j * j] + 1);
        }
    }
    return mins[mins.length - 1];
};