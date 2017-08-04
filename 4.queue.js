// 队列是一种列表，只是只能在队尾插入元素，在队首删除元素
// 对队列的操作主要有入队push()和出队shift()，另一个读取队头的元素的操作是peek

// queue class
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

// enqueue
function enqueue(element) {
    this.dataStore.push(element);
}

// dequeue
function dequeue() {
    return this.dataStore.shift();
}

// read the head and the end of the queue
// front
function front() {
    return this.dataStore[0];
}

// back
function back() {
    return this.dataStore[this.dataStore.length - 1];
}

// display all element
// toString
function toString() {
    var retStr = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        retStr += this.dataStore[i] + '\n';
    }
    return retStr;
}

// is the queue empty?
// empty
function empty() {
    if (this.dataStore.length = 0) {
        return true;
    } else {
        return false;
    }
}
