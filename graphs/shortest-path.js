/*
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
The function should return the length of the shortest path between A and B.
Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

test_00:
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'w', 'z'); // -> 2

https://structy.net/problems/shortest-path
*/

const shortestPath = (edges, src, dst) => {
    const graph = buildGraph(edges)
  
    const lowerAmountOfStepsToDestiny = getShortestPath(graph, src, dst)
    
    return lowerAmountOfStepsToDestiny;
  };
  
  const getShortestPath = (graph, src, dst) => { // O(e)
    const queue = [ [src, 0] ]
    
    const visitedNodes = new Set() // O(1)
    
    while(queue.length > 0) {
      const [currentNode, distance] = queue.shift();
      
      if(currentNode == dst) return distance;
      if(visitedNodes.has(currentNode)) continue
      
      visitedNodes.add(currentNode);
      
      for(let neighbor of graph[currentNode]) {
        queue.push([ neighbor, distance + 1 ]);
      }
    }
    
    return -1
  }
  
  // O(n) - [] {}
  const buildGraph = (edges) => {
      const graph = {}
      
      for(let i = 0; i < edges.length; i++) {
        const [nodeA, nodeB] = edges[i]
        
        if(!graph[nodeA]) graph[nodeA] = []
        if(!graph[nodeB]) graph[nodeB] = []
        
        graph[nodeA].push(nodeB)
        graph[nodeB].push(nodeA)
      }
      
      return graph
  }
  
  
