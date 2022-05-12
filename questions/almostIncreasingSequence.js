const arr = [1, 3, 2]

function solution(sequence) {
    if(sequence.length <= 1) return true
    
    for (let i = 0; i < sequence.length - 1; i++) {
        var isStrictlyIncreasing = true
        
        for(let j = 0; j < sequence.length - 1; j++) {
            if (j == i) continue;
            if (j + 1 == i) continue;
            
            if(sequence[j] < sequence[j + 1]) continue
            
            isStrictlyIncreasing = false
        }
        
        if(isStrictlyIncreasing) break;
    }
    
    return isStrictlyIncreasing;
}
