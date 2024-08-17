

function countingValleys(steps, path) {
    // Write your code here
    
    let mountain_and_valeys_stracktrace = [];
    let valleysTraversed = 0;
    
    for(let i = 0; i < steps; i++) { // O(n)
        let current_step = path[i];
        
        mountain_and_valeys_stracktrace = updateMountainStrackTrace(mountain_and_valeys_stracktrace, current_step)
        
        if(mountain_and_valeys_stracktrace.length == 0 && path[i] == "U") {
            valleysTraversed++;        
        }     
    }

    return valleysTraversed;
}

function updateMountainStrackTrace(mountain_and_valeys_stracktrace, current_step) {
    const stracktrace = [...mountain_and_valeys_stracktrace];
    
    if(stracktrace.length > 0) {
        if(stracktrace[stracktrace.length - 1] == current_step) {
            stracktrace.push(current_step)
        } else {
            stracktrace.pop()
        }
    } else {
        stracktrace.push(current_step);
    }
    return stracktrace
}
