function bfs(n, m, edges, s) {
    // Write your code here
    const graph = buildGraph(edges, n) 
    
    const nodesDistance = getNodesDistance(graph, s, n);
    return nodesDistance;
}

function getNodesDistance(graph, startPoint, numberOfNodes) {
    const queue = [ [startPoint, 0] ];
    
    const visitedPlaces = new Set();
    let distances = Array(numberOfNodes - 1).fill(-1);
    
    while(queue.length > 0) {
        const [currentNode, distance] = queue.shift();
        
        if(visitedPlaces.has(currentNode)) continue
        visitedPlaces.add(currentNode);

        if(currentNode != startPoint) {
            let distancePos = Number(currentNode) > Number(startPoint) ? Number(currentNode) - 2 : Number(currentNode) - 1
            distances[distancePos] = distance;        
        }
        
        for(let neighbor of graph[currentNode]){
            queue.push([neighbor, distance + 6]);
        }
        
    }
    
    return distances;
}

function buildGraph(edges, n) {
    const graph = {};
    
    for(let i=0; i < edges.length; i++) {
        const [nodeA, nodeB] = edges[i];
        
        if(!graph[nodeA]) graph[nodeA] = [];
        if(!graph[nodeB]) graph[nodeB] = [];
        
        graph[nodeA].push(nodeB);
        graph[nodeB].push(nodeA);
    }
    
    return graph;
}

// 1
// 10 6
// 3 1
// 10 1
// 10 1
// 3 1
// 1 8
// 5 2
// 3
let n = 10
let m = 6
let edges = [
    [3, 1],
    [10, 1],
    [10, 1],
    [3, 1],
    [1, 8],
    [5, 2],
]
let s = 3;

bfs(n, m, edges, s)
// 6 -1 -1 -1 -1 -1 12 -1 12