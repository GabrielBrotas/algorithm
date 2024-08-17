function evenForest(t_nodes, t_edges, t_from, t_to) {
    
    const graph = buildGraph(t_from, t_to)   
    
    let nodesToRemove = 0;
    
    for(let key in graph) {
        let nodeCount = dfs(graph, key)
        
        console.log({key, nodeCount})
        if(key != "1" && isEven(nodeCount)) nodesToRemove++
    }
    
    return nodesToRemove
}

function dfs(graph, startPoint) {
    const stack = [ startPoint ];
    let count = 0;
    
    while(stack.length > 0) {
        const currentNode = stack.pop();
        
        count++;
        
        if(!graph[currentNode]) continue;
        
        for(let child of graph[currentNode]) {
            stack.push(child);
        }
    }       
    
    return count;
}

function buildGraph(t_from, t_to) {
    const graph = {};
    
    while(t_from.length > 0 && t_to.length > 0) {
        let nodeA = t_from.shift();
        let nodeB = t_to.shift();
        
        // if(!graph[nodeA]) graph[nodeA] = [];
        if(!graph[nodeB]) graph[nodeB] = [];
        
        // graph[nodeA].push(nodeB);
        graph[nodeB].push(String(nodeA));        
    }
    
    return graph;
}
