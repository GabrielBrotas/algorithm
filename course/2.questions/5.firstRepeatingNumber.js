
// [2, 5, 6, 2, 3, 4, 5]
// 2

// [2, 1, 1, 5, 7, 7, 4] 
// 1

// [2, 3, 4, 5]
// return undefined

// ! Worst solution -> O(n2)
function firstRepeatingNumber(numbers) {

    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] == numbers[j]) return numbers[i]
        }
    }

    return undefined
}

console.log(firstRepeatingNumber([2, 5, 6, 2, 3, 4, 5]))
console.log(firstRepeatingNumber([2, 1, 1, 5, 7, 7, 4]))
console.log(firstRepeatingNumber([2, 3, 4, 5]))

console.log('-------')

// ? better solution -> O(n)
function firstRepeatingNumber(numbers) {

    let numbersHashTable = {}

    for(let i = 0; i < numbers.length - 1; i++) {
        if(numbersHashTable[numbers[i]] != undefined) return numbers[i]
        numbersHashTable[numbers[i]] = true
    }

    return undefined
}

console.log(firstRepeatingNumber([2, 5, 6, 2, 3, 4, 5]))
console.log(firstRepeatingNumber([2, 1, 1, 5, 7, 7, 4]))
console.log(firstRepeatingNumber([2, 3, 4, 5]))