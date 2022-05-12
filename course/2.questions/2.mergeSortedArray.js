
// 2 parameter -> array, array
// output -> one array, merged and sorted

// input -> [0, 3, 4, 31], [4, 6, 30]
// output -> [0, 3, 4, 4, 30, 31]

// 
// O(n^2) 

function mergeArrays(array1, array2) {

    let result = [...array1];

    for(let i = 0; i < result.length; i++) {

        for(let j = 0; j < array2.length; j++) {
            // 4
            if(array2[j] < result[i]) {
                result = [
                    ...result.slice(0, i),
                    array2[j],
                    ...result.slice(i,)
                ]
                array2.splice(j, 1);

                continue
            }
            // if(i == mergedArrays.length - 1) {
            //     mergedArrays.push(array2[j])
            // }
        }
    }

    console.log(result)
    return result
}

mergeArrays(
    [0, 3, 4, 31],
    [4, 6, 30]
) // ! bad, O(n*m)

// -----------------------------
function mergeArrays2(array1, array2) {
    const mergedArrays = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 0;
    
    if(array1.length == 0) return array2;
    if(array2.length == 0) return array1;

    while(array1Item || array2Item) {

        if(!array2Item || array1Item < array2Item) {
            mergedArrays.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArrays.push(array2Item);
            array2Item = array2[i];
            j++;
        }
    }

    return mergedArrays;
}

// 0, 3, 4, 4, 6, 30, 
mergeArrays(
    [0, 3, 4, 31],
    [4, 6, 30]
)  // O(N)