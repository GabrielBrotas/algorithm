// Bad implementation, it take much time to calculate the work
// function fib(n) {
//     if (n <= 0) return 0;
//     if (n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2)
// }

// Better implementation using memorization
const memo = {}

function fib(n) {
    if(n in memo) return memo[n]
    if (n <= 0) return 0;
    if (n <= 2) return 1;
    memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]
}

console.time()
console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(30))
console.log(fib(50))
console.log(fib(100))
console.timeEnd()

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 