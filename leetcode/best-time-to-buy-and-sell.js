/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
      
    if(prices.length == 0) return 0;
    
    let min = Infinity;
    let max = 0;
      
    for(let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }

    return max;
  };