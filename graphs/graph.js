const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// DFS → Depth First Traversal
const depthFirstPrint_Interactive = (graph, source) => {
    const stack = [ source ] // first item from stack

    while(stack.length > 0) {
        const currentNode = stack.pop()
        console.log(currentNode)
        for(neighbor of graph[currentNode]) {
            stack.push(neighbor)
        }
    }
}

const depthFirstPrint_Recursive = (graph, source) => {
    console.log(source);
    for(let neighbor of graph[source]) {
        depthFirstPrint_Recursive(graph, neighbor)
    }
}

// depthFirstPrint_Interactive(graph, 'a') // abdfce
console.log('-')
// depthFirstPrint_Recursive(graph, 'a')

const breadthFirstPrint = (graph, source) => {
    const queue = [ source ]

    while(queue.length > 0) {
        const currentNode = queue.shift()
        console.log(currentNode)
        for(neighbor of graph[currentNode]) {
            queue.push(neighbor)
        }
    }
}
// 
breadthFirstPrint(graph, 'a') // acbedf
