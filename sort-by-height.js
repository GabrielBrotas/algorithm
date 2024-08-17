/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

function solution(a) {
    
    function sort(array) {
        let tempArr = [...array]
        for(let i = 0; i < tempArr.length - 1; i++) {
            
            for(let j = 0; j < tempArr.length - 1; j++) {
                if(tempArr[j] == -1) continue
                
                let nextIndexToSwap = j + 1
                
                if(tempArr[nextIndexToSwap] == -1) {
                    while(tempArr[nextIndexToSwap] == -1) {
                        nextIndexToSwap++
                    }
                } 
                
                if(tempArr[j] > tempArr[nextIndexToSwap]) {
                    let temp = tempArr[j]
                    tempArr[j] = tempArr[nextIndexToSwap]
                    tempArr[nextIndexToSwap] = temp
                }
                    
                
            }
        }
        return tempArr
    }
    
    const sortedArr = sort(a)
    
    return sortedArr
}
