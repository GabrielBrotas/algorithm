const arr = [90, 4, 3, 99, 15, 2, 1, 7]

function sort(array) {
    for(let i = 0; i < array.length - 1; i++) {

        for(let j = 0; j < array.length - 1; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }   
    }
}

sort(arr)

console.log(arr)