/*
 * @Author: wangyuyang 
 * @Date: 2017-08-05 11:14:32 
 * @Last Modified by: wangyuyang
 * @Last Modified time: 2017-08-05 16:00:02
 */
function Graph(v) {
    this.vertices = v; // 顶点数
    this.vertexlist = [];
    this.edges = 0; // 边数
    this.adj = []; // 存储相邻顶点
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = []; // 已访问标记,初始全为false
    for (var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }
    this.edgeTo = []; // 最短路径需要用此数组保存从一个顶点到下一个顶点的所有边
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.topSort = topSort;
    this.topSortHelper = topSortHelper;
}

// 调用并传入顶点a和b，函数会先查找a的邻接表，将顶点b添加到列表中，再查找b的邻接表，将顶点a添加到列表中；将边数增加1
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    var visisted = [];
    for (var i = 0; i < this.vertices; i++) {
        var cli = `${i} -> `;
        visisted.push(this.vertexlist[i]);
        for (var j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] != undefined) {
                if (visisted.indexOf(this.vertexlist[j]) < 0) {
                    console.log(`${cli} ${this.adj[i][j] }`);
                }
            }
        }
        visisted.pop();
    }
}

// search in graph
// depth first and breadth first深度优先和广度优先

 /*
 深度优先搜索包括从一条路径的起始顶点开始时追溯，直到到达最后一个顶点，然后回溯，继续追溯下一条路径，直到到达最后的顶点，如此往复，直到没有路径为止。
 不是在搜索特定的路径，而是通过搜索来查看在途中有哪些路径可以选择

算法描述：访问一个没有访问过的顶点，将它标记为已访问，再递归地去访问在初始顶点的邻接表中其他没有访问过的顶点
*/

// depth
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log(`visited vertex: ${v}`)
    }
    for (var w in this.adj[v]) {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}


// 广度优先搜索：从第一个顶点开始，尝试访问尽可能靠近它的顶点，本质上在图上是逐层移动的，首先检查最靠近第一个顶点的层，再逐渐向下移动到离起始顶点最远的层
// 使用抽象的队列，而不是数组来对已访问过的顶点进行排序
/* 
工作原理：
1、查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中
2、从图中取出下一个顶点v，添加到已访问的顶点列表
3、将所有与v相邻的未访问顶点添加到队列
*/

function bfs(s) {
    var queue = []; // 已访问列表
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (v == undefined) {
            console.log('visisted vertex' + v);
        }
        for(var w in this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

// 最短路径
// 用bfs
// 展示图中连接到不同顶点的路径
function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(s);
    return path;
}
function hasPathTo(v) {
    return this.marked[v];
}

// 拓扑排序算法
// 拓扑排序会对有向图的所有顶点进行排序，使有向边从前面的顶点指向后面的顶点
// 拓扑排序算法不会立即输出已访问的顶点，而是访问当前顶点邻接表中的所有相邻顶点，直到这个列表穷尽时，才将当前顶点压入栈中。
// 两个函数：topSort设置排序进程并调用一个辅助函数topSortHelper，然后显示排序好的顶点列表
// topSortHelper会将当前顶点标记为已访问，然后递归访问当前顶点邻接表中的每个相邻顶点，标记这些顶点为已访问，最后将当前顶点压入栈。
function topSort() {
    var stack = [];
    var visisted = [];
    for (var i = 0; i < this.vertices; i++) {
        visisted[i] = false;
    }
    for (var i = 0; i < this.vertices; i++) {
        if (visisted[i] == false) {
            this.topSortHelper(i, visisted, stack);
        }
    }
    for (var i = 0; i < stack.length; i++) {
        if (stack[i] != undefined && stack[i] != false) {
            console.log(this.vertexlist[stack[i]]);
        }
    }
}
function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for (var w in this.adj[v]) {
        if (!visited[w]) {
            this.topSortHelper(visited[w], visited, stack);
        }
    }
    stack.push(v);
}