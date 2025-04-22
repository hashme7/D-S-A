  



/*********************************************************************************
*                                                                                 *
*                    Graph simple operation insert,display vertices               *
*                                                                                 *
**********************************************************************************/

// class Graph{
//     constructor(){
//         this.graph = new Map();
//     }
//     insertvertex(vertex,edge,isBirectional){
//         if(!this.graph.has(vertex)){
//             this.graph.set(vertex,[]);
//         }
//         if(!this.graph.has(edge)){
//             this.graph.set(edge,[]);
//         }
//         this.graph.get(vertex).push(edge);
//         if(isBirectional){
//             this.graph.get(edge).push(vertex);
//         }
//     }
//     display() {
//         for (let [key, values] of this.graph) {
//             console.log(key + ': [' + values.join(',')+']');
//         }
//     }
// }
// let newGraph = new Graph();
// newGraph.insertvertex(12,3,true);
// newGraph.insertvertex(78,34,false);
// newGraph.insertvertex(14,3,true);
// newGraph.display();



   
/*********************************************************************************
*                                                                                 *
*                         Counting Possible River                                 *
*                                                                                 *
**********************************************************************************/

// class graph{
//     constructor(matrix){
//         this.matrix = matrix;
//     }
//     riverSize(){
//         let visited = Array.from({ length: this.matrix.length }, row => Array(this.matrix[0].length).fill(null));
//         let riverSizes = [];
//         for(let i =0 ;i< this.matrix.length;i++){
//             for(let j =0 ;j< this.matrix[0].length ;j++){
//                 if(this.matrix[i][j]==0){
//                     continue;
//                 }else{
//                     this.traverse(i,j,visited,riverSizes);
//                 }
//             }
//         }
//         return riverSizes;
//     }
//     traverse(i,j,visited,riverSize){
//         let stack = [];
//         stack.push([i,j]);
//         while(stack.length != 0){
//             let current = stack.pop();
//             i = current[0];
//             j = current[1];
//         }
//     }
// }
// let matrix = [
//     [1,0,1,0,0],
//     [1,1,1,0,0],
//     [0,0,0,1,1]
// ]
// let newGraph = new graph(matrix);
// console.log(newGraph.riverSize())







/*********************************************************************************
*                                                                                 *
*                         Depth Fast Search                                     *
*                                                                                 *
**********************************************************************************/
let graph = { "a":["b","d"],
              "b":[],
              "c":[],
              "d":["e","g"],
              "e":["c"],
              "f":[],
              "g":["f"]
            };
let dfs = function(graph,source){
    let stack = [];
    stack.push(source);
    let visited = [];
    while(stack.length!=0){
        let node = stack.pop();
        console.log(node);
        for(let neighbour of graph[node]){
            stack.push(neighbour);
        }
    }
}
dfs(graph,"a");













/*********************************************************************************
*                                                                                 *
*                         Breadth Fast Search                                     *
*                                                                                 *
**********************************************************************************/

// let graph = { "a":["b","d"],
//               "b":[],
//               "c":[],
//               "d":["e","g"],
//               "e":["c"],
//               "f":[],
//               "g":["f"]
//             };
// let bfs = function(graph,source){
//     let queue = [];
//     queue.push(source);
//     while(queue.length!=0){
//         let node = queue.shift();
//         console.log(node);
//         for(let neighbour of graph[node]){
//             queue.push(neighbour);
//         }
//     }
// }
// bfs(graph,"a");







/*********************************************************************************
*                                                                                 *
*    check if path exists between source && distance in directed acyclic graph    *
*                                                                                 *
**********************************************************************************/
// let graph = {
//     "A":["B","C"],
//     "B":["F","D"],
//     "C":[],
//     "D":["I","E"],
//     "E":["H"],
//     "F":["E"],
//     "G":["H"],
//     "H":[],
//     "I":[]
// }

// let hasPath = (src,dst)=>{
//     if(src == dst)return true;
//     let ans = false;
//     for(let neighbour of graph[src]){
//         ans = ans?ans:hasPath(neighbour,dst);
//     }
//     return ans;
// }
// console.log(hasPath("A","H"));











/*********************************************************************************
*                                                                                 *
*    check if path exists between source && distance in undirected graph          *
*                                                                                 *
// *******************************************************************************/
// let graph = {
//     "a":['b','c'],
//     "b":['a','f','d'],
//     "c":['a'],
//     "d":['b','g','i'],
//     "e":['f','h'],
//     "f":['b','e'],
//     "g":['i'],
//     "h":['e','h'],
//     "i":['d'],
// }

// let isPath = function(src,dst){
//     console.log(src)
//     if(src == dst)return true;
//     vis.add(src);
//     let ans = false;
//     for(let neighbour of graph[src]){
//         if(vis.has(neighbour))continue;
//         ans = ans?ans:isPath(neighbour,dst);
//     }
//     return ans;
// }
// let vis = new Set();
// console.log(isPath())

       








/*********************************************************************************
*                                                                                 *
*                         Topological Sort                                        *
*                                                                                 *
**********************************************************************************/

// function topologicalSort(graph){
//     let visited = new Set();
//     let stack = [];
//     function dfs(node){
//         visited.add(node);
//         for(let neighbour of graph[node]){
//             if(!visited.has(neighbour)){
//                 visited.add(neighbour);
//                 dfs(neighbour);
//             }
//         }
//         stack.push(node);
//     }
//     for(let node in graph){
//         if(!visited.has(node)){
//             dfs(node);
//         }
//     }
//     return stack.reverse();
// }
// // Example usage:
// const graph = {
//     'a': ['b', 'c'],
//     'b': ['d'],
//     'c': ['d'],
//     'd': []
// };

// console.log(topologicalSort(graph)); // Output: ['a', 'c', 'b', 'd']















/*********************************************************************************
*                                                                                 *
*           check if two nodes are connected or not                               *
*                                                                                 *
**********************************************************************************/

// function isConnected (node1,node2){
//     let visited = new Set();
//     function dfs(node1){
//         if(node1 == node2){
//             return true;
//         }
//         visited.add(node1);
//         for(let neighbor of node1.neighbors){
//             if(!visited.has(neighbor)){
//                 if(dfs(neighbor)){
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }
//     return dfs(node1);
// }
// class Node {
//     constructor(val,neighbors){
//       this.val = val === undefined ? 0 : val;
//       this.neighbors = neighbors === undefined ? [] : neighbors;
//     }
// };

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// node1.neighbors.push(node2, node3);
// node2.neighbors.push(node1, node3);
// node3.neighbors.push(node2);
// node4.neighbors.push(node3);
// let connected = isConnected(node4, node1);
// console.log("Node1 and Node3 are connected:", connected);















/*********************************************************************************
*                                                                                 *
*                         find shortest path                                      *
*                                                                                 *
**********************************************************************************/

// class Graph {
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//     }

//     addEdge(vertex1, vertex2) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);
//     }

//     shortestPath(start, end) {
//         let visited = {};
//         let queue = [[start]];
//         while(queue.length>0){
//             let path = queue.shift();
//             let current = path[path.length -1];
//             visited[current]=true;
//             if(current == end)return path;
//             for(let neighbor of this.adjacencyList[current]){
//                 if(!visited[neighbor]){
//                     let newPath = [...path,neighbor];
//                     queue.push(newPath);
//                 }
//             }
//         }
//         return null;
//     }
// }
// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('B','E')
// graph.addEdge('D','E')

// console.log(graph.shortestPath('A', 'E')); 




