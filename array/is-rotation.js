/*
    [1, 2, 3, 4, 5, 6, 7]
           L
   
    [4, 5, 6, 7, 1, 2, 3]
                       R
*/

const A = [1, 2, 3, 4, 5, 6, 7]
const B = [4, 5, 6, 7, 1, 2, 3]

function isRotation(arr1, arr2) {
    if (arr1.length != arr2.length) return false;

    function findKeyOfFirstElementInB(arr1, arr2) {
        const key_a = arr1[0]
        let key_b = -1
        for(let i=0; i<arr2.length; i++) {
            if(arr2[i] == key_a) {
                key_b = i
                break
            }
        }
        return key_b
    }

    let key_b = findKeyOfFirstElementInB(arr1, arr2)
    if(key_b == -1) return false
    
    let isRotation = true

    let p1 = 0
    let p2 = key_b

    while (p1 <= arr1.length-1) {
        if(arr1[p1] != arr2[p2]) {
            return false
        }

        p1++
        if(p2 == arr2.length - 1) {
            p2 = 0
        } else {
            p2 ++
        }
    }

    return true
}

console.log(isRotation(A, B))