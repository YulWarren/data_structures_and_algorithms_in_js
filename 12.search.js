// 在列表中查找数据有两种方式：顺序查找和二分查找
// 顺序查找适用于元素随机排列的列表；二分查找适用于元素已排序的列表

function seqSearch1(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}
function seqSearch2(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}
// 但这种函数的执行速度比内置的Array.indexOf()方法慢

// 查找最大值和最小值
// 算法描述：
/* 
1、将数组的第一个元素赋值给一个变量，把这个变量作为最小值
2、开始遍历数组，从第二个元素开始依次同当前最小值进行比较
3、如果当前元素数值小雨当前最小值，则将当前元素设为新的最小值。
4、移动到下一个元素，并且重复3
*/
function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// 使用自组织数据
// 就是把成功找到的元素置于数据集的起始位置，以保证在以后的操作中该元素能够被更快的找到

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function seqSearch3(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            if (i > 0) {
                swap(arr, i, i-1);
            }
            return true;
        }
    }
    return false;
}

// 如果仅当数据位于数据集的前20%元素之外时，才移动
function seqSearch4(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == data && i > (arr.length * 0.2)) {
            swap(arr, i, 0);
            return true;
        } else if (arr(i) == data) {
            return true;
        }
    }
    return false;
}


// 二分查找
// 算法描述：
/* 
1、将数组的第一个位置设置为下边界（0）；
2、将数组的最后一个元素所在的位置设置为上边界（数组长度-1）
3、若下边界等于或小于上边界，则：
    a、将中点设置为（上边界+下边界）／2
    b、如果中点的元素小于查询的值，则将下边界设置为中点元素所在下标+1；
    c、如果中点的元素大雨查询的值，则将上边界设置为中点元素所在下标-1；
    d、否则中点元素即为要查找的数据
*/

function binSearch(arr, data) {
    var upperBorder = arr.length - 1;
    var lowerBorder = 0;
    while(lowerBorder <= upperBorder) {
        var mid = Math.floor((lowerBorder + upperBorder) / 2);
        if (arr[mid] < data) {
            lowerBorder = mid + 1;
        } else if(arr[mid] > data) {
            upperBorder = min - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// 统计重复值
// 通过binSearch找到数据位置，然后从此位置分别向左和向右做循环，找到重复的值就count+1，没找到就退出循环
function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        count++;
        for (var i = position - 1; i > 0; i--){
            if (arr[i] == data) {
                count++;
            } else {
                break;
            }
        }
        for (var i = position + 1; i < arr.length; i++) {
            if (arr[i] == data) {
                count++;
            } else {
                break;
            }
        }
    } 
    return count;
}

// 使用二分查找一定要是有序的，如果是无序的，首先要通过之前的排序算法进行排序，排序后再进行查找。
