/*
 * @Author: wangyuyang 
 * @Date: 2017-08-04 16:38:55 
 * @Last Modified by: wangyuyang
 * @Last Modified time: 2017-08-04 17:32:32
 */
/*
所有元素根据和该元素对应的键，保存在数组的特定位置。即通过一种函数，将元素（键）映射为一个数字，可通过数字直接提取元素
使用散列表存储数据时，通过一个散列函数将键映射为一个数字，这个数字的范围是0到散列表的长度。
理想情况下，散列函数会将每个键值映射为一个唯一的数组索引，但数组的长度是有限的
即使使用一个高效的散列函数，仍然存在将两个键映射成同一个值的可能，这种现象称为“碰撞”
散列函数的选择依赖于键值的数据类型。若键是整型，最简单的散列函数就是以数组的长度对键取余。若数组的长度是10，而键值都是10的倍数时，就不推荐了。这也是数组的长度要设置为质数的原因之一。
若键时随机的整数，则散列函数应该更均匀地分布这些键。这种散列方式称为   除留余数法。

*/

// HashTable类
function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
}

// simpleHash 
// 字符串中每个字符的ASCII码值的和除以数组长度的余数
function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}
// put()
function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}
// show Distro; show data in hashtable
function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] != undefined) {
            console.log(`${i} : ${this.table[i]}`);
        }
    }
}

function betterHash(string) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}

// test
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
}
hTable.showDistro();

// 生成随机分数
function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
// 生成学生数据
// 生成arr个学生的数据，内层循环生成学生8位ID，外层循环把ID和分数连接在一起，并把每一个学生的ID分数放到arr数组中
function genStuData(arr) {
    for (var i  = 0; i < arr.length; i++) {
        var num = '';
        for (var j = 1; j <= 9; j++){
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

var numStudents = 10;
var students = new Array(numStudents);
genStuData(students);
console.log('generate students data \n')
for (var i = 0; i < students.length; i++) {
    console.log(`student id: ${students[i].substring(0,8)} student score: ${students[i].substring(9)}`);
}
console.log('data distribution\n')
var stable = new HashTable();
for (var i = 0; i < students.length; i++) {
    stable.put(students[i]);
}
stable.showDistro();