let a = 1
let b = 2
let c = 3

console.log(a)

setTimeout(() => {
    console.log(b)
    b=b+2
}, 2000)

console.log(c)
console.log(b)