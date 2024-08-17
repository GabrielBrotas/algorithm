function deletionDistance(str1, str2) {
    if(!str1 && str2) return str2.length;
    if(!str2 && str1) return str1.length;
    if(str1 == str2) return 0;
    
    const result = getDiff(str1, str2)
    return result
}

function getDiff(str1, str2) {
    if(!str1 && str2) return str2.length;
    if(!str2 && str1) return str1.length;
    if(str1 == str2) return 0;
    
    let res = 0;
    if (str2[0] === str1[0]) {
      res = getDiff(str1.substring(1), str2.substring(1))    
    } else {
      res = Math.min(
        1 + getDiff(str1.substring(1), str2),
        1 + getDiff(str1, str2.substring(1)),
        2 + getDiff(str1.substring(1), str2.substring(1))
      )
    }
    
    return res;
}

console.log(deletionDistance("dog", "god"))