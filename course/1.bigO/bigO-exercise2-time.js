const boxes = [1, 2, 3, 4]

function logAllPairsOfArray(input) {
    for(let i = 0; i < input.length; i++) {

        for(let j = 0; j < input.length; j++) {
            console.log(input[i], input[j])
        }
    }
}

logAllPairsOfArray(boxes)

// ? Answer
// Nested loops, that means the code will run twice as many times
// O(n * n) => O(n^2), Quadratic times

// ---------------------------------------------------

function printAllNumbersThenAllPairSums(numbers) {

    numbers.forEach(number => {
        console.log(number)
    })

    numbers.forEach(first => {        
        numbers.forEach(second => {
            console.log(first + second)
        })
    })
}

// ? Answer
// Nested loops, that means the code will run twice as many times
// O(n + n * n) => O(n^2), Quadratic times

// ---------------------------------------------------

// ! The worst cenario, it never should happen, nested loop to every input
// ! O(n!)

