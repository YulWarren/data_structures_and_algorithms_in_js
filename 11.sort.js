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
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    for (var i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.numElements; i++) {
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
        console.log(this.toString());
    }
}

// 插入排序
// 原理是：外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，则数组元素会向右移动，为内循环的这个元素腾出位置

function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; outer++) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && this.dataStore[inner - 1] >= temp) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            inner--
        }
        this.dataStore[inner] = temp;
    }
}

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.selectionSort();
console.log(mynums.toString());