/*
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. 
The function should return the size of the largest connected component in the graph.

https://structy.net/problems/largest-component
*/

const largestComponent = (graph) => {
    const visitedPlaces = new Set()
    
    let biggestNode = 0;
    
    for(node in graph) {
      const nodesCount = exploreSize(graph, node, visitedPlaces)
      
      if(nodesCount > biggestNode) {
        biggestNode = nodesCount
      }
    }
    
    return biggestNode
  
};
  
  const exploreSize = (graph, node, visitedPlaces) => {
    if(visitedPlaces.has(node)) return 0;
  
    const queue = [ node ];
    
    let nodesCount = 0;
    
    while(queue.length > 0) {
      const currentNode = queue.shift()
      if(visitedPlaces.has(currentNode)) continue;
      
      visitedPlaces.add(currentNode)
      nodesCount++
      
      for(let neighbor of graph[currentNode]) {  
        queue.push(neighbor)
      }
    }
    return nodesCount
  }
  
  
  
  module.exports = {
    largestComponent
  };