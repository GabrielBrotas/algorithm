

function bfs(n, m, edges, s) {
    // Write your code here
    /*
        n = number of nodes
        m = number of edges, each edge weigh = 6
        s => start point
        
        1- build the graph representation
        1: [2, 3]
        2: [1]
        3: [1, 4]
        4: [3]
        5: []
        
        2 - bfs and search for the shortest path
    */
    console.log('-------------------------')
    
    console.log({n, m, edges, s})
    

    const graph = buildGraph(edges, n);
    console.log(graph)
    return getDistances(graph, s, n)
}

function getDistances(graph, startPoint, numberOfNodes) {
    const visitedPlaces = new Set();
    
    const queue = [ [ String(startPoint), 0 ] ];
    
    const distances = {} // key, distance
    // const distances = [] // key, distance
    
    while(queue.length > 0) {
        const [ currentNode, distance ] = queue.shift()
        // console.log('--')        
        // console.log({queue, currentNode, distance})
        // console.log('--')
        if(visitedPlaces.has(currentNode)) continue;
        visitedPlaces.add(currentNode);
        
        for(let neighbor of graph[currentNode]) {
            queue.push([neighbor, distance + 6])
            if(String(neighbor) != String(startPoint) && !visitedPlaces.has(neighbor)) {
                // distances.push(distance + 6)               
                // distances.push(`${neighbor},${distance + 6}`)               
                distances[neighbor] = distance + 6;
            }
        }
    }

    for(let i = 1; i <= numberOfNodes; i++) {
        const node = Object.keys(graph).find(key => key == String(i));

        if(!node) continue

        if(!visitedPlaces.has(node)) {
            // distances.push(`${node},${-1}`)               
            distances[node] = -1
        }
    }

    const distancesFormated = []

    for(let i = 0; i < Object.keys(distances).length; i++) {
        const value = Object.values(distances)[i]
        distancesFormated.push(value)
    }    

    return distancesFormated
}

function buildGraph(edges, numberOfNodes) {
    const graph = {}
    
    for(let i = 0; i < edges.length; i++) {
        const [nodeA, nodeB] = edges[i];
        
        if(!graph[nodeA]) graph[nodeA] = [];
        if(!graph[nodeB]) graph[nodeB] = [];

        if(!graph[nodeA].includes(String(nodeB))) {
            graph[nodeA].push(String(nodeB))
        }
       
        if(!graph[nodeB].includes(String(nodeA))) {
            graph[nodeB].push(String(nodeA))
        }
    }
    
    for(let j = 1; j <= numberOfNodes; j++){
        if(!graph[j]) graph[j] = [];
    }
    
    return graph;
}

const res = bfs(
    3, 
    1,
    [ [ 2, 3 ] ],
    2
) 
console.log({res})