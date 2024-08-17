
function quickestWayUp(ladders, snakes) {
    const boardGraph = buildBoardGraph(ladders, snakes);
    
    const minimumPlays = getMinimumPlaysFromBoard(boardGraph);
    
    return minimumPlays;
}

function getMinimumPlaysFromBoard(boardGraph) {
    const startPoint = '1'
    const queue = [ [startPoint, 0] ];
    const visitedPlaces = new Set();
    
    while(queue.length > 0) {
        const [currentNode, steps] = queue.shift();
        
        if(currentNode == '100') return steps;
        if(visitedPlaces.has(currentNode)) continue;
        visitedPlaces.add(currentNode);
        
        for(let neighbor of boardGraph[currentNode]) {
            queue.push([neighbor, steps + 1]);
        }
    }
    
    return -1;
    
}

function buildBoardGraph(ladders, snakes, boardSize = 100, diceSize = 6) {
    
    const graph = {};
    const positionReplace = {};
    
    while(ladders.length > 0 || snakes.length > 0) {
        const ladderItem = ladders.pop();
        const snakeItem = snakes.pop();
        
        if(ladderItem) {
            positionReplace[ladderItem[0]] = ladderItem[1]
        }
        
        if(snakeItem) {
            positionReplace[snakeItem[0]] = snakeItem[1]
        }        
    }
    
    for(let i = 1; i < boardSize; i++) {
        if(!graph[i]) graph[i] = [];
        for(let j = i + 1; j < (i + diceSize + 1); j++) {
            if(j > 100) continue;
            if(positionReplace[j]) {
                graph[i].push(positionReplace[j]);
                continue;
            }
            graph[i].push(String(j));
        }
    }
    
    return graph;
}
