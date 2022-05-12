function filterArrIndex(arr, index) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if (i == index) continue;

        newArr.push(arr[i])
    }
    return newArr
}

let arr = [1, 5, 7, 99, 1]
arr = filterArrIndex(arr, 2)
console.log(arr)