function boo(n) {
    for(let i = 0; i < n.length; i++) {
        console.log('boo !')
    }
}

// boo([1, 2, 3, 4, 5])

// ? Answer
// Time Complexity => O(n)
// Space Complexity => O(1)

// ---------------------------------------------------

function arrayOfHiNTimes(n) {
    let hiArray = [] // Space - O(1)

    for(let i = 0; i < n; i++) { // Space (let i) - O(1)
        hiArray[i] == 'hi' // each item is an additional space variable - O(n)
    }

    return hiArray
}

// arrayOfHiNTimes(6) 

// ? Answer
// Time Complexity => O(n)
// Space Complexity => O(n)

// ---------------------------------------------------

