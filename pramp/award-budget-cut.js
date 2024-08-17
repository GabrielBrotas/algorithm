function findGrantsCap(grantsArray, newBudget) {

    grantsArray.sort((a, b) => {
      return a - b
    })
    
    let budgetSplit = newBudget / grantsArray.length; // 37
    let amountUsed = 0
  
    for(let i = 0; i < grantsArray.length; i++) {
  
      if(grantsArray[i] < budgetSplit) {
        amountUsed += grantsArray[i] // 190 - 2 / 5
        budgetSplit = (newBudget - amountUsed) / (grantsArray.length - (i + 1) );
        continue;
      };
      
      grantsArray[i] = budgetSplit;
    }
  
    return budgetSplit;
  }
  
//   ----
// def find_grants_cap(grantsArray, newBudget):
  
  
//   avg = float(newBudget / len(grantsArray)) # 3 / 2 => 1.5
  
//   above_avg = 0
//   print(newBudget,len(grantsArray) )
//   # [2, 4] => 3
//   # [1.5, 1.5] +> 1.5
//   for i in grantsArray:
//     if i < avg:
//       newBudget -= i
//     else:
//       above_avg += 1

//   return newBudget/above_avg
  