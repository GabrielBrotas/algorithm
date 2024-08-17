function meetingPlanner(slotsA, slotsB, dur) {
  let ia = 0;
  let ib = 0;
  
  while (ia < slotsA.length && ib < slotsB.length) {
    const start = Math.max(slotsA[ia][0], slotsB[ib][0]) // biggest start
    const end = Math.min(slotsA[ia][1], slotsB[ib][1]) // minimum finish

    if (start + dur <= end) {
      return [start, start + dur]      
    }

    if (slotsA[ia][1] < slotsB[ib][1]) ia++
    else ib++
  }
        
  return []
}

let  slotsA = [[10, 50], [60, 120], [140, 210]]
let   slotsB = [[0, 15], [60, 70]]
let dur = 8
// output: [60, 68]
let res = meetingPlanner(slotsA, slotsB, dur)
console.log({ res })

slotsA = [[10, 50], [60, 120], [140, 210]]
slotsB = [[0, 15], [60, 70]]
dur = 12
res = meetingPlanner(slotsA, slotsB, dur)
console.log({ res }) // []
