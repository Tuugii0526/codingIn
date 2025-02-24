function merge(arr1,arr2){
    let i=0
    let j=0
    let sortedArray=[]
    while(i<arr1.length && j<arr2.length)
    {
      if(arr1[i]<arr2[j])
      {
        sortedArray.push(arr1[i])
        i++
      }
      else if(arr1[i]>arr2[j])
      {
        sortedArray.push(arr2[j])
        j++
        continue
      }
      else{
        sortedArray.push(arr1[i],arr2[j])
        i++
        j++
      }
    }
    if(i<arr1.length)
    {
      sortedArray.push(...arr1.slice(i))
    }
    if(j<arr2.length)
     {
       sortedArray.push(...arr2.slice(j))
     }
     return sortedArray
   }
   function mergeSort(array) {
     // Only change code below this line
     if(array.length<=1)
     {
      return array
     }
     const boundary=Math.floor(array.length/2)
     const firstArray=array.slice(0,boundary)
     const secondArray=array.slice(boundary)
     const sortedFirstArray=mergeSort(firstArray)
     const sortedSecondArray=mergeSort(secondArray)
     return merge(sortedFirstArray,sortedSecondArray)
     // Only change code above this line
   }
   