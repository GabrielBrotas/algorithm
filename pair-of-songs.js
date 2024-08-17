var numPairsDivisibleBy60 = function(time) {

    let count = 0;
    
    // O(n2)
    // for(let i = 0; i < time.length; i++) {
    //     for(let j = i + 1; j < time.length; j++) {
    //         if((time[i] + time[j]) % 60 == 0) {
    //             count++;
    //         }
    //     }
    // }
    
    let times = {};
    const sixtySeconds = 60
    
    for(let i = 0; i < time.length; i++) {
        let divisionRest = time[i] % sixtySeconds

        let difference = (sixtySeconds - divisionRest)
        let target = (difference % 60)
        
        // 30
        if(target in times) {
            count += times[target]
        } 
        
        if(!times[divisionRest]) times[divisionRest] = 0
        
        times[divisionRest] += 1;
    }
    
    return count;
};