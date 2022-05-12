function arrangeArray(array) {
    for(let i = 0; i < array.length - 1; i++) {
        // [3, 2, 5, 7]
        for(let j = 0; j < array.length - 1; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
let arr = [7, 4, 1, 2, 3, 10, 99, 4]
arrangeArray(arr)
console.log(arr)