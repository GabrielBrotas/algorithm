// You are given a string s. Your task is to count the number of ways of splitting s into three non-empty parts a, b and c (s = a + b + c) in such a way that a + b, b + c and c + a are all different strings

const s = "xzxzx"
// result must be 5

function allWaysOfSplitString(string) {
    let result = 0
    for(let i = 0; i < string.length - 1; i++) {
        for(let j = i + 1; j < string.length; j++) {
            for(let k = j + 1; k < string.length; k++) {
                if(string[i] + string[j] + string[k] === string) {
                    result++
                }
            }
        }
    }
    return result
}

console.log(allWaysOfSplitString(s))