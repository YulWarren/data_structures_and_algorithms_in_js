/*
 * @Author: wangyuyang 
 * @Date: 2017-08-05 09:31:06 
 * @Last Modified by: wangyuyang
 * @Last Modified time: 2017-08-05 10:30:54
 */
// 二叉树每个节点的子节点不超过两个。一个父节点的两个子节点分别称为左节点和右节点
// 二叉查找树由节点组成
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data;
}

// BST类只包含一个数据成员：一个表示二叉查找树根节点的Node对象，将根节点初始化为null
// 查找正确插入点的算法：
/* 
1、设根节点为当前节点
2、如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点，反之，执行第4步
3、如果当前节点的左节点为null，就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环
4、设新的当前节点为原节点的右节点
5、如果当前节点的右节点为null， 就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环
*/

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// 中序遍历
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}

// 先序遍历
function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}
// 后序遍历
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}

// 在二叉查找树上进行查找
/* 
1、查找给定值
2、查找最小值
3、查找最大值
*/
function getMin() {
    var current = this.root;
    while(!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}

function find(data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}

// 删除节点
function remove(data) {
    root = removeNode(this.root, data);
}
function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        if (node.left == null && node.right == null) {
            return null;
        }
        if (node.left == null) {
            return node.right;
        }
        if (node.right == null) {
            return node.left;
        }
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

var nums = new BST(); 
nums.insert(23); 
nums.insert(45); 
nums.insert(16); 
nums.insert(37); 
nums.insert(3); 
nums.insert(99); 
nums.insert(22);
console.log('inorder traversal: ')
inOrder(nums.root);

console.log('\nprevious traversal: ')
preOrder(nums.root);

console.log('\npost traversal: ')
postOrder(nums.root);

var min = nums.getMin();
console.log(`min: ${min}`);
var max = nums.getMax();
console.log(`max: ${max}`);

var found = nums.find(22);
if (found != null) {
    console.log('fonnd it')
} else {
    console.log('not found');
}