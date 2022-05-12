

const nemo = ["nemo"]
const bigArray = new Array(1000).fill('nemo')

// big O()
function findNemo(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == "nemo") {
            console.log('found')
            break;
        }
    }
}

// findNemo(nemo)
findNemo(bigArray)