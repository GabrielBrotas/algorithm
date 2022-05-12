/*
Write a function, undirectedPath, 
that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

// Breath First ------
const undirectedPath = (edges, src, dst) => {
    // 1 - transform into a transversal list
  
    const graph = buildGraph(edges)
    
    return hasPath_Breath(graph, src, dst)
};

const hasPath_Breath = (graph, src, dst) => {
  // breath first
  const queue = [ src ]
  const visitedPlaces = new Set(); // O(1)
  
  while(queue.length > 0) {
    const currentNode = queue.shift();
    
    if(currentNode == dst) return true;
    
    visitedPlaces.add(currentNode);
    
    for(neighbor of graph[currentNode]) {
      
      if(visitedPlaces.has(neighbor)) continue;
      
      queue.push(neighbor);
    }
  }
  
  return false
}

const buildGraph = (edges) => {
  const graph = {}
  
  for(let i = 0; i < edges.length; i++) {
    const [nodeA, nodeB] = edges[i];
    
    if(!graph[nodeA]) graph[nodeA] = [];
    if(!graph[nodeB]) graph[nodeB] = [];
    
    graph[nodeA].push(nodeB)
    graph[nodeB].push(nodeA)
    
  }
  
  return graph
}


// Depth First ------------------------------
const hasPath_Depth = (graph, src, dst, visited) => {
  if(src == dst) return true;
  if(visited.has(src)) return false; // avoid infinity loop
  
  visited.add(src)
  
  for(let neighbor of graph[src]) {
    if(hasPath(graph, neighbor, dst, visited)) {
      return true
    }
  }
  
  return false
}


undirectedPath(edges, 'j', 'm');