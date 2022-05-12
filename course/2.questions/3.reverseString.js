
// 1 parameter -> string
// output -> reversed string

// "Hi My Name is Gabriel"
// [H, i, M, y, N, a, m, e, i, s, G, a, b, r, i, e, l]
// 17 / 2 = 8,5 => 8


function reverseString(value) {
    if(!value || value.length < 2) return value

    const valueInArray = value.split('')

    for(let i = 0; i < valueInArray.length / 2; i++) {
        let temp = valueInArray[i]
        valueInArray[i] = valueInArray[(valueInArray.length - 1) - i]
        valueInArray[(valueInArray.length - 1) - i] = temp
    }

    return valueInArray.join('')
}

console.log(reverseString("Hi My Name is Gabriel")) // O(n)

function reverseString2(value) {
    if(!value || value.length < 2) return value

    const backwards = []

    for(let i = value.length -1; i >= 0; i--) {
        backwards.push(value[i])
    }

    return backwards.join('')
}

console.log(reverseString2("Hi My Name is Gabriel")) // O(n)
