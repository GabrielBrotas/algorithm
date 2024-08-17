const r = [100, 100, 50, 40, 40,  20, 10]

const set = new Set(r)
console.log(set.forEach((v1, v2, s) => {
    console.log({v1, v2, s})
}))