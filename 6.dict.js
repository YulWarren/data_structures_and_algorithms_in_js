// Dictionary class
function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.showInList = showInList;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.dataStore[key] = value;
}
function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    for (var key of Object.keys(this.dataStore)) {
        console.log(key + ' -> ' + this.dataStore[key]);
    }
}

var p = new Dictionary();
p.add("a", "123");
p.add('b', '456');
p.add('c', '789');
console.log(`find b: ${p.find("b")}`);
// p.remove('c');
p.showAll();

// some assist function

// count the number of the dict
function count() {
    var n = 0;
    for (var key of Object.keys(this.dataStore)) {
        n++;
    }
    return n;
}

// clear all key-value
function clear() {
    for (var key of Object.keys(this.dataStore)){
        delete this.dataStore[key];
    }
}

// list the dict
function showInList() {
    for (var key of Object.keys(this.dataStore).sort()) {
        console.log(`${key} -> ${this.dataStore[key]}`);
    }
}

var p = new Dictionary();
p.add("c", "123");
p.add('b', '456');
p.add('a', '789');
p.add("e", "111")
console.log(`find b: ${p.find("b")}`);
// p.remove('c');
p.showAll();
p.showInList();
console.log(p.count())