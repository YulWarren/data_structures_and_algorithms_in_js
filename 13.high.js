// 普通斐波那契函数
function recurFib(n) {
    if (n < 2){
        return n;
    } else {
        return recurFib(n - 1) + recurFib(n - 2);
    }
}

// 动态规划
// 上面那个函数的执行效率太低，是因为很多值被重新计算了
// 使用动态规划设计的算法从它能解决的最简单的子问题开始，继而通过得到的解，去解决其他更复杂的子问题，直到整个问题都被解决。
function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; i++) {
        val[i] = 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; i++) {
            val[i] = val[i - 1] + val[i - 2];
        }
        return val[n - 1];
    }
}

function iterFib(n) {
    var last = 1; //存放前第一个值
    var nextLast = 1; // 存放前第二个值
    var result = 1; // 存放前两个值的和
    for (var i = 2; i < n; i++) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}

console.log(iterFib(0));
// test
// var start1 = new Date().getTime();
// console.log(recurFib(5));
// var stop1 = new Date().getTime();
// console.log(`递归耗时： ${stop1 - start1} 毫秒`);
// var start2 = new Date().getTime();
// console.log(dynFib(40));
// var stop2 = new Date().getTime();
// console.log(`动态规划耗时： ${stop2 - start2} 毫秒`);

// 寻找最长公共子串
/* 
使用一个二维数组存储两个字符串相同位置的字符比较结果。
初始化时，该数组的每个元素被设置为0
每次在这个数组的相同位置发现了匹配，就将数组对应行和列的元素+1，否则保持为0
一个变量会持续记录下找到了多少个匹配项，当算法执行完毕时，这个变量会结合一个索引变量来获得最长公共子串
*/

function lcs(word1, word2) {
    var max = 0;
    var index = 0;
    // 声明一个二维数组
    var lcsarr = new Array(word1.length + 1);
    for (var i = 0; i <= word1.length + 1; i++) {
        lcsarr[i] = new Array(word2.length + 1);
        for (var j = 0; j <= word2.length + 1; j++) {
            lcsarr[i][j] = 0;
        }
    }
    // 二维数组声明结束
    // 构建用于保存字符匹配记录的表
    /* 
    数组的第一个元素总是被设置为0
    如果两个元素匹配，则当前数组元素的值被设置为前一次循环中数组元素保存的值+1
    */
    for (var i = 0; i <= word1.length; i++) {
        for (var j = 0; j <= word2.length; j++) {
            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                } else {
                    lcsarr[i][j] = 0;
                }
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    // 确认从哪里开始构建最长公共子串，以index-max的差值作为起点，以max作为终点
    var str = '';
    if (max == 0) {
        return '';
    } else {
        for (var i = index - max; i <= max; i++) {
            str += word2[i];
        }
        return str;
    }
}

function lcs1(word1, word2) {
    var max = 0;
    var index = 0;
    var lcsarr = new Array(word1.length + 1);
    for (var i = 0; i<= word1.length + 1; i++){
        lcsarr[i] = new Array(word2.length + 1);
        for (j = 0; j <= word2.length + 1; j++) {
            lcsarr[i][j] = 0;
        }
    }
    for (var i = 0; i <= word1.length; i++) {
        for (var j = 0; j <= word2.length; j++) {
            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                } else {
                    lcsarr[i][j] = 0;
                }
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        } 
    }
    var str = '';
    if (max == 0) {
        return '';
    } else {
        for (var i = index - max; i <= max; i++) {
            str += word2[i];
        }
        return str;
    }
}

console.log(lcs1('abbss','dbbss'));

// 贪心算法
// 总是会选择当下的最优解，而不去考虑这一次的选择会不会对未来的选择造成影响。

// 例子：找零问题
function makeChange(origAmt, coins) {
    var remainAmt = 0;
    if (origAmt % 0.25 < origAmt) {
        coins[3] = parseInt(origAmt / 0.25);
        remainAmt = origAmt % 0.25;
        origAmt = remainAmt;
    }
    if (origAmt % 0.1 < origAmt) {
        coins[2] = parseInt(origAmt / 0.1);
        remainAmt = origAmt % 0.1;
        origAmt = remainAmt;
    }
    if (origAmt % 0.05 < origAmt) {
        coins[1] = parseInt(origAmt / 0.05);
        remainAmt = origAmt % 0.05;
        origAmt = remainAmt;
    }
    coins[0] = parseInt(origAmt / 0.01)
}

function showCoins(coins) {
    if (coins[3] > 0) {
        console.log(`25美分的数量：${coins[3]} - ${coins[3] * 0.25}`);
    }
    if (coins[2] > 0) {
        console.log(`10美分的数量：${coins[2]} - ${coins[2] * 0.1}`);
    }
    if (coins[1] > 0) {
        console.log(`5美分的数量：${coins[1]} - ${coins[1] * 0.5}`);
    }
    if (coins[0] > 0) {
        console.log(`1美分的数量：${coins[0]} - ${coins[0] * 0.01}`);
    }
}

var origAmt = 0.63;
var coins = [];
makeChange(origAmt, coins);
showCoins(coins);

// 背包问题
/* 
1、背包的容量为W，物品的价格为v，重量为w
2、根据v/w的比率对物品排序
3、按比率的降序方式来考虑物品
4、尽可能多地放入每个物品
*/

function bag(values, weights, capacity) {
    // capacity即背包共能装多少，是相对于weights来说的
    var loaded = 0; 
    var i = 0;
    var allValue = 0;
    while(loaded < capacity && i < 4) {
        // 如果第i件的重量小于等于能装-已装，即还能装
        if (weights[i] < (capacity - loaded)) {
            allValue += values[i];
            loaded += weights[i];
        } else {
            r = (capacity - loaded) / weights[i];
            allValue += r * values[i];
            loaded += weights[i];
        }
        i++;
    }
    return allValue;
}

var items = ["A", "B", "C","D"];
var values = [50,140,60,60];
var weights = [5,20,10,12];
var capacity = 30;
console.log(bag(values, weights, capacity));