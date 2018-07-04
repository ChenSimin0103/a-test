// 要求：给出两个英文单词，一次只能对一个字母进行增删改操作，问从第一个单词变换到第二个单词的最少步数；
// 例如 word1: 'horse',word2: 'ros'; 变化过程为： horse --> orse --> rse --> roe --> ros 共4步；

// 思路：动态规划的典型实现，核心逻辑是：认为dp(i,j)是word1(前i个字母)转换为word2(前j个字母)所需要的最小值，则有以下情况：
// 1. 若word1(i) 与 word2(j) 完全相同，则 dp(i, j) = dp(i-1, j-1)
// 2. 最后对word1(i)和word2(j)进行替换操作，则 dp(i, j) = dp(i-1, j-1) + 1
// 3. 最后对word1(i)进行删除操作，则 dp(i, j) = dp(i-1, j) + 1
// 4. 最后对word2(j)进行增加操作，则 dp(i, j) = dp(i, j-1) + 1
// dp(i,j)取值为其中最小的那个


var minDistance = function(word1, word2) {
    var len1 = word2.length;
    var len2 = word1.length;
    var dp = [];
    for(var i = 0; i <= len1; i++){
        dp[i] = [];
        for(var j =0; j <= len2; j++){
            dp[i][j] = 0;
            dp[i][0] = i;
            dp[0][j] = j;
        }
    };
    for(var i=1; i<=len1; i++){
        for(var j=1; j<=len2; j++){
            var ch1 = word1.charAt(i-1);
            var ch2 = word2.charAt(j-1);
            if(ch1 == ch2){
                dp[i][j] = dp[i-1][j-1];
            } else {
                var rep = dp[i-1][j-1] + 1;
                var add = dp[i][j-1] + 1;
                var del = dp[i-1][j] + 1;
                dp[i][j] = Math.min(rep, add, del);
            }
        }
    }
    return dp[len1][len2]
};