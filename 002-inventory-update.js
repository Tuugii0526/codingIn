function updateInventory(arr1, arr2) {
    const sortedArrOne=arr1.sort((a,b)=>
    {
        if(a[1]>b[1])
        {
            return 1
        }
        if(a[1]<b[1])
        {
            return -1
        }
        return 0
    })
    const sortedArrTwo=arr2.sort((a,b)=>
    {
        if(a[1]>b[1])
        {
            return 1
        }
        if(a[1]<b[1])
        {
            return -1
        }
        return 0
    })
    console.log('arr one:',sortedArrOne)
    console.log('arr two:',sortedArrTwo)
    let i=0
    let j=0
    while(i<sortedArrOne.length && j<sortedArrTwo.length)
    {
       if(arr1[i][1]===arr2[j][1]) 
       { 
        arr1[i][0]+=arr2[j][0]
        i++;
        j++
        continue
       }
       else
       {
           if(getCharCode(arr1[i][1])<getCharCode(arr2[j][1]))
           {
               i++
           }
           else 
           {
               arr1.push(arr2[j])
               j++
           }
       }
    }
    arr1.push(...arr2.slice(j))
  return  arr1.sort((a,b)=>
    {
        if(a[1]>b[1])
        {
            return 1
        }
        if(a[1]<b[1])
        {
            return -1
        }
        return 0
    })
 }
 function getCharCode(product){
     return product.toLowerCase().trim().charCodeAt(0)
 }
 // Example inventory lists
 var curInv = [
     [21, "Bowling Ball"],
     [2, "Dirty Sock"],
     [1, "Hai Pin"],
     [3,"Hair Nip"]
     [5, "Microphone"]
 ];
 
 var newInv = [
     [2, "Hair Pin"],
     [3, "Half-Eaten Apple"],
     [67, "Bowling Ball"],
     [7, "Toothpaste"]
 ];
 console.time('time')
updateInventory(curInv, newInv)
  console.timeEnd('time')