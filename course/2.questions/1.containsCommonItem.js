/*
Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays
contain any common items
*/

// ? Make sure you understood the question
// const array1 = ["a", "b", "x", "t"]
// const array2 = ["i", "z", "h"]
// should return false

// const array1 = ["a", "b", "x", "t"]
// const array2 = ["i", "a", "h"]
// should return true

// ? Understand the data
// Can I assume the parameters are always an array ?
// there is a unique type on this array ? array of strings, integers,...?

// ? Confirm the inputs/outputs
// 2 parameters - arrays - no size limit
// return boolean (true/false)

// * First Solution - Brute
function containsCommonItens_brute(arr1, arr2) {
    console.time()
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]) {
                console.timeEnd()
                return true
            }
        }
    }
    console.timeEnd()
    return false
}
// console.log(containsCommonItens_brute(["a", "b", "x", "t"], ["i", "z", "h"]))
// console.log(containsCommonItens_brute(["a", "b", "x", "t"], ["i", "a", "h"]))

// ! Problems with this approach
// Time Complexity => O(a * b), we want to avoid that
// Space Complexity => O(1)

// ? Solution ------------------
/*
one loop through array 1
array 1 = object {
    a: true,
    b: true,
    c: true,
    ...
}

one loop through array 2
array2[index] == object.properties
*/

// these loop will not be nested
function containsCommonItens(arr1, arr2) {
    // how errors may rise
    if(!arr1) return false
    if(!arr2) return false

    // loop through first array and create object where properties == items in the array

    let map = {}
    for(let i = 0; i < arr1.length; i++) { 
        if(!map[arr1[i]]) {
            map[arr1[i]] = true
        }
    }

    // loop through second array and check if item in second array exists on created object
    for(let j = 0; j < arr2.length; j++) {
        if(map[arr2[j]]) {
            return true
        }
    }

    return false
}
console.log(containsCommonItens(["a", "b", "x", "t"], ["i", "z", "h"]))
console.log(containsCommonItens(["a", "b", "x", "t"], ["i", "a", "h"]))

// Space Complexity => O(a + b)
// Space Complexity => O(a), because we are going to be storing the arr1 data on the map object
