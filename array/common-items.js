/*
    A = [1,3,4,6,7,9]
    B = [1,2,4,5,9,10]

    output = [1]

    [1, 3, 4, 6, 7, 9]
                    l

    [1, 2, 4, 5, 9, 10]
                    r
    
    while {
        if a[l] == b[r] : add to output
            l++
            continue
        
        if !a[l] || ! b[r] break
        a[l] > b[r]:
            r++
        else
            l++
        
    }

    retirm output
*/

const A = [1,3,4,6,7,9]
const B = [1,2,4,5,9,10]

function findPair(arr1, arr2) {
    const output = []

    let p1 = 0
    let p2 = 0

    while (arr1[p1] && arr2[p2]) {

        if (arr1[p1] == arr2[p2]) {
            output.push(arr1[p1])
            p1++
            p2++
            continue
        }
        
        if(arr1[p1] > arr2[p2]) {
            p2++
            continue
        }
        
        p1++
    }

    return output
}

console.log(findPair(A, B))