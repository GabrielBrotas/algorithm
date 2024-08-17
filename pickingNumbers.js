function pickingNumbers(a) {
    let longestSequence = 0;
    let currentSequence = 0;
    
    a.sort((a,b) => {
        return a - b
    })

    let value = a[0];  
    /*        
        [1, 3, 3, 4, 5, 5, 5, 6] -> O(n).
        
        value = 1
    */
    for(let i = 0; i < a.length; i++) {
        const diff = a[i+1] - value;
        
        if(diff == 0 || diff == 1) {
            currentSequence++;
        } else {
            value = a[i+1];
            currentSequence = 0
        };
        
        if(currentSequence > longestSequence) longestSequence = currentSequence
    }
    
    return longestSequence + 1
}

pickingNumbers([1, 3, 3, 4, 5, 5, 5, 6])