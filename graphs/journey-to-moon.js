function journeyToMoon(n, astronaut) {
    
    const graph = buildGraph(astronaut, n)

    const visitedPlaces = new Set();
    //let validPairs = [];
    //let standaloneCountries = 0;
    let total = 0;
    let countries = 0;
    
    for(let key in graph) {
        const count = numberOfValidAstronautPairFromDifferentCountries(graph, key, visitedPlaces)    
          
        if(count > 0) {
            total+=countries * count;
            countries+=count;
        };
        
        if(count == -1) {
            total+=countries;                       
            countries+=1;         
        }
    }
    
    console.log({total, countries})
    return total
}

function exploreGraph(graph, startPoint, visitedPlaces) {    
    
    if(visitedPlaces.has(String(startPoint))) return 0;
    
    const queue = [ startPoint ];
    
    let peopleInCountry = 0;
    
    while(queue.length > 0) {
        const currentNode = queue.shift();
        
        if(visitedPlaces.has(currentNode)) continue;
        visitedPlaces.add(currentNode);
        
        peopleInCountry++;
        for(let neighbor of graph[currentNode]) {
            queue.push(neighbor)
        }
    }
    
    return peopleInCountry;
}

function buildGraph(astronaut, n) {
    
    const graph = {};
    
    for(let i = 0; i < astronaut.length; i++) {
        const [nodeA, nodeB] = astronaut[i];
        
        if(!graph[nodeA]) graph[nodeA] = [];
        if(!graph[nodeB]) graph[nodeB] = [];
        
        // if(!graph[nodeA].includes(String(nodeB))) {
            graph[nodeA].push(String(nodeB))        
        // }
        
        // if(!graph[nodeB].includes(String(nodeA))) {
            graph[nodeB].push(String(nodeA))
        // }        
    }
    
    for(let i = 0; i < n; i++) {
        if(!graph[i]) graph[i] = []
    }
    
    return graph;    
}

console.log(journeyToMoon(
    100,
[[0 ,11],
[2 ,4],
[2 ,95],
[3 ,48],
[4 ,85],
[4 ,95],
[5 ,67],
[5 ,83],
[5 ,42],
[6 ,76],
[9 ,31],
[9 ,22],
[9 ,55],
[10, 61],
[10, 38],
[11, 96],
[11, 41],
[12, 60],
[12, 69],
[14, 80],
[14, 99],
[14, 46],
[15, 42],
[15, 75],
[16, 87],
[16, 71],
[18, 99],
[18, 44],
[19, 26],
[19, 59],
[19, 60],
[20, 89],
[21, 69],
[22, 96],
[22, 60],
[23, 88],
[24, 73],
[27, 29],
[30, 32],
[31, 62],
[32, 71],
[33, 43],
[33, 47],
[35, 51],
[35, 75],
[37, 89],
[37, 95],
[38, 83],
[39, 53],
[41, 84],
[42, 76],
[44, 85],
[45, 47],
[46, 65],
[47, 49],
[47, 94],
[50, 55],
[51, 99],
[53, 99],
[56, 78],
[66, 99],
[71, 78],
[73, 98],
[76, 88],
[78, 97],
[80, 90],
[83, 95],
[85, 92],
[88, 99],
[88, 94],]
)) // -> 3984
// 2464

/*
18 - 18 * 40 = 720
40 - 58 * 2  + 720 = 836
2  - 60 * 8  + 836 = 1316
8  - 68 * 3  + 1316 = 1520
3  - 71 * 2 + 1520 = 1662
2

- 73 paises
*/ 

