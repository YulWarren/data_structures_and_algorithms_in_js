# List

## 列表的抽象数据类型定义

属性／方法|含义
----|----
listSize|列表的元素个数
pos|列表的当前位置
length|返回列表中元素的个数
clear()|清空列表中的所有元素
toString()|返回列表的字符串形式
getElement()|返回当前位置的元素
insert()|在现有元素后插入新元素
append()|在列表的末尾添加新元素
remove()|从列表中删除元素
front()|将列表的当前位置移动到第一个元素
end()|将列表的当前位置移动到最后一个元素
prev()|将当前位置后移一位
next()|将当前位置前移一位
currPos()|返回列表的当前位置
moveTo()|将当前位置移动到指定位置

## 实现列表类

```js
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataScore = []; // use array to store the element of list
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
```

### append

```js
function append(element) {
    this.dataStore[this.listSize++] = element;
}
```