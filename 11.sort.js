// an array test bed
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.gaps = [5,3,1]; // shell-sort
    this.setGap = setGap; // shell-sort
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    this.shellSort = shellSort;
    this.mergeArray = mergeArray;
    this.mergeSort = mergeSort;
    for (var i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }
}
// only shell sort use this function
function setGap(arr) {
    this.gaps = arr;
}
function setData() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; i++) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var retstr = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        retstr += this.dataStore[i] + ' ';
        if (i > 0 && i % 10 ==0) {
            retstr += '\n';
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// basic sorting algorithms

// bubble sort--easy but slow
function bubbleSort() {
    for (var outer = this.dataStore.length; outer >= 2; outer--) {
        for (var inner = 0; inner <= outer - 1; inner++) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}



// 选择排序
// 从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。当进行到数组的倒数第二个位置时，所有的数据就完成了排序
// 外循环从数组的第一个元素移动到倒数第二个元素；内循环从第二个数组元素移动到最后一个元素，查找比当前外循环所指向的元素小的元素。每次内循环迭代后，数组中的最小值都会被赋值到合适的位置
function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; outer++) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; inner++){
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        swap(this.dataStore, outer, min); // 不要放错位置，中译本里有错误
    }
}

// 插入排序
// 原理是：外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，则数组元素会向右移动，为内循环的这个元素腾出位置

// function insertionSort() {
//     var temp; // 暂存选中的元素
//     for (var i = 1; i <= this.dataStore.length - 1; i++) { // 从数组第二位开始遍历，直到最后；第一个元素默认为已经排序
//         temp = this.dataStore[i]; // 把选中的元素放到temp中
        
//        for (var j = i; j > 0 && this.dataStore[j - 1] >= temp; j--) { //从已选中的元素开始，如果它不在第一位且它前面的元素比它大，则把它的位置让给它前面的元素
//             this.dataStore[j] = this.dataStore[j - 1]; 
            
//         }
//         this.dataStore[j] = temp; // 让之前暂存的元素重新占领位置（j--之后的位置）
//         console.log(this.toString())
//     }
// }

function insertionSort() {
    var temp;
    for (var i = 1; i <= this.dataStore.length - 1; i++) {
        temp = this.dataStore[i];
        // for (var j = i; j > 0 && this.dataStore[j - 1] >= temp; j--) {
        //     this.dataStore[j] = this.dataStore[j - 1];
        // }
        var j = i;
        while(j > 0 && (this.dataStore[j - 1] >= temp)){
            this.dataStore[j] = this.dataStore[j - 1];
            j--;
        }
        this.dataStore[j] = temp;
        // console.log(this.toString());
    }
}

var numElements = 10;
var mynums1 = new CArray(numElements);
mynums1.setData();
var start1 = new Date().getTime();
mynums1.bubbleSort();
var stop1 = new Date().getTime();
var elapsed1 = stop1 - start1;
console.log(`对${numElements} 个元素执行冒泡排序消耗的时间为： ${elapsed1}毫秒`)
var mynums2 = new CArray(numElements);
mynums2.setData();
var start2 = new Date().getTime();
mynums2.selectionSort();
var stop2 = new Date().getTime();
var elapsed2 = stop2 - start2;
console.log(`对${numElements} 个元素执行选择排序消耗的时间为： ${elapsed2} 毫秒`)
var mynums3 = new CArray(numElements);
mynums3.setData();
var start3 = new Date().getTime();
mynums3.insertionSort();
var stop3 = new Date().getTime();
var elapsed3 = stop3 - start3;
console.log(`对${numElements} 个元素执行插入排序消耗的时间为： ${elapsed3} 毫秒`)

// 从三种冒泡排序耗时截图中可以看出插入排序最快，冒泡排序最慢
// 图见timeConsuming.png

// high-level sorting
// inculding Shell sorting, merge sorting, quick sorting
// 希尔排序在插入排序的基础上做了改进。会首先比较距离较远的元素，而非相邻元素。可以使离正确位置很远的元素更快地回到合适的位置。
// 当开始用这个算法遍历数据集时，所有元素直接的距离会不断减小，直到处理到数据集的末尾，这时算法比较的就是相邻元素了。
// 希尔排序的工作原理是：通过定义一个间隔序列来表示在排序过程中进行比较的元素之间有多远的间隔。可以动态定义此间隔。
function shellSort() {
    for (var g = 0; g < this.gaps.length; g++){ // 对间隔序列遍历
        for (var i = this.gaps[g]; i < this.dataStore.length; i++) { // 对待排序数组进行遍历，从第g个元素开始
            var temp = this.dataStore[i]; // 暂存数据
            for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) { // 对已排序数组进行遍历，判断与已选待排元素谁大，每次将j减小g个
                this.dataStore[j] = this.dataStore[j - this.gaps[g]]; //如果已排序大于待排序，则已排序占据待排序位置
            }
            this.dataStore[j] = temp; // 将暂存数据（原待排序数据）存入已排序数据空出来的位置
        }
    }
}
// 动态计算间隔序列的希尔排序
function shellSortDyn() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
                swap(this.dataStore, j, j - h);
            }
        }
        h = (h - 1) / 3;
    }
}

var nums = new CArray(10);
nums.setData();
console.log('before shell sort: \n');
var start = new Date().getTime();
console.log(nums.toString());
console.log('\n on shell sorting: \n');
nums.shellSort();
var stop = new Date().getTime();
console.log('\n after shell sorting:\n');
console.log(nums.toString())
console.log(`time consume: ${stop-start}`)



// merge sort
// 原理：把一系列排好序的子序列合并成一个大的完整有序序列
// 需要两个排好序的子数组，通过比较数据大小，先从最小的数据开始插入，最后合并得到第三个数组
// 1、自顶向下的归并排序，需要递归，但对js来说这种算法的递归深度太深
// 2、自底向上的归并排序
// 首先将数据集分解为一组只有一个元素的数组，然后通过创建一组左右子数组将它们慢慢合并起来，每次合并都保存一部分排好序的数据，直到最后剩下的这个数组所有的数据都已排序。
// 原理懂了，但是为什么这样写？？？？？？
function mergeSort() {
    // 如果数据少于2个，没有排序的必要
    if (this.dataStore.length < 2) {
        return;
    }
    // step控制left和right子序列的大小
    var step = 1;
    var left, right;
    // 只要子序列小于数组长度，就一直循环
    while (step < this.dataStore.length) {
        // 左序列初始化为0，右序列初始化为子序列大小
        left = 0;
        right = step;
        
        while(right + step <= this.dataStore.length) {
            mergeArray(this.dataStore, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < this.dataStore.length) {
            mergeArray(this.dataStore, left, left + step, right, this.dataStore.length);
        }
        step *= 2;
        console.log(this.toString())
    }
}
// 合并数组
function mergeArray(arr, startLeft,stopLeft,startRight,stopRight) {
    //创建左右数组
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    // 将传入的arr数据传入刚创建的数组
    var k = startRight;
    for (var i = 0; i < (rightArr.length - 1); i++) {
        rightArr[i] = arr[k];
        k++
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length - 1); i++) {
        leftArr[i] = arr[k];
        k++;
    }
    // 设置最后一个数据为哨兵值
    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;
    // 如果左数组的值大于右数组的值，就将左数组的值放到传入的arr中
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; k++) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
}

var nums2 = new CArray(10);
nums2.setData();
console.log('before merge:\n')
console.log(nums2.toString());
nums2.mergeSort();
console.log('\nafter merge\n')
console.log(nums2.toString())


// quick sort
// 快速排序的算法：
/* 
1、选择一个基准元素，将列表分隔成两个子序列
2、对列表重新排序，将所有小于基准值的元素放在基准值前面，所有大于基准值的元素放在基准值的后面
3、分别对较小元素的子序列和较大元素的子序列重复1和2
*/

function quickSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

var a = [];
for (var i =0; i<10;i++) {
    a[i] = Math.floor((Math.random()*100)+1);
}

console.log('before:\n')
console.log(a.toString());
quickSort(a);
console.log('\nafter\n')
console.log(quickSort(a).toString())