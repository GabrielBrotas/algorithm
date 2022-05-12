// What is the O of this function ?
function funChallenge(input) {
    let a = 10; // first thing is to assign an variable -> O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) { // Loop => O(n), Linear time
      anotherFunction(); // It's called n times, O(n)
      let stranger = true; // assined n times, O(n)
      a++; // O(n)
    }

    return a; // O(1)
}

// ? Answer
// O(3+4n) frunction or just O(n)

// ---------------------------------------------------

// What is the O of this function ?
function anotherFunChallange(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 15; // O(1)
    
    for(let i = 0; i< input; i++) { 
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }

    for(let j = 0; j < input; j++) { 
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }

    let whoAmI = "You tell me !" // O(1)
}

// ? Answer
// Big O(4 + 5n) => O(n)

// ---------------------------------------------------
function printFirstItemThenFirstHalfAndSayHi100Times(items) {
    console.log(items[0])

    let middleIndex = Math.floor(items.length / 2);
    let index = 0;

    while(index < middleIndex) {
        console.log(times[index])
        index++
    }

    for(let i = 0; i < 100; i++) {
        console.log('hi')
    }
}

// ? Answer
// O(2 + n/2 + 100) => O(n)

// ---------------------------------------------------

function compressTwice(boxes) {
    boxes.forEach(b => {
        console.log(b)
    })

    boxes.forEach(b => {
        console.log(b)
    })
}
// ? Answer
// O(2n) => O(n) => Ignore constrains, what really matters is how the lines moves, and in this case is linear

// ---------------------------------------------------

function compressTwice2(boxes, boxes2) {
    boxes.forEach(a => {
        console.log(a)
    })

    boxes2.forEach(b => {
        console.log(b)
    })
}
// ? Answer
// Different terms for inputs, in this case we cannot simplify because the first param can have 1K elements while the second just one
// O(a + b) or O(n + m) -> a first input, b secondinput

// ---------------------------------------------------

function compressTwice3(boxes, boxes2) {
    boxes.forEach(a => {
        console.log(a)

        boxes2.forEach(b => {
            console.log(b)
        })
    })

}
// ? Answer
// O(a * b) or O(n * m) -> a first input, b secondinput

// ! Rule: if is on the same indentation we sum (a+b), if is nested we multiply (a*b)