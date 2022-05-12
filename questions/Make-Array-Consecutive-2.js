/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.
*/

function solution(statues) {
    
    function arrangeArray(array) {
        for(let i = 0; i < array.length - 1; i++) {
            // [3, 2, 5, 7]
            for(let j = 0; j < array.length - 1; j++) {
                if(array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
    }
    
    arrangeArray(statues)
    
    let amountOfNumbersMissing = 0
    for(let i = 0; i < statues.length - 1; i++) {
        amountOfNumbersMissing += (statues[i + 1] - statues[i]) - 1
    }
    
    return amountOfNumbersMissing

}
