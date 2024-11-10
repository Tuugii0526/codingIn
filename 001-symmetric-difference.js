function sym(...args) {
  let sym=[]
  for(let i=0;i<=args.length-1;i++)
  {
     sym=symTwoEl(sym,args[i])
  }
  return sym;
}
function symTwoEl(arrOne,arrTwo){
  const sym=[]
  const sortedArrOne=Array.from(new Set(arrOne)).sort((a,b)=>a-b)
  const sortedArrTwo=Array.from(new Set(arrTwo)).sort((a,b)=>a-b)
  let i=0
  let j=0
  while(i<sortedArrOne.length && j<sortedArrTwo.length)
  {
    if(sortedArrOne[i]===sortedArrTwo[j])
     {
       i++
       j++
       continue
     }
     if(sortedArrOne[i]<sortedArrTwo[j])
     {
       sym.push(sortedArrOne[i])
       i++
       continue
     }
     if(sortedArrOne[i]>sortedArrTwo[j])
     {
       sym.push(sortedArrTwo[j])
       j++
     }
  } 
  if(sortedArrOne.length===i)
  {
    sym.push(...sortedArrTwo.slice(j))
  }
  if(sortedArrTwo.length===j)
  {
    sym.push(...sortedArrOne.slice(i))
  }
  return sym
}
console.time('time')
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
console.timeEnd('time')