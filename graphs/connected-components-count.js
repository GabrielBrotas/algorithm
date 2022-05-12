/*
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
The function should return the number of connected components within the graph
*/
const connectedComponentsCount = (graph) => {  
    const visitedPlaces = new Set();
    let count = 0;
    
    for( let node in graph ) {
      if(explore(graph, node, visitedPlaces)) {
        count++;
      }
    }
    
    return count
};

const explore = (graph, currentNode, visitedPlaces) => {
    if(visitedPlaces.has(String(currentNode))) return false; // if somethin is already explored will not increase the count
    visitedPlaces.add(String(currentNode))

    for(let neighbor of graph[currentNode]) {
        explore(graph, neighbor, visitedPlaces);
    }

    return true
}

  