function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // use array to store the element of list
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

// find the element will return the index, or return -1
function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

// base on function find we will define the function remove
// use the index which find returned to cut the array
// then liseSize will minus 1, and return true if success
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

// length
function length() {
    return this.listSize;
}

// toString
function toString() {
    return this.dataStore;
}

// insert
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}

// clear
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos =0;
}

// contains
// check the element is in list or not
function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

// Traversal the list

function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        this.pos --;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        this.pos++;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function compare(a, b) {
    return a - b;
}

