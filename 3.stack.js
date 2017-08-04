// 栈是一种后入先出的数据结构，对它的操作主要有两种：入栈push()和出栈pop()
// 预览栈用peek方法
// 清空栈用clear方法
// 栈的js实现
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop(element) {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}
function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

// use Stack to solve problem
// 数制间的转换
// 将数字n转换为以b（2-9）为基数的数字
// 1、最高位为n%b，将之入栈
// 2、用n/b代替n
// 3、重复1和2，直到n=0，且没有余数
// 4、持续将栈内元素弹出，直到栈为空，依次将元素排列

function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

var num1 = 32;
var base1 = 2;
var newNum1 = mulBase(num1, base1);
console.log(`${num1} converted to base ${base1} is ${newNum1}`);

var num2 = 125;
var base2 = 8;
var newNum2 = mulBase(num2, base2);
console.log(`${num2} converted to base ${base2} is ${newNum2}`);

// 判断给定字符是否是回文
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var newWord = '';
    while(s.length() > 0) {
        newWord += s.pop();
    }
    if (word == newWord) {
        return true
    } else {
        return false;
    }
}

var word = "hello";
if (isPalindrome(word)) {
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
}

// 递归
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// 模拟计算5！先将数字从5-1入栈，然后使用过一个循环，将数字挨个弹出连乘
// 使用栈模拟递归过程
function fact(n) {
    // 入栈
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    // 出栈
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}