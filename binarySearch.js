
function findTargetUsingBinarySearch(arr, target) {

    let right = arr.length - 1
    let left = 0;
    
    console.log({
        left,
        right,
        length: arr.length,
        target
    })

    console.log('---------')
    while (left <= right) {
        let middle = Math.floor(left + ((right - left) / 2));
        
        console.log({left, right, middle, value: arr[middle]})

        if(arr[middle] == target) return middle;

        if(target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1
        }
    }

    return false
}

// console.log(findTargetUsingBinarySearch(
//     [1, 1, 4, 5, 10, 12, 12, 18, 20, 75, 99, 100, 101, 110],
//     2
// ))
console.log(findTargetUsingBinarySearch(
    ["algeoo", "carllo", "cxruso", "feijao", "sopa", "xtudo",],
    "xtudo"
))