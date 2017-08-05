/*
 * @Author: wangyuyang 
 * @Date: 2017-08-05 11:14:32 
 * @Last Modified by: wangyuyang
 * @Last Modified time: 2017-08-05 11:26:22
 */
function Graph(v) {
    this.vertices = v; // 顶点数
    this.edges = 0; // 边数
    this.adj = []; // 存储相邻顶点
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
}

// 调用并传入顶点a和b，函数会先查找a的邻接表，将顶点b添加到列表中，再查找b的邻接表，将顶点a添加到列表中；将边数增加1
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        console.log(`${i} -> `);
        for (var j = 0; j < this.vertices; j++) {
            console.log(`${this.adj[i][j] }`);
        }
    }
}

// search in graph
// depth first and scope first深度优先和广度优先