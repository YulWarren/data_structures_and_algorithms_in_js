// two classes. one is Node, one is LinkedList
// Node class
// element save the data on node
// next save the link which points to the next node
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null; // 双向链表
}

// LinkedList class
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
    this.show = show;
}

// insert new node
// insert new element after one node
// we need a method called find to help us find the node
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    newNode.previous = currNode; // 双向链表
    currNode.next = newNode;
}

// display the element of linkedlist
function display() {
    var currNode = this.head;
    while(!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
function show(item) {
    var currNode = this.head;
    while (!(currNode == null)) {
        if (currNode.element == item) {
            console.log(`find it and show:${currNode.element}`);
        }
        currNode = currNode.next;
    }
}

// test
var cities = new LList();
cities.insert("c","head");
cities.insert("d","c");
cities.insert("f","d");
cities.display();
cities.show("d")



// remove element for llist
// we need findPrevious() to help us find the prev node of the delete node
// if we find it, we can change its next
function findPrevious(item) {
    var currNode = this.head;
    while(!(currNode.next == null) &&(currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

// function remove(item) {
//     var prevNode = this.findPrevious(item);
//     if (!(prevNode.next == null)) {
//         prevNode.next = prevNode.next.next;
//     }
// }
function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
// find the last element of llist
function findLast() {
    var currNode = this.head;
    while(!(currNode.next ==null)) {
        currNode = currNode.next;
    }
    return currNode;
}

// display reverse
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while(!(currNode.previous == null)) {
        console.log(currNode.previous);
        currNode = currNode.previous;
    }
}

// 简单链表、双向链表、循环链表
// 创建循环链表：LList的this.head.next = this.head，但是其他方法也要进行修改
