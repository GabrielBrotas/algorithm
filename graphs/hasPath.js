
/*
source = j, destination f

[f] -> [g] -> [h]
 |   />
 |  /
 v / 
[i] <- [j]
 |
 v
[k]

Q
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
*/
const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
// breath first
const hasPath = (graph, src, dst) => {
    const queue = [ src ]
  
    while(queue.length > 0) {
      const current = queue.shift();
      
      if(current == dst) return true
      
      for(let neighbor of graph[current]) {
        queue.push(neighbor)
      }
    }
    
    return false
}

console.log(hasPath(graph, 'f', 'k')); // true