/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findPairs = function(nums, k) {
    let kDiff = 0
    
    // O(n2)
//     let pairMatches = {};
    
//     for(let i = 0; i < nums.length; i++) {

//       for(let j = 0; j < nums.length; j++) {
//           if(i == j) continue;
          
//           if(nums[i] - nums[j] == k) {
//               let pos = nums[i].toString() + nums[j].toString()
//               if(pairMatches[pos]) continue;
//               pairMatches[pos] = true;
//               kDiff++;
//           }
//       }
//     }
    
// O(n)
    let numsMap = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(!numsMap[nums[i]]) numsMap[nums[i]] = 1
        else numsMap[nums[i]]++
    }
    
    for(let j = 0; j < nums.length; j++) {

        // if k == 0 we have to find 2 unique numbers
        if(k == 0) {
            if(numsMap[nums[j]] >= 2) {
                numsMap[nums[j]] = 0;
                kDiff++;
            } 
            
            continue;
        }
        
        if(numsMap[nums[j] + k] && numsMap[nums[j] + k] > 0) {
            kDiff++;
            numsMap[nums[j] + k] = 0;
        };
    }
    
    return kDiff
};
