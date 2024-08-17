/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * 
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0;
    if(s.length == 1) return 1;
    
    /*
        "abcabcbb"
        
        "pwwkew"
        
    */
    let maximumNonRepeatSequence = 1;
    let currentSequence = 0;
    let memo = {};
    
    for(let i = 0; i < s.length; i++) {
        memo = {};
        currentSequence = 1;
       for(let j = i + 1; j < s.length; j++) {
            if(s[i] != s[j] && !memo[s[j]]) {
              memo[s[i]] = true;
              memo[s[j]] = true;

              currentSequence++;
              
              if(currentSequence > maximumNonRepeatSequence) {
                  maximumNonRepeatSequence = currentSequence
              }
          } else {
              break;
          }
           
       }
    }
    
    return maximumNonRepeatSequence;
};
