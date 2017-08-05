/*
 * @Author: wangyuyang 
 * @Date: 2017-08-05 08:39:49 
 * @Last Modified by: wangyuyang
 * @Last Modified time: 2017-08-05 09:13:56
 */
// set是一种包含不同元素的数据结构，其中的元素称为成员。集合中的成员是无序的，集合中不允许相同成员存在。
// 并集、交集、补集

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union; // 并集
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function show() {
    return this.dataStore;
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; i++) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet
}

// intersect
function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function size() {
    return this.dataStore.length;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    } else {
        for (var member of this.dataStore) {
            if (!set.contains(member)) {
                return false;
            }
        }
    }
    return true;
}

function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet; // 包含属于第一个集合但不属于set集合的成员
}
