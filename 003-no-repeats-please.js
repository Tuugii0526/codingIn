function permAlone(str) {
    const strArray=str.split('')
   return getNoRepeats(strArray)
  }
  function getNoRepeats(strArray){
    
   if(strArray.length==1)
   {
     return strArray
   }
   const permutationArray=[]
   for(let i=0;i<strArray.length;i++)
   {
     let currElement=strArray[i]
     const remainingElements=strArray.filter((el,j)=>j!=i)
     const subPermutationArray=getNoRepeats(remainingElements)
     subPermutationArray.forEach(el=>{
        if(currElement!==el[0])
        {
       permutationArray.push(`${currElement}${el}`)

        }
     })
   }
   return permutationArray
  }
  