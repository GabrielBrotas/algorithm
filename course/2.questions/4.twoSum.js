/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// array[numbers], target,
// output -> [0, 1] pair index that sum is equal target

// time complexity should not be O(n2)

// var twoSum = function(nums, target) {
//    for(let i = 0; i < nums.length; i++) {      
//        for(let j = 0; j < nums.length; j++) {          
//            if(i == j) continue;            
//            if(nums[i] + nums[j] == target) {
//                return [i, j]
//            }           
//        }
//    }
//    return false
//};

var twoSum = function(nums, target) {
    
    let existentNumbers = {}
    
    for(let i = 0; i < nums.length; i++) {
        existentNumbers[nums[i]] = i;    
    }
    
    for(let i = 0; i < nums.length; i++) {
        const desiredNumber = target - nums[i]
    
        if(existentNumbers[desiredNumber] && existentNumbers[desiredNumber] != i) {
            return [i, existentNumbers[desiredNumber]]
        }    
    }
    
    return false
    
};