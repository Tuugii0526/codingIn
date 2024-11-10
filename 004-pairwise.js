function pairwise(arr, arg) {
    const indices=[]
    for(let i=0;i<arr.length-1;i++)
    {
      if(indices.includes(i))
      {
        continue
      }
      for(let j=i+1;j<arr.length;j++)
      {
         if(indices.includes(j))
          {
        continue
          }
        if((arr[i]+arr[j])==arg)
        {
           indices.push(i,j)
            break
        }
      }
  
    }
    return indices.reduce((a,b)=>a+b,0)
  }
  
  console.log(pairwise([0, 0, 0, 0, 1, 1], 1))
  